<script setup lang="ts">
const props = defineProps<{ label?: string; value?: number }>()
const emit = defineEmits<{ (e: 'change', value: number): void }>()
const [min, max, step] = [0, 100, 5]
const sliderValue = ref(props.value)

watch(sliderValue, (newValue) => emit('change', +(newValue || 0)))
</script>

<template>
  <div class="flex flex-row justify-between">
    <v-slider v-model="sliderValue" :label="label" color="deep-purple" :min="min" :max="max" :step="step" />
    <span class="basis-1/12 ml-3 mt-1">{{ sliderValue }}%</span>
  </div>
</template>
