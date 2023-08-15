<script setup lang="ts">
defineProps<{ link?: string; label?: string }>()
</script>

<template>
  <div class="flex flex-col p-4 border-b border-b-cpgray">
    <label :for="link" class="mb-2 text-sm">{{ label }}</label>
    <slot />
  </div>
</template>
