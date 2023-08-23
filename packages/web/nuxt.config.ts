// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@invictus.codes/nuxt-vuetify',
  ],
  runtimeConfig: {
    public: {
      sentryDsn: process.env.NUXT_PUBLIC_SENTRY_DSN ?? '',
      sentryEnvironment: process.env.NUXT_PUBLIC_SENTRY_ENVIRONMENT ?? '',
    },
  },
  devtools: { enabled: false },
  vite: {
    optimizeDeps: { exclude: ['fsevents'] },
  },
})
