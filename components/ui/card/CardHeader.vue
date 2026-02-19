<script setup lang="ts">
import { cn } from '~/lib/utils.js'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('flex flex-col p-6', props.class)">
    <slot />
  </div>
</template>
