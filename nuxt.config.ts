// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 700],
      Inter: [400, 700],
      Lato: [100, 300, 400, 700],
      Raleway: {
        wght: [100, 400]
      }
    }
  },
  ssr: false,
  css: ["~/assets/css/tailwind.css"],
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: "pt-br",
      },
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=yes",
      title: "Feedbacker",
      meta: [
        { name: "description", content: "O seu hub para visualizar os feedbacks da sua empresa." },
        { name: "theme-color", content: '#38bdf8' },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Feedbacker" },
        { property: "og:title", content: "Feedbacker" },
        { property: "og:description", content: "O seu hub para visualizar os feedbacks da sua empresa." }
      ]
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: false
  },
})