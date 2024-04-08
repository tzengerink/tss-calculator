import { defineStore } from 'pinia'
import { weeklyTss, type WeeklyTssInput, type WeeklyTssOutput } from '@tss-calculator/formulas'

const STORE_NAME = 'tss-calculator'
const STORAGE_KEY = `${STORE_NAME}:input`

const DEFAULT_INPUT: WeeklyTssInput = {
  targetFitness: 100,
  numberOfActiveWeeks: 3,
  numberOfRecoveryWeeks: 1,
  recoveryWeekFactor: 70,
}

type Store = {
  input: Ref<WeeklyTssInput>
  output: Ref<WeeklyTssOutput>
  onChange: (newInput: WeeklyTssInput) => void
  $reset: () => void
}

export const useCalculatorStore = defineStore(STORE_NAME, (): Store => {
  const input = ref(DEFAULT_INPUT)
  const output = computed(() => weeklyTss(input.value))
  const onChange = (newInput: WeeklyTssInput) => (input.value = newInput)
  const $reset = () => onChange(DEFAULT_INPUT)

  onMounted(() => {
    syncRef(useLocalStorage(STORAGE_KEY, DEFAULT_INPUT), input)
  })

  return { input, output, onChange, $reset }
})
