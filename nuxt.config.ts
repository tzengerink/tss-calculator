// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    optimizeDeps: { exclude: ['fsevents'] },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@invictus.codes/nuxt-vuetify',
  ],
})
