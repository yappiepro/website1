<script setup lang="ts">
import { cn } from '~/lib/utils.js'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <h3 :class="cn('text-xl font-semibold text-white', props.class)">
    <slot />
  </h3>
</template>
