<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const val = atob(route.params.value as string)

const [name, pronome] = val.split(';')
</script>

<template>
  <div class="mx-auto container flex flex-col gap-4 items-center">
    <div class="font-extrabold text-2xl text-center">Du wurdest eingeladen</div>
    <p class="text-center">{{ name }} ({{ pronome }}) hat dich eingeladen</p>
    <router-link :to="`/invite/${route.params.value}/start`">
      <button>starten</button>
    </router-link>
  </div>
</template>
