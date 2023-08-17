<script setup lang="ts">
import { Input } from '../../types/calculator'
import FactorInput from './FactorInput.vue'
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
  <v-card class="my-1 py-8 px-4 rounded-0">
    <NumberInput label="Target fitness" :value="input.targetFitness" @change="update('targetFitness', $event)" />
    <NumberInput
      label="Number of active weeks"
      link="numberOfActiveWeeks"
      :value="input.numberOfActiveWeeks"
      @change="update('numberOfActiveWeeks', $event)"
    />
    <NumberInput
      label="Number of recovery weeks"
      link="numberOfRestWeeks"
      :value="input.numberOfRestWeeks"
      @change="update('numberOfRestWeeks', $event)"
    />
    <FactorInput
      label="Recovery factor"
      link="restWeekFactor"
      :value="input.restWeekFactor"
      @change="update('restWeekFactor', $event)"
    />
  </v-card>
</template>
