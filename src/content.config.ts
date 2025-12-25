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

export const collections = {
  cv: cvCollection,
  oss: OSS,
};
