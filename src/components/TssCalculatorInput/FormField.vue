<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <div class="form-field">
    <label class="form-field__label">{{ label }}</label>
    <slot />
  </div>
</template>

<style scoped>
.form-field {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}
.form-field__label {
  width: 140px;
}
</style>
