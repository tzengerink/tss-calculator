<script setup lang="ts">
import { useCalculator } from '../composables/useCalculator'
import { Input } from '../types/calculator'
import TssCalculatorInput from './TssCalculatorInput/TssCalculatorInput.vue'
import TssCalculatorOutput from './TssCalculatorOutput.vue'
import CalculatorIcon from './CalculatorIcon.vue'
import ResetIcon from './ResetIcon.vue'

const { input, output, reset } = useCalculator()

const onChange = (newInput: Input) => {
  input.value = newInput
}
</script>

<template>
  <div class="bg-cpwhite max-w-md mx-auto mt-2 md:mt-8 md:shadow-xl">
    <div class="flex justify-between p-4 border-b border-b-cpgray">
      <h1 class="flex flex-row font-normal text-2xl text-cppurple">
        <CalculatorIcon class="mt-1 mr-2" />
        <span>TSS Calculator</span>
      </h1>
      <button
        class="px-2 text-2xl text-cpgray border border-cpgray rounded hover:text-cppink hover:border-cppink"
        title="Reset"
        @click="reset"
      >
        <ResetIcon />
      </button>
    </div>
    <TssCalculatorInput :input="input" @change="onChange" />
    <TssCalculatorOutput :output="output" />
  </div>
</template>
