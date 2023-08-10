<script setup lang="ts">
import Labeled from '../Labeled.vue'

defineProps<{ label?: string }>()
</script>

<template>
  <Labeled :label="label">
    <slot />
  </Labeled>
</template>
