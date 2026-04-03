import { defineCollection, z } from 'astro:content';

// Empty placeholder — add post content here when needed
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string().optional(),
  }),
});

const travel = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dates: z.string(),
    excerpt: z.string(),
    coverImage: z.string().nullable().optional(),
  }),
});

export const collections = { travel, posts };
