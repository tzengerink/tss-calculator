<script setup lang="ts">
useHead({
  title: 'TSS Calculator',
  link: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,300&display=swap',
      rel: 'stylesheet',
    },
  ],
  bodyAttrs: {
    class: 'bg-cpwhite font-mono text-cpblack font-light md:bg-cpgray',
  },
})
</script>

<template>
  <main>
    <slot />
  </main>
</template>
