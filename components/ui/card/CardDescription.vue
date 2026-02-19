<script setup lang="ts">
import { cn } from '@/lib/utils.js'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <p :class="cn('text-sm text-gray-400', props.class)">
    <slot />
  </p>
</template>
