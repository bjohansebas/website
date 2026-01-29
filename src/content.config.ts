import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { CVSchema } from "./content/cv/schema";

const cvCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/cv" }),
  schema: CVSchema,
});

const OSS = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/oss" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().default(false).optional(),
    date: z.coerce
      .date()
      .describe(
        "A date string or YAML date that is compatible with JavaScript’s `new Date()` constructor.",
      ),
  }),
});

export const collections = {
  cv: cvCollection,
  oss: OSS,
  blog,
};
