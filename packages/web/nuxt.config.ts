// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@invictus.codes/nuxt-vuetify',
  ],
  devtools: { enabled: false },
  eslint: {
    lintOnStart: false,
  },
  vite: {
    optimizeDeps: { exclude: ['fsevents'] },
  },
})
