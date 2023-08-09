<script setup lang="ts">
import { Output } from './types'

const props = defineProps<{ output?: Output }>()
</script>

<template>
  <div>Active: {{ Math.round(props.output?.activeWeekTss || 0) }}</div>
  <div>Rest: {{ Math.round(props.output?.restWeekTss || 0) }}</div>
</template>
