import { computed, ref, Ref } from 'vue'
import storage from '../components/storage'
import { Input, Output } from '../types'

type Calculator = {
  input: Ref<Input>
  output: Ref<Output>
  update: (newInput: Input) => void
  reset: () => void
}

const DAYS_IN_A_WEEK = 7
const STORAGE_KEY = 'tss-calculator:input'

const DEFAULT_INPUT: Input = {
  targetFitness: 100,
  numberOfActiveWeeks: 3,
  numberOfRestWeeks: 1,
  restWeekFactor: 75,
}

const calculate = (input: Input): Output => {
  const numberOfWeeks = input.numberOfActiveWeeks + input.numberOfRestWeeks
  const activeWeekRatio = numberOfWeeks * input.numberOfActiveWeeks * 1
  const restWeekRatio =
    numberOfWeeks * input.numberOfRestWeeks * (input.restWeekFactor / 100)
  const totalLoad = DAYS_IN_A_WEEK * numberOfWeeks * input.targetFitness
  const loadQuotient = totalLoad / (activeWeekRatio + restWeekRatio)

  return {
    activeWeekTss: (loadQuotient * activeWeekRatio) / input.numberOfActiveWeeks,
    restWeekTss: (loadQuotient * restWeekRatio) / input.numberOfRestWeeks,
  }
}

export const useCalculator = (): Calculator => {
  const input = ref(storage.get(STORAGE_KEY, DEFAULT_INPUT))
  const output = computed(() => calculate(input.value))

  const update = (newInput: Input) => {
    input.value = newInput
    storage.set(STORAGE_KEY, newInput)
  }

  const reset = () => {
    input.value = DEFAULT_INPUT
    storage.remove(STORAGE_KEY)
  }

  return { input, output, update, reset }
}
