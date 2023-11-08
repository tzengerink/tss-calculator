<script setup lang="ts">
import DurationInput from './components/DurationInput.vue'

const duration = ref(0)
const onUpdateDuration = (value: number) => (duration.value = value)
</script>

<template>
  <v-card class="my-1 py-8 px-4 rounded-0">
    <DurationInput :value="duration" @update="onUpdateDuration" />
  </v-card>
</template>
