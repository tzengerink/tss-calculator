<script setup lang="ts">
import PrependLabel from '../PrependLabel.vue'

defineProps<{ link?: string; label?: string }>()
</script>

<template>
  <PrependLabel :link="link" :label="label">
    <slot />
  </PrependLabel>
</template>
