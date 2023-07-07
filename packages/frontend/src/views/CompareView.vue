<script setup lang="ts">
import { computed, ref, type ComputedRef } from 'vue'
import { categoryMapping } from '@/utils/resultMapping'
import VueApexCharts from 'vue3-apexcharts'
import { useRoute } from 'vue-router'
import { useResult } from '@/composables/useResult'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { TransitionRoot, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import type { ApexOptions } from 'apexcharts'
import TestDataToStore from '@/components/TestDataToStore.vue'

const { mainStore } = useLocalStorage()

const result = useResult(mainStore.value.me!)

const options: ComputedRef<ApexOptions> = computed(() => ({
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  series: [
    {
      name: 'Mein Ergebnis',
      data: result
        .map((res) => ({
          x: res.label,
          y: res.percentage,
          max: res.max,
          points: res.points,
          barHeightOffset: -10,
          goals: mainStore.value.others.map((o) => {
            const oRes = useResult(o.result).find((f) => f.label === res.label)

            return {
              name: o.name,
              value: oRes?.percentage,
              points: oRes?.points,
              strokeColor: o.color,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round'
            }
          })
        }))
        .sort((a, b) => b.y - a.y),
      color: '#123'
    }
  ],
  legend: {
    show: true,

    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  },
  dataLabels: {
    formatter(val: string, opts: any) {
      const { max, points } = opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
      return `${points} von ${max} Punkten (${val}%)`
    },
    style: {
      fontSize: '10',
      colors: ['#bcbcbc']
    }
  },
  xaxis: {
    max: 100
  }
}))

function deleteOther(index: number) {
  mainStore.value.others.splice(index, 1)
}
</script>

<template>
  <div class="mx-auto container">
    <h1 class="text-2xl font-extrabold">Ergebnis</h1>

    <VueApexCharts
      type="bar"
      width="100%"
      height="600"
      :options="options"
      :series="options.series"
    />

    <div>me: {{ !!mainStore.me }}</div>
    <div>others: {{ mainStore?.others?.length || 0 }}</div>
    <ul v-if="mainStore?.others?.length">
      <li v-for="(other, index) in mainStore?.others" :key="other.name">
        "{{ other.name }}" - {{ other.color }} - <a @click="deleteOther(index)">löschen</a>
      </li>
    </ul>
    <TestDataToStore />
  </div>
</template>
