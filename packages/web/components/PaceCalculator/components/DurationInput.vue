<script setup lang="ts">
const props = defineProps<{ value?: number }>()
const emit = defineEmits<{ (e: 'update', value: number): void }>()

const onSecondsChange = (value: string) => {
  emit('update', Number(value))
}
</script>

<template>
  <v-text-field
    :model-value="props.value"
    class="mb-4"
    label="Seconds"
    type="number"
    density="compact"
    hide-details="auto"
    variant="outlined"
    color="deep-purple"
    @update:model-value="onSecondsChange"
  />
</template>
