<script setup lang="ts">
const props = defineProps<{ label?: string; value?: number }>()
const emit = defineEmits<{ (e: 'change', value: number): void }>()

const numberValue = ref(props.value)

watch(numberValue, (newValue) => emit('change', +(newValue || 0)))
</script>

<template>
  <v-text-field
    v-model="numberValue"
    class="mb-4"
    :label="label"
    type="number"
    density="compact"
    hide-details="auto"
    variant="outlined"
    color="deep-purple"
  />
</template>
