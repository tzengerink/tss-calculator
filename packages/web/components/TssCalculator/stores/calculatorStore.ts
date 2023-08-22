import { defineStore } from 'pinia'
import { Input, Output } from '../types/calculator'

const DAYS_IN_A_WEEK = 7
const STORE_NAME = 'tss-calculator'
const STORAGE_KEY = `${STORE_NAME}:input`

const DEFAULT_INPUT: Input = {
  targetFitness: 100,
  numberOfActiveWeeks: 3,
  numberOfRestWeeks: 1,
  restWeekFactor: 70,
}

type Store = {
  input: Ref<Input>
  output: Ref<Output>
  onChange: (newInput: Input) => void
  $reset: () => void
}

export const useCalculatorStore = defineStore(STORE_NAME, (): Store => {
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

  const input = ref(DEFAULT_INPUT)
  const output = computed(() => calculate(input.value))
  const onChange = (newInput: Input) => (input.value = newInput)
  const $reset = () => onChange(DEFAULT_INPUT)

  onMounted(() => {
    syncRef(useLocalStorage(STORAGE_KEY, DEFAULT_INPUT), input)
  })

  return { input, output, onChange, $reset }
})
