<script setup lang="ts">
import { type WeeklyTssInput } from '@tss-calculator/formulas'
import FactorInput from './FactorInput.vue'
import NumberInput from './NumberInput.vue'

type Props = { input: WeeklyTssInput }
type Emits = { (e: 'change', input: WeeklyTssInput): void }

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const onUpdate = (key: string, value: number) => {
  emit('change', { ...props.input, [key]: value })
}
</script>

<template>
  <v-card class="my-1 py-8 px-4 rounded-0">
    <NumberInput label="Target fitness" :value="input.targetFitness" @update="onUpdate('targetFitness', $event)" />
    <NumberInput
      label="Number of active weeks"
      link="numberOfActiveWeeks"
      :value="input.numberOfActiveWeeks"
      @update="onUpdate('numberOfActiveWeeks', $event)"
    />
    <NumberInput
      label="Number of recovery weeks"
      link="numberOfRecoveryWeeks"
      :value="input.numberOfRecoveryWeeks"
      @update="onUpdate('numberOfRecoveryWeeks', $event)"
    />
    <FactorInput
      label="Recovery factor"
      link="recoveryWeekFactor"
      :value="input.recoveryWeekFactor"
      @update="onUpdate('recoveryWeekFactor', $event)"
    />
  </v-card>
</template>
