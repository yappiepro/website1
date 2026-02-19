<script setup>
import { reactiveOmit } from "@vueuse/core"
import { AccordionContent } from "reka-ui"
import { cn } from "~/lib/utils.js"

const props = defineProps({
  class: String,
})

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    :class="
      cn(
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        props.class,
      )
    "
  >
    <div class="pb-4 pt-0">
      <slot />
    </div>
  </AccordionContent>
</template>
