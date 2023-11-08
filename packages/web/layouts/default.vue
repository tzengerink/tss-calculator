<script setup lang="ts">
useHead({
  title: 'TSS Calculator',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,300&display=swap',
    },

    // Source: https://favicon.io/favicon-generator/
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'images/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'images/png', sizes: '16x16', href: '/favicon-16x16.png' },

    { rel: 'manifest', href: 'manifest.json' },
  ],
  htmlAttrs: { class: 'overflow-y-auto' },
  bodyAttrs: { class: 'font-light' },
})
</script>

<template>
  <v-layout>
    <MenuBar :items="[]" />
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>
