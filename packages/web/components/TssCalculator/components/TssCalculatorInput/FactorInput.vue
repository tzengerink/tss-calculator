<script setup lang="ts">
const props = defineProps<{ label?: string; value?: number }>()
const emit = defineEmits<{ (e: 'update', value: number): void }>()
const [min, max, step] = [0, 100, 5]

const onUpdate = (value: string) => {
  emit('update', Number(value))
}
</script>

<template>
  <div class="flex flex-row justify-between">
    <v-slider
      :model-value="props.value"
      :label="label"
      color="deep-purple"
      :min="min"
      :max="max"
      :step="step"
      @update:model-value="onUpdate"
    />
    <span class="basis-1/12 ml-3 mt-1">{{ props.value }}%</span>
  </div>
</template>
