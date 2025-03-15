// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: "pt-br",
      },
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=yes",
      title: "Feedbaddit",
      meta: [
        { name: "description", content: "O seu hub para visualizar os feedbacks da sua empresa." },
        { name: "theme-color", content: process.env.THEME_COLOR },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Feedbaddit" },
        { property: "og:title", content: "Feedbaddit" },
        { property: "og:description", content: "O seu hub para visualizar os feedbacks da sua empresa." }
      ]
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
})