<script setup lang="ts">
import { cn } from '@/lib/utils.js'

interface Props {
  variant?: 'default' | 'secondary' | 'outline'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const variants = {
  default: 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white',
  secondary: 'bg-white/10 text-white',
  outline: 'border border-white/20 text-white',
}
</script>

<template>
  <div :class="cn('inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors', variants[variant], props.class)">
    <slot />
  </div>
</template>
