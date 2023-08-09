<script setup lang="ts">
import TssCalculatorInput from './TssCalculatorInput/TssCalculatorInput.vue'
import TssCalculatorOutput from './TssCalculatorOutput.vue'
import { useCalculator } from './useCalculator'

const { input, output, update, reset } = useCalculator()
</script>

<template>
  <div>
    <h1>TSS CALCULATOR</h1>
    <button @click="reset">X</button>
  </div>
  <TssCalculatorInput :input="input" @change="update" />
  <TssCalculatorOutput :output="output" />
</template>
