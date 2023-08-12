<script setup lang="ts">
import PrependLabel from '../PrependLabel.vue'

defineProps<{ label?: string }>()
</script>

<template>
  <PrependLabel :label="label">
    <slot />
  </PrependLabel>
</template>
