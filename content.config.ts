import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        category: z.string().optional(),
        cluster: z.string(),
        date: z.string(),
        image: z.string().optional().nullable(),
      }),
    }),
  },
})
