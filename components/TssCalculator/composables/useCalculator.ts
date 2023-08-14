import { computed, Ref } from 'vue'
import { Input, Output } from '../types/calculator'

type Calculator = {
  input: Ref<Input>
  output: Ref<Output>
  reset: () => void
}

const DAYS_IN_A_WEEK = 7
const STORAGE_KEY = 'tss-calculator:input'

const DEFAULT_INPUT: Input = {
  targetFitness: 100,
  numberOfActiveWeeks: 3,
  numberOfRestWeeks: 1,
  restWeekFactor: 70,
}

const calculate = (input: Input): Output => {
  const numberOfWeeks = input.numberOfActiveWeeks + input.numberOfRestWeeks
  const activeWeekRatio = numberOfWeeks * input.numberOfActiveWeeks * 1
  const restWeekRatio = numberOfWeeks * input.numberOfRestWeeks * (input.restWeekFactor / 100)
  const totalLoad = DAYS_IN_A_WEEK * numberOfWeeks * input.targetFitness
  const loadQuotient = totalLoad / (activeWeekRatio + restWeekRatio)

  return {
    activeWeekTss: (loadQuotient * activeWeekRatio) / input.numberOfActiveWeeks,
    restWeekTss: (loadQuotient * restWeekRatio) / input.numberOfRestWeeks,
  }
}

export const useCalculator = (): Calculator => {
  const input = ref(DEFAULT_INPUT)
  const output = computed(() => calculate(input.value))

  onMounted(() => {
    syncRef(useLocalStorage(STORAGE_KEY, DEFAULT_INPUT), input)
  })

  const reset = () => {
    input.value = DEFAULT_INPUT
  }

  return { input, output, reset }
}
