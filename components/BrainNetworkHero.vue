<template>
  <div ref="rootEl" class="brain-webgl" aria-label="3D нейросеть">
    <div ref="canvasEl" class="brain-canvas"></div>
    <div
      v-for="node in nodes"
      :key="node.id"
      class="brain-node"
      :style="{ left: `${node.x}%`, top: `${node.y}%` }"
    >
      <a :href="node.href" class="brain-link">{{ node.label }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'

type MindNode = {
  id: string
  label: string
  href: string
  x: number
  y: number
}

type Edge = {
  from: string
  to: string
}

const props = defineProps<{
  nodes: MindNode[]
  edges: Edge[]
}>()

const rootEl = ref<HTMLElement | null>(null)
const canvasEl = ref<HTMLElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let frameId = 0
let disposeResize: (() => void) | null = null

const particleTracks: Array<{
  mesh: THREE.Mesh
  curve: THREE.CatmullRomCurve3
  t: number
  speed: number
  direction: 1 | -1
}> = []

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

function createFilamentCurve(origin: THREE.Vector3, rng: () => number) {
  const points: THREE.Vector3[] = [origin.clone()]

  let current = origin.clone()
  const steps = 6 + Math.floor(rng() * 4)

  for (let i = 0; i < steps; i += 1) {
    const spread = 0.35 + i * 0.2
    const dx = (rng() - 0.5) * 1.4
    const dy = (rng() - 0.5) * 1.1
    const dz = (rng() - 0.5) * 1.6

    current = current.clone().add(new THREE.Vector3(dx * spread, dy * spread, dz * spread))
    points.push(current)
  }

  return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.4)
}

function setupScene() {
  if (!canvasEl.value || !rootEl.value) {
    return
  }

  scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0x01040a, 4, 19)

  const width = rootEl.value.clientWidth
  const height = rootEl.value.clientHeight

  camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 100)
  camera.position.set(0, 0, 7.2)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  canvasEl.value.appendChild(renderer.domElement)

  const ambient = new THREE.AmbientLight(0x5ca6ff, 0.42)
  scene.add(ambient)

  const blueLight = new THREE.PointLight(0x6fbfff, 1.2, 28)
  blueLight.position.set(0.5, 1.2, 5.2)
  scene.add(blueLight)

  const whiteRim = new THREE.PointLight(0xe9fdff, 0.7, 22)
  whiteRim.position.set(-2.3, -1.8, 4.3)
  scene.add(whiteRim)

  const rng = seededRandom(42)
  const somaCenters = [
    new THREE.Vector3(-0.42, 0.2, 0.18),
    new THREE.Vector3(0.1, -0.08, -0.2),
    new THREE.Vector3(0.4, 0.23, 0.14)
  ]

  for (let i = 0; i < somaCenters.length; i += 1) {
    const soma = new THREE.Mesh(
      new THREE.SphereGeometry(0.42 - i * 0.07, 36, 36),
      new THREE.MeshPhysicalMaterial({
        color: 0xe4f9ff,
        transparent: true,
        opacity: 0.35,
        roughness: 0.12,
        metalness: 0,
        clearcoat: 1,
        transmission: 0.22,
        emissive: 0x7cc6ff,
        emissiveIntensity: 0.14
      })
    )
    soma.position.copy(somaCenters[i])
    scene.add(soma)
  }

  const filamentCurves: THREE.CatmullRomCurve3[] = []

  for (let i = 0; i < 52; i += 1) {
    const origin = somaCenters[Math.floor(rng() * somaCenters.length)]
      .clone()
      .add(new THREE.Vector3((rng() - 0.5) * 0.4, (rng() - 0.5) * 0.35, (rng() - 0.5) * 0.45))

    const curve = createFilamentCurve(origin, rng)
    filamentCurves.push(curve)

    const radius = 0.008 + rng() * 0.019
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 110, radius, 10, false),
      new THREE.MeshPhysicalMaterial({
        color: 0xe8fbff,
        transparent: true,
        opacity: 0.4 + rng() * 0.35,
        roughness: 0.24,
        metalness: 0,
        clearcoat: 1,
        emissive: 0x87d0ff,
        emissiveIntensity: 0.1 + rng() * 0.2
      })
    )
    scene.add(tube)

    const glowGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(80))
    const glow = new THREE.Line(
      glowGeometry,
      new THREE.LineBasicMaterial({ color: 0x9fdbff, transparent: true, opacity: 0.15 })
    )
    scene.add(glow)
  }

  const starCount = 1200
  const stars = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount; i += 1) {
    stars[i * 3] = (rng() - 0.5) * 24
    stars[i * 3 + 1] = (rng() - 0.5) * 18
    stars[i * 3 + 2] = (rng() - 0.5) * 26
  }
  const starsGeometry = new THREE.BufferGeometry()
  starsGeometry.setAttribute('position', new THREE.BufferAttribute(stars, 3))

  const starsMaterial = new THREE.PointsMaterial({
    color: 0xd3ecff,
    size: 0.03,
    transparent: true,
    opacity: 0.85
  })
  const starField = new THREE.Points(starsGeometry, starsMaterial)
  scene.add(starField)

  const particleGeometry = new THREE.SphereGeometry(0.03, 10, 10)
  const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xcaf6ff })
  const particleCount = 140

  for (let i = 0; i < particleCount; i += 1) {
    const curve = filamentCurves[Math.floor(rng() * filamentCurves.length)]
    const mesh = new THREE.Mesh(particleGeometry, particleMaterial)
    scene.add(mesh)
    particleTracks.push({
      mesh,
      curve,
      t: rng(),
      speed: 0.08 + rng() * 0.18,
      direction: rng() > 0.5 ? 1 : -1
    })
  }

  const clock = new THREE.Clock()
  const lookTarget = new THREE.Vector3(0, 0, 0)

  const animate = () => {
    if (!renderer || !scene || !camera) {
      return
    }

    const elapsed = clock.getElapsedTime()
    const delta = Math.min(clock.getDelta(), 0.033)

    for (const particle of particleTracks) {
      particle.t += delta * particle.speed * particle.direction
      if (particle.t > 1) {
        particle.t = 0
      }
      if (particle.t < 0) {
        particle.t = 1
      }
      const p = particle.curve.getPointAt(particle.t)
      particle.mesh.position.copy(p)
      const pulse = 0.8 + Math.sin((particle.t + elapsed) * 24) * 0.25
      particle.mesh.scale.setScalar(pulse)
    }

    starField.rotation.y = elapsed * 0.012
    starField.rotation.x = Math.sin(elapsed * 0.04) * 0.02

    camera.position.x = Math.sin(elapsed * 0.11) * 0.38
    camera.position.y = Math.cos(elapsed * 0.08) * 0.24
    camera.position.z = 7 + Math.sin(elapsed * 0.07) * 0.16

    lookTarget.set(Math.sin(elapsed * 0.1) * 0.15, Math.cos(elapsed * 0.09) * 0.1, 0)
    camera.lookAt(lookTarget)

    renderer.render(scene, camera)
    frameId = window.requestAnimationFrame(animate)
  }

  animate()

  const onResize = () => {
    if (!renderer || !camera || !rootEl.value) {
      return
    }

    const nextWidth = rootEl.value.clientWidth
    const nextHeight = rootEl.value.clientHeight

    camera.aspect = nextWidth / nextHeight
    camera.updateProjectionMatrix()
    renderer.setSize(nextWidth, nextHeight)
  }

  window.addEventListener('resize', onResize)
  disposeResize = () => window.removeEventListener('resize', onResize)
}

