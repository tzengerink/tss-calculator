<script setup lang="ts">
import MenuBar from '../components/MenuBar/MenuBar.vue'
import { useCalculatorStore } from '../components/TssCalculator/stores/calculatorStore'

const calculatorStore = useCalculatorStore()
const menuItems = [{ icon: 'mdi-undo', label: 'Reset', action: calculatorStore.$reset }]

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
  <main class="mx-auto sm:mt-8 sm:max-w-md">
    <MenuBar :items="menuItems" />
    <slot />
  </main>
</template>
