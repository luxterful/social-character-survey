<template>
  <div class="flex flex-wrap gap-1 justify-between">
    <button
      v-for="color in colors"
      :key="'color-' + color"
      class="p-2 rounded-md h-10 w-10 drop-shadow-sm border border-neutral-100 flex justify-center items-center"
      :style="{ backgroundColor: color }"
      @click="$emit('update:modelValue', color)"
    >
      <CheckIcon
        v-if="modelValue === color"
        class="w-5 h-5"
        :style="{ color: colorContrast(color) }"
      />
    </button>
    <div class="flex flex-auto"></div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'

defineProps(['modelValue'])
defineEmits(['update:modelValue'])

const colors = [
  '#e6194B',
  '#3cb44b',
  '#ffe119',
  '#4363d8',
  '#f58231',
  '#911eb4',
  '#42d4f4',
  '#f032e6',
  '#bfef45',
  '#fabed4',
  '#469990',
  '#dcbeff',
  '#9A6324',
  '#fffac8',
  '#800000',
  '#aaffc3',
  '#808000',
  '#ffd8b1',
  '#000075',
  '#a9a9a9',
  '#ffffff',
  '#000000'
]

function colorContrast(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!

  const red = parseInt(result[1], 16)
  const green = parseInt(result[2], 16)
  const blue = parseInt(result[3], 16)

  return red * 0.299 + green * 0.587 + blue * 0.114 > 186 ? '#000000' : '#ffffff'
}
</script>
