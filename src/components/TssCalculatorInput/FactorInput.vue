<script setup lang="ts">
const props = defineProps<{ value?: number }>()
const emit = defineEmits<{ (e: 'change', value: number): void }>()
const [min, max] = [0, 100]

const onChange = ($event: Event) => {
  emit('change', +($event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    type="range"
    :min="min"
    :max="max"
    :value="props.value"
    @change="onChange"
  />
  <span>{{ props.value }}%</span>
</template>
