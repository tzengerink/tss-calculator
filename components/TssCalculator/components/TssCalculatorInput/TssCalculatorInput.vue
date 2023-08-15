<script setup lang="ts">
import { Input } from '../../types/calculator'
import FactorInput from './FactorInput.vue'
import FormField from './FormField.vue'
import NumberInput from './NumberInput.vue'

type Props = { input: Input }
type Emits = { (e: 'change', input: Input): void }

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const update = (key: string, value: number) => {
  emit('change', { ...props.input, [key]: value })
}
</script>

<template>
  <FormField link="targetFitness" label="Target fitness">
    <NumberInput link="targetFitness" :value="input.targetFitness" @change="update('targetFitness', $event)" />
  </FormField>
  <FormField link="numberOfActiveWeeks" label="Number of active weeks">
    <NumberInput
      link="numberOfActiveWeeks"
      :value="input.numberOfActiveWeeks"
      @change="update('numberOfActiveWeeks', $event)"
    />
  </FormField>
  <FormField link="numberOfRestWeeks" label="Number of rest weeks">
    <NumberInput
      link="numberOfRestWeeks"
      :value="input.numberOfRestWeeks"
      @change="update('numberOfRestWeeks', $event)"
    />
  </FormField>
  <FormField link="restWeekFactor" label="Rest week factor">
    <FactorInput link="restWeekFactor" :value="input.restWeekFactor" @change="update('restWeekFactor', $event)" />
  </FormField>
</template>
