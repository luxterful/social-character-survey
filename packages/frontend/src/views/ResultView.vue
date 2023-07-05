<script setup lang="ts">
import { computed } from 'vue'
import { labelMapping } from '@/utils/resultMapping'
import VueApexCharts from 'vue3-apexcharts'
import { useRoute } from 'vue-router'
import { useResult } from '@/composables/useResult'
import { useLocalStorage } from '@/composables/useLocalStorage'
import router from '@/router'

const route = useRoute()
const resultStringBase64 = route.params.value as string

const resultsPercentage = useResult(resultStringBase64)

const isAdd = route.query.add === null

const { mainStore } = useLocalStorage()

const isAlreadySaved = computed(() => mainStore.value.friends.includes(resultStringBase64))

const chartOptions = computed(() => ({
  chart: {
    id: 'vuechart-example',
    toolbar: {
      show: false
    }
  },
  labels: Object.keys(labelMapping).map((val) => labelMapping[val])
}))

const series = resultsPercentage

function clickSave() {
  if (isAlreadySaved.value) {
    return
  }
  mainStore.value.friends.push(resultStringBase64)
}
</script>

<template>
  <div class="mx-auto container">
    <h1 class="text-2xl font-extrabold">Ergebnis</h1>
    <div
      class="w-full p-2 rounded-md bg-orange-100 border-t-4 border-orange-500 text-orange-900"
      v-if="isAdd && !isAlreadySaved"
    >
      Speichern?

      <button class="p-2" @click="clickSave">ja</button><button class="p-2">nein</button>
    </div>
    <div
      class="w-full p-2 rounded-md bg-teal-100 border-t-4 border-teal-500 text-teal-900"
      v-if="isAdd && isAlreadySaved"
    >
      Dieses Ergebnis is bereits gespeichert
    </div>

    <div class="mx-auto container h-5">
      <VueApexCharts type="pie" width="800" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>
