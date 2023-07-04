<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!--header class="bg-blue-400">
    <nav class="flex gap-4 px-4 py-2">
      <RouterLink class="text-white" to="/">Home</RouterLink>
      <RouterLink class="text-white" to="/about">About</RouterLink>
    </nav>
  </!--header-->

  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" class="p-2" />
    </transition>
  </router-view>
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.25s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
