<script setup lang="ts">
import { useLocalStorage } from '@/composables/useLocalStorage'

const { mainStore } = useLocalStorage()
console.log(mainStore.value)
</script>

<template>
  <div class="mx-auto container flex flex-col gap-4 items-center">
    <div class="bg-black w-24 h-24 flex justify-center items-center rounded-md text-white">
      Logo
    </div>
    <div class="font-extrabold text-2xl text-center">Herzlich Willkommen</div>
    <p class="text-center">
      Im folgenden erwarten dich 104 Fragen um deinen Persönlichkeitstypen herauszufinden. <br />
      Du kannst auch links erstellen um herauszufinden wie dich deine Freunde einschätzen
    </p>
    <p class="text-center">Die Fragen entstammen aus folgendem Buch</p>
    <div v-if="mainStore.me" class="text-center">
      Du hast bereits einen Test gemacht.
      <a class="underline" :href="`/result/${mainStore.me}`">Hier kommst du zu deinem Ergebnis</a>
    </div>
    <div v-if="mainStore?.others?.length > 0" class="text-center">
      Du hast bereits Tests die andere über dich gemacht haben im Browser gespeichert.
      <a class="underline" :href="`/compare`">Hier kannst du die Ergebnisse vergleichen</a>
    </div>
    <div class="flex gap-4 mt-2 items-center flex-col sm:flex-row">
      <router-link
        to="/me"
        class="bg-slate-200 p-8 rounded-md shadow-md w-full sm:w-56 sm:h-56 hover:scale-105 hover:shadow-lg transition-all duration-300 flex justify-center items-center text-center"
      >
        Meinen Persönlichkeitstest machen
      </router-link>
      <div>oder</div>
      <router-link
        to="/invite"
        class="bg-slate-200 p-8 rounded-md shadow-md w-full sm:w-56 sm:h-56 hover:scale-105 hover:shadow-lg transition-all duration-300 flex justify-center items-center text-center"
      >
        Freunde einladen den Test über dich zu machen
      </router-link>
    </div>
  </div>
</template>
