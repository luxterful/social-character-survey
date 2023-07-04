<script setup lang="ts">
import { computed } from 'vue'
import { labelMapping } from '@/utils/resultMapping'
import VueApexCharts from 'vue3-apexcharts'
import { useRoute } from 'vue-router'
import { useResult } from '@/composables/useResult'

const route = useRoute()
const resultStringBase64 = route.params.value

console.log(resultStringBase64)

const resultsPercentage = useResult(resultStringBase64 as string)

console.log(resultsPercentage)

const chartOptions = computed(() => ({
  chart: {
    id: 'vuechart-example',
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: Object.keys(labelMapping).map((val) => labelMapping[val])
  },
  yaxis: {
    max: 100
  }
}))

const series = computed(() => [
  {
    name: 'score',
    data: resultsPercentage
  }
])
</script>

<template>
  <div class="mx-auto container h-5">
    <VueApexCharts type="bar" :options="chartOptions" :series="series" />
  </div>
</template>
