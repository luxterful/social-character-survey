<script setup lang="ts">
import { computed, ref } from 'vue'

const name = ref('')
const pronone = ref('he')

const properties = computed(() => {
  return `${name.value};${pronone.value};${new Date().getTime()}`
})
const link = computed(() => {
  return btoa(properties.value)
})
</script>

<template>
  <div>
    <h1>Wie heißt du?</h1>
    <input v-model="name" class="border border-black" />
    <h1>Anrede?</h1>
    <div class="bg-slate-300 rounded-md w-auto inline-block">
      <div class="flex gap-1">
        <button
          class="p-2 rounded-md"
          :class="[pronone == 'he' ? 'bg-slate-500 text-white' : 'hover:bg-slate-400']"
          @click="pronone = 'he'"
        >
          he / him
        </button>
        <button
          class="p-2 rounded-md"
          :class="[pronone == 'she' ? 'bg-slate-500 text-white' : 'hover:bg-slate-400']"
          @click="pronone = 'she'"
        >
          she / her
        </button>
        <button
          class="p-2 rounded-md"
          :class="[pronone == 'they' ? 'bg-slate-500 text-white' : 'hover:bg-slate-400']"
          @click="pronone = 'they'"
        >
          they / them
        </button>
      </div>
    </div>
    <div class="mt-2">
      <button class="p-2 rounded-md bg-slate-400">generate link</button>
    </div>
    <div>{{ properties }}</div>
    {{ link }}
  </div>
</template>
