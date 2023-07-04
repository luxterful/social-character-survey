<script setup lang="ts"></script>

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
    <div class="flex gap-4 mt-2">
      <router-link to="/me">
        <button class="bg-slate-200 p-2 rounded-md shadow-md">
          Meinen Persönlichkeitstest machen
        </button>
      </router-link>
      <button class="bg-slate-200 p-2 rounded-md shadow-md">Links für Freunde erstellen</button>
    </div>
  </div>
</template>
