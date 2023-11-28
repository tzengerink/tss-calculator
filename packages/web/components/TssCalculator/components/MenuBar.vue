<script setup lang="ts">
import { type MenuItem } from '../types/calculator'

defineProps<{ items?: MenuItem[] }>()
</script>

<template>
  <v-toolbar title="Tss Calculator" color="deep-purple" elevation="1">
    <v-menu transition="scale-transition">
      <template #activator="{ props }">
        <v-btn icon v-bind="props" title="menu">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in items" :key="item.label" color="deep-purple" @click="item.action">
          <template #prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
