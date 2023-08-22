<script setup lang="ts">
import MenuBar from './components/MenuBar.vue'
import TssCalculatorInput from './components/TssCalculatorInput/TssCalculatorInput.vue'
import TssCalculatorOutput from './components/TssCalculatorOutput.vue'
import { useCalculatorStore } from './stores/calculatorStore'

const store = useCalculatorStore()
const menuItems = [{ icon: 'mdi-undo', label: 'Reset', action: store.$reset }]
</script>

<template>
  <div class="mx-auto sm:mt-8 sm:max-w-md">
    <MenuBar :items="menuItems" />
    <TssCalculatorInput :input="store.input" @change="store.onChange" />
    <TssCalculatorOutput :output="store.output" />
  </div>
</template>
