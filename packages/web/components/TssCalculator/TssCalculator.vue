<script setup lang="ts">
import TssCalculatorInput from './components/TssCalculatorInput/TssCalculatorInput.vue'
import TssCalculatorOutput from './components/TssCalculatorOutput.vue'
import { useCalculatorStore } from './stores/calculatorStore'

const store = useCalculatorStore()
// const menuItems = [{ icon: 'mdi-undo', label: 'Reset', action: store.$reset }]
</script>

<template>
  <TssCalculatorInput :input="store.input" @change="store.onChange" />
  <TssCalculatorOutput :output="store.output" />
</template>
