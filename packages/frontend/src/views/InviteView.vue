<script setup lang="ts">
import ShareLink from '@/components/ShareLink.vue'
import { ref } from 'vue'

const name = ref('')
const pronone = ref('he')
const link = ref<string | null>(null)

function generate() {
  const baseUrl = `${window.location.protocol}//${window.location.host}/invite/`
  const properties = `${name.value};${pronone.value};${new Date().getTime()}`
  link.value = baseUrl + btoa(properties)
}
</script>

<template>
  <div class="mx-auto container flex flex-col gap-4 items-center">
    <div class="font-extrabold text-2xl text-center">Freunde einladen</div>
    <p class="text-center">
      Damit Freunde dein Persönlichkeitsprofil ermitteln können gib bitte deinen Namen an und wie du
      gerne angesprochen werden würdest.
    </p>
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
      <button class="p-2 rounded-md bg-slate-400" @click="generate">generate link</button>
    </div>

    <ShareLink v-if="link" :link="link"></ShareLink>
  </div>
</template>
