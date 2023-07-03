<script setup lang="ts">
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { getQuestions } from '@/utils/fileLoader'
import { computed, ref } from 'vue'
import { mapResult, labelMapping, maxScore } from '@/utils/resultMapping'
import VueApexCharts from 'vue3-apexcharts'

const question = getQuestions()
const index = ref(1)

function next() {
  index.value += 1
}

const results = ref<any>({})

const resultTypes = ref<any>({
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0
})

const resultTypePercentage = computed(() => {
  return Object.keys(resultTypes.value).map((key) => {
    const res = resultTypes.value[key]
    const max = maxScore[key]
    if (res === 0) return 0
    return Math.floor((res / max) * 100)
  })
})

function pick(value: 'J' | 'V' | 'N') {
  results.value[index.value] = value
  const res = mapResult(index.value, value)

  for (const key of Object.keys(res)) {
    resultTypes.value[key] += res[key]
  }

  console.log(resultTypePercentage.value)

  next()
}

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
    data: resultTypePercentage.value
  }
])

console.log('result', mapResult(51, 'N'))
</script>

<template>
  <div class="mx-auto container h-5">
    <div class="text-center">{{ index }} / {{ Object.keys(question).length }}</div>
    <div class="mx-auto w-96 bg-neutral-100 p-2 rounded-md shadow-md min-h-[250px]">
      {{ question[index] }}
    </div>
    <div class="mx-auto w-96 p-2 mt-2 flex justify-center gap-2">
      <button
        class="rounded-full bg-red-300 aspect-square w-10 flex justify-center items-center"
        @click="pick('N')"
      >
        <XMarkIcon class="w-6 h-6" />
      </button>
      <button
        class="rounded-full bg-neutral-200 aspect-square w-10 flex justify-center items-center"
        @click="pick('V')"
      >
        🤷‍♂️
      </button>
      <button
        class="rounded-full bg-green-300 aspect-square w-10 flex justify-center items-center"
        @click="pick('J')"
      >
        <CheckIcon class="w-6 h-6" />
      </button>
    </div>
    <div>
      {{ results }}
    </div>

    <div class="mt-5">
      <ul>
        <li v-for="(value, key) in resultTypes" :key="key">{{ labelMapping[key] }}: {{ value }}</li>
      </ul>
    </div>
    <VueApexCharts width="500" type="bar" :options="chartOptions" :series="series" />
  </div>
</template>
