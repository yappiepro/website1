<script setup lang="ts">
import { cn } from '~/lib/utils.js'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('rounded-2xl bg-white/5 border border-white/10 text-card-foreground shadow-sm', props.class)">
    <slot />
  </div>
</template>
