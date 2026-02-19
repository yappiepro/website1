<script setup lang="ts">
import { cn } from '~/lib/utils.js'

interface Props {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'xl'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

const variants = {
  default: 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-500/25',
  secondary: 'bg-white/10 text-white hover:bg-white/20',
  outline: 'border border-white/20 text-white hover:bg-white/10',
  ghost: 'text-white hover:bg-white/10',
}

const sizes = {
  default: 'px-4 py-2 text-sm',
  sm: 'px-3 py-1.5 text-xs',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg',
}
</script>

<template>
  <button :class="cn('inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:pointer-events-none disabled:opacity-50', variants[variant], sizes[size], props.class)">
    <slot />
  </button>
</template>
