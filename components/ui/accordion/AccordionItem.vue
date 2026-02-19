<script setup>
import { reactiveOmit } from "@vueuse/core"
import { AccordionItem } from "reka-ui"
import { cn } from "~/lib/utils.js"

const props = defineProps({
  class: String,
  value: String,
  disabled: Boolean,
})

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <AccordionItem
    v-bind="delegatedProps"
    :class="cn(props.class)"
  >
    <slot />
  </AccordionItem>
</template>
