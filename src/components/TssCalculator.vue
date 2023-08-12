<script setup lang="ts">
import { useCalculator } from '../composables/useCalculator'
import { Input } from '../types/calculator'
import TssCalculatorInput from './TssCalculatorInput/TssCalculatorInput.vue'
import TssCalculatorOutput from './TssCalculatorOutput.vue'

const { input, output, reset } = useCalculator()

const onChange = (newInput: Input) => {
  input.value = newInput
}
</script>

<template>
  <div class="bg-cpwhite">
    <div class="flex justify-between p-2">
      <h1 class="font-normal text-3xl text-cppurple">TSS CALCULATOR</h1>
      <button
        class="px-2 text-cpgray border border-cpgray rounded hover:text-cppink hover:border-cppink"
        @click="reset"
      >
        Reset
      </button>
    </div>
    <TssCalculatorInput :input="input" @change="onChange" />
    <TssCalculatorOutput :output="output" />
  </div>
</template>
