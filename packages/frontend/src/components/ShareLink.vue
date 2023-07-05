<script setup lang="ts">
import { ref } from 'vue'
import { isDev } from '@/utils/development'

const props = defineProps<{ link: string }>()

const copyClicked = ref(false)

function copy() {
  if (props.link) {
    navigator.clipboard.writeText(props.link)
    copyClicked.value = true
    setTimeout(() => {
      copyClicked.value = false
    }, 1000)
  }
}
</script>

<template>
  <code
    v-if="link"
    class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6"
  >
    <span class="flex gap-4">
      <a :href="link" v-if="isDev">{{ link }}</a>
      <span v-else>{{ link }}</span>
    </span>

    <div class="cursor-pointer" :class="{ copy: copyClicked }">
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
    </div>
  </code>
</template>

<style scoped>
.copy {
  @apply relative;
}
.copy::after {
  content: 'copied';
  @apply absolute;
  @apply text-white;
  @apply bg-slate-600;
  @apply p-1;
  @apply rounded-md;
  @apply mx-auto;
  @apply text-sm;
  top: -4px;
}
</style>
