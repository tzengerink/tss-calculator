<script setup lang="ts">
useHead({
  title: 'TSS Calculator',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,300&display=swap',
    },
    { rel: 'manifest', href: 'manifest.json' },
  ],
  htmlAttrs: {
    class: 'overflow-y-auto',
  },
  bodyAttrs: {
    class: 'font-light sm:bg-cpgray',
  },
})
</script>

<template>
  <main>
    <slot />
  </main>
</template>
