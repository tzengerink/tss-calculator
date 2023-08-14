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
  <FormField label="Target fitness">
    <NumberInput :value="input.targetFitness" @change="update('targetFitness', $event)" />
  </FormField>
  <FormField label="Number of active weeks">
    <NumberInput :value="input.numberOfActiveWeeks" @change="update('numberOfActiveWeeks', $event)" />
  </FormField>
  <FormField label="Number of rest weeks">
    <NumberInput :value="input.numberOfRestWeeks" @change="update('numberOfRestWeeks', $event)" />
  </FormField>
  <FormField label="Rest week factor">
    <FactorInput :value="input.restWeekFactor" @change="update('restWeekFactor', $event)" />
  </FormField>
</template>
