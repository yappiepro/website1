<script setup lang="ts">
import { computed } from 'vue'

export interface BreadcrumbItem {
  label: string
  href?: string
}

const props = defineProps<{
  items: BreadcrumbItem[]
}>()

// Schema.org BreadcrumbList
const breadcrumbSchema = computed(() => ({
  '@type': 'BreadcrumbList',
  itemListElement: props.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.href ? `https://artemselifanov.ru${item.href}` : undefined
  }))
}))

useSchemaOrg([breadcrumbSchema])
</script>

<template>
  <nav aria-label="Хлебные крошки" class="breadcrumbs">
    <ol class="flex items-center gap-2 text-sm">
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
        <NuxtLink
          v-if="item.href && index < items.length - 1"
          :href="item.href"
          class="text-gray-500 hover:text-gray-900 transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
        <span
          v-else
          class="text-gray-900 font-medium"
          :aria-current="index === items.length - 1 ? 'page' : undefined"
        >
          {{ item.label }}
        </span>
        <svg
          v-if="index < items.length - 1"
          class="w-4 h-4 text-gray-400 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  padding: 0.5rem 0;
}

.breadcrumbs ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumbs li {
  display: inline-flex;
  align-items: center;
}
</style>
