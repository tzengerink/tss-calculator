<script setup lang="ts">
import { Output } from '../types/calculator'
import PrependLabel from './PrependLabel.vue'

const props = defineProps<{ output?: Output }>()
</script>

<template>
  <div class="flex flex-row">
    <PrependLabel class="basis-1/2" label="Active week TSS">
      <span class="text-2xl">{{ Math.round(props.output?.activeWeekTss || 0) }}</span>
    </PrependLabel>
    <PrependLabel class="basis-1/2" label="Rest week TSS">
      <span class="text-2xl">{{ Math.round(props.output?.restWeekTss || 0) }}</span>
    </PrependLabel>
  </div>
</template>