function teardownScene() {
  window.cancelAnimationFrame(frameId)
  disposeResize?.()
  disposeResize = null

  if (scene) {
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      if (mesh.geometry) {
        mesh.geometry.dispose()
      }
      const material = mesh.material as THREE.Material | THREE.Material[] | undefined
      if (Array.isArray(material)) {
        material.forEach((mat) => mat.dispose())
      } else {
        material?.dispose()
      }
    })
  }

  particleTracks.splice(0, particleTracks.length)

  if (renderer) {
    renderer.dispose()
    renderer.domElement.remove()
  }

  renderer = null
  scene = null
  camera = null
}

onMounted(() => {
  setupScene()
})

onUnmounted(() => {
  teardownScene()
})
</script>

<style scoped>
.brain-webgl {
  position: relative;
  width: 100%;
  min-height: clamp(520px, 82vh, 920px);
  overflow: hidden;
  background:
    radial-gradient(circle at 32% 44%, rgba(41, 84, 150, 0.2), transparent 38%),
    radial-gradient(circle at 70% 20%, rgba(36, 89, 170, 0.14), transparent 44%),
    linear-gradient(160deg, #010206 0%, #030a14 55%, #010105 100%);
  border-bottom: 1px solid rgba(146, 188, 246, 0.18);
}

.brain-webgl::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 45%, rgba(0, 0, 0, 0.45) 100%);
  pointer-events: none;
}

.brain-canvas {
  position: absolute;
  inset: 0;
}

.brain-node {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.brain-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #ecf8ff;
  text-decoration: none;
  font-size: clamp(0.8rem, 1.1vw, 1rem);
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(169, 208, 255, 0.42);
  background: rgba(8, 18, 34, 0.66);
  box-shadow: 0 0 20px rgba(110, 182, 255, 0.33);
  backdrop-filter: blur(4px);
  transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
}

.brain-link::before {
  content: '';
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: #d4f7ff;
  box-shadow: 0 0 12px rgba(169, 241, 255, 0.95);
}

.brain-link:hover {
  transform: translateY(-2px) scale(1.03);
  border-color: rgba(193, 231, 255, 0.85);
  box-shadow: 0 0 28px rgba(152, 212, 255, 0.62);
}

@media (max-width: 900px) {
  .brain-webgl {
    min-height: clamp(420px, 66vh, 700px);
  }
}

@media (max-width: 620px) {
  .brain-link {
    font-size: 0.74rem;
    padding: 0.42rem 0.65rem;
  }
}
</style>
