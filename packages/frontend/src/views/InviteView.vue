<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const pronone = ref('he')
const link = ref<string | null>(null)

function generate() {
  const baseUrl = `${window.location.protocol}//${window.location.host}/invite/`
  const properties = `${name.value};${pronone.value};${new Date().getTime()}`
  link.value = baseUrl + btoa(properties)
}

function copy() {
  if (link.value) navigator.clipboard.writeText(link.value)
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

    <code
      v-if="link"
      class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6"
    >
      <span class="flex gap-4">
        <span>{{ link }}</span>
      </span>

      <svg
        class="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        @click="copy"
      >
        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
        <path
          d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
        ></path>
      </svg>
    </code>
  </div>
</template>
