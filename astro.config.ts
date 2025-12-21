import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import { defaultLang, showDefaultLang } from "./src/i18n/utils";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: defaultLang,
    routing: {
      fallbackType: "redirect",
      prefixDefaultLocale: showDefaultLang,
    },
  },
  integrations: [
    //@ts-ignore
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: defaultLang,
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
  ],
  build: {
    inlineStylesheets: "always",
  },
  prefetch: true,
  output: "server",
  //@ts-ignore
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: "https://bjohansebas.vercel.app",
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
