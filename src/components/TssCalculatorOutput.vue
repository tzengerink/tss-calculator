<script setup lang="ts">
import Labeled from './Labeled.vue'
import { Output } from '../types/calculator'

const props = defineProps<{ output?: Output }>()
</script>

<template>
  <div class="flex flex-row">
    <Labeled class="basis-1/2" label="Active week TSS">
      <span class="text-2xl">{{
        Math.round(props.output?.activeWeekTss || 0)
      }}</span>
    </Labeled>
    <Labeled class="basis-1/2" label="Rest week TSS">
      <span class="text-2xl">{{
        Math.round(props.output?.restWeekTss || 0)
      }}</span>
    </Labeled>
  </div>
</template>
