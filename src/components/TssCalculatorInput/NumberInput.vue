<script setup lang="ts">
const props = defineProps<{ value?: number }>()
const emit = defineEmits<{ (e: 'change', value: number): void }>()

const onChange = ($event: Event) => {
  emit('change', +($event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    class="p-1 w-full accent-cppink"
    type="number"
    :value="props.value"
    @change="onChange"
  />
</template>
