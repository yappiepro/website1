import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const sourcePath = path.resolve(
  'public/images/qEn1wkzLYNKoMAqAfilf8VpRldA_WB_U7kVsn5R0bPFjDLm4vUyYVljN9428atn8pVZtBEpsiet_C-WZ6RRZixmm 1 (1).png'
)
const outputDir = path.resolve('public/favicons')
const faviconIcoPath = path.resolve('public/favicon.ico')
const sourceCopyPath = path.join(outputDir, 'source.png')

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-144x144.png', size: 144 }
]

const ensureDir = async (dirPath) => {
  await fs.mkdir(dirPath, { recursive: true })
}

const resizeToPngBuffer = async (size) => {
  return sharp(sourcePath)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer()
}

const writePng = async (size, destPath) => {
  const buffer = await resizeToPngBuffer(size)
  await fs.writeFile(destPath, buffer)
  return buffer
}

const run = async () => {
  await ensureDir(outputDir)

  // Keep a stable copy of the source for future regenerations.
  await fs.copyFile(sourcePath, sourceCopyPath)

  const icoBuffers = []

  for (const { name, size } of sizes) {
    const destPath = path.join(outputDir, name)
    const buffer = await writePng(size, destPath)
    if ([16, 32, 48].includes(size)) {
      icoBuffers.push(buffer)
    }
  }

  // Add 48px icon for .ico generation (not used as standalone PNG).
  const ico48 = await resizeToPngBuffer(48)
  icoBuffers.push(ico48)

  const ico = await pngToIco(icoBuffers)
  await fs.writeFile(faviconIcoPath, ico)

  console.log('Favicons generated in', outputDir)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
