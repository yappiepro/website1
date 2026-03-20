<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isLoading"
        class="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-200"
      >
        <div
          class="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 transition-all duration-300 ease-linear"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const isLoading = ref(false)
const progress = ref(0)
const router = useRouter()

let progressInterval = null

function startProgress() {
  isLoading.value = true
  progress.value = 10
  progressInterval = setInterval(() => {
    progress.value += Math.random() * 15
    if (progress.value > 80) {
      clearInterval(progressInterval)
    }
  }, 200)
}

function finishProgress() {
  if (progressInterval) {
    clearInterval(progressInterval)
  }
  progress.value = 100
  setTimeout(() => {
    isLoading.value = false
    progress.value = 0
  }, 300)
}

onMounted(() => {
  router.beforeEach(() => {
    startProgress()
  })

  router.afterEach(() => {
    finishProgress()
  })
})

onUnmounted(() => {
  if (progressInterval) {
    clearInterval(progressInterval)
  }
})
</script>
