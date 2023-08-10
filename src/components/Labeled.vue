<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <div class="flex flex-col p-4 border-b border-b-cpgray">
    <label class="mb-2 text-sm">{{ label }}</label>
    <div>
      <slot />
    </div>
  </div>
</template>
