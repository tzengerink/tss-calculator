<script setup lang="ts">
import { Output } from '../types/calculator'

const props = defineProps<{ output?: Output }>()
</script>

<template>
  <v-card class="py-8 rounded-0">
    <div class="flex flex-row">
      <div class="basis-1/2">
        <v-card-subtitle>Active week TSS</v-card-subtitle>
        <span class="px-4 text-3xl text-deep-purple">{{ Math.round(props.output?.activeWeekTss || 0) }}</span>
      </div>
      <div class="basis-1/2">
        <v-card-subtitle>Recovery week TSS</v-card-subtitle>
        <span class="px-4 text-3xl text-deep-purple">{{ Math.round(props.output?.restWeekTss || 0) }}</span>
      </div>
    </div>
  </v-card>
</template>
