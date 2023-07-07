<script setup lang="ts">
import { computed, ref } from 'vue'
import { categoryMapping } from '@/utils/resultMapping'
import VueApexCharts from 'vue3-apexcharts'
import { useRoute } from 'vue-router'
import { useResult } from '@/composables/useResult'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { TransitionRoot, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import ColorPicker from '@/components/ColorPicker.vue'

const route = useRoute()
const resultStringBase64 = route.params.value as string

const result = useResult(resultStringBase64)

result.sort((a, b) => {
  return b.percentage - a.percentage
})

console.log(result)

const isAdd = route.query.add === null

const { mainStore } = useLocalStorage()

const isSavedLocally = computed(() =>
  mainStore.value.others?.find((o) => o.result === resultStringBase64)
)

const chartOptions = computed(() => ({
  chart: {
    id: 'vuechart-example',
    toolbar: {
      show: false
    }
  },
  labels: result.map((val) => val.label)
}))

const series = result.map((val) => val.percentage)

const isOpen = ref(false)
const name = ref('')
const color = ref<null | string>()

function clickSave() {
  if (isSavedLocally.value) {
    return
  }
  isOpen.value = true
}

function confirmSave() {
  mainStore.value.others.push({ name: name.value, result: resultStringBase64, color: color.value! })
  isOpen.value = false
}
</script>

<template>
  <div>
    <div class="mx-auto container">
      <h1 class="text-2xl font-extrabold">Ergebnis</h1>
      <div
        class="w-full p-2 rounded-md bg-orange-100 border-t-4 border-orange-500 text-orange-900"
        v-if="isAdd && !isSavedLocally"
      >
        Speichern?

        <button class="p-2" @click="clickSave">ja</button><button class="p-2">nein</button>
      </div>
      <div
        class="w-full p-2 rounded-md bg-teal-100 border-t-4 border-teal-500 text-teal-900"
        v-if="isSavedLocally"
      >
        Dieses Ergebnis ist im Browser gespeichert unter dem Namen "{{ isSavedLocally.name }}"
      </div>

      <div class="mx-auto container h-5">
        <VueApexCharts type="pie" width="800" :options="chartOptions" :series="series" />
      </div>
    </div>
    <TransitionRoot
      :show="isOpen"
      as="template"
      enter="duration-500 ease-in"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-300 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <Dialog @close="isOpen = false" class="relative z-50">
        <!-- The backdrop, rendered as a fixed sibling to the panel container -->
        <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

        <!-- Full-screen container to center the panel -->
        <div class="fixed inset-0 flex items-center justify-center p-4">
          <!-- The actual dialog panel -->
          <DialogPanel
            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
          >
            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
              Ergebnis im Browser speichern
            </DialogTitle>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Damit du Ergebnisse vergleichen kannst und sie richtig zuordnen kannst musst du
                ihnen einen Namen und eine Farbe geben.
              </p>
            </div>

            <div class="mt-2">
              <div class="w-full">
                <div class="relative h-10 w-full min-w-[200px]">
                  <input
                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    v-model="name"
                  />
                  <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                  >
                    Name
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <ColorPicker v-model="color" />
            </div>

            <div class="mt-4">
              <button
                type="button"
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="confirmSave"
              >
                Speichern
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
