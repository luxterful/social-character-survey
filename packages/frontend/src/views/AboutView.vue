<script setup lang="ts">
import { ref } from 'vue'

const pronone = ref('he')
</script>

<template>
  <h1>Wie heißt du?</h1>
  <input class="border border-black" />
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
</template>
