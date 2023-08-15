<script setup lang="ts">
import TssCalculatorInput from './components/TssCalculatorInput/TssCalculatorInput.vue'
import TssCalculatorOutput from './components/TssCalculatorOutput.vue'
import CalculatorIcon from './components/CalculatorIcon.vue'
import { useCalculatorStore } from './stores/calculatorStore'

const store = useCalculatorStore()
</script>

<template>
  <div class="bg-cpwhite max-w-md mx-auto mt-2 md:mt-8 md:shadow-xl">
    <div class="flex justify-between p-4 border-b border-b-cpgray">
      <h1 class="flex flex-row font-normal text-2xl text-cppurple">
        <CalculatorIcon class="mt-1 mr-2" />
        <span>TSS Calculator</span>
      </h1>
      <button
        class="px-2 text-sm text-cpgray border border-cpgray rounded hover:text-cppink hover:border-cppink"
        title="Reset"
        @click="store.$reset"
      >
        Reset
      </button>
    </div>
    <TssCalculatorInput :input="store.input" @change="store.onChange" />
    <TssCalculatorOutput :output="store.output" />
  </div>
</template>
