<script setup>
import { AccordionRoot, useForwardPropsEmits } from "reka-ui"

const props = defineProps({
  type: String,
  collapsible: Boolean,
})

const emits = defineEmits(['update:modelValue'])

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <AccordionRoot v-bind="forwarded">
    <slot />
  </AccordionRoot>
</template>
