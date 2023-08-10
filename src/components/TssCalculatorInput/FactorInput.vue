<script setup lang="ts">
const props = defineProps<{ value?: number }>()
const emit = defineEmits<{ (e: 'change', value: number): void }>()
const [min, max, step] = [0, 100, 5]

const onChange = ($event: Event) => {
  emit('change', +($event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="flex flex-row justify-between">
    <input
      class="basis-11/12 accent-cppink"
      type="range"
      list="markers"
      :min="min"
      :max="max"
      :step="step"
      :value="props.value"
      @change="onChange"
    />
    <datalist id="markers">
      <option value="0"></option>
      <option value="25"></option>
      <option value="50"></option>
      <option value="75"></option>
      <option value="100"></option>
    </datalist>
    <span class="basis-1/12 ml-3 mt-1 text-sm">{{ props.value }}%</span>
  </div>
</template>
