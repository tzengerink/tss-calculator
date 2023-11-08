<script setup lang="ts">
const isOpen = ref(false)
const onClose = () => (isOpen.value = false)
const onToggle = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <v-app-bar title="TSS Calculator" color="deep-purple" elevation="1">
    <template #prepend>
      <v-app-bar-nav-icon @click="onToggle"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
  <v-navigation-drawer class="bg-deep-purple" :model-value="isOpen" elevation="1">
    <v-list color="transparant">
      <NuxtLink to="/" @click="onClose">
        <v-list-item link title="Weekly TSS" prepend-icon="mdi-calendar"></v-list-item>
      </NuxtLink>
      <NuxtLink to="/pace" @click="onClose">
        <v-list-item link title="Pace" prepend-icon="mdi-watch"></v-list-item>
      </NuxtLink>
    </v-list>
  </v-navigation-drawer>
</template>
