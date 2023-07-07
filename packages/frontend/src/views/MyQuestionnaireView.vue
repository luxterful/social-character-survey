<script setup lang="ts">
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { getQuestions } from '@/utils/fileLoader'
import { useQuestionnaire } from '@/composables/useQuestionnaire'
import { useRouter } from 'vue-router'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { isDev, finish } from '@/utils/development'

const router = useRouter()
const { mainStore } = useLocalStorage()

const questions = getQuestions()

const {
  back,
  canGoBack,
  canGoNext,
  generateResultString,
  next,
  pick,
  selectedQuestion,
  selectedQuestionNumber,
  totalQuestionCount,
  results
} = useQuestionnaire(questions)

function answer(value: 'J' | 'V' | 'N') {
  pick(value)
  if (canGoNext.value) {
    next()
  } else {
    const resultString = generateResultString()
    mainStore.value.me = resultString
    router.push({ name: 'result', params: { value: resultString } })
  }
}

function clickFinish() {
  finish(results, selectedQuestionNumber)
}
</script>

<template>
  <div class="mx-auto container">
    <div class="text-center">
      <button
        class="bg-slate-400 p-1 rounded-md disabled:opacity-30"
        @click="back"
        :disabled="!canGoBack"
      >
        undo
      </button>
    </div>

    <div class="text-center py-4">{{ selectedQuestionNumber }} / {{ totalQuestionCount }}</div>
    <div class="mx-auto w-96 bg-neutral-100 rounded-md shadow-md h-[300px] flex items-center">
      <p class="text-lg text-center w-full p-2">
        {{ selectedQuestion }}
      </p>
    </div>
    <div class="mx-auto w-96 p-2 mt-2 flex justify-center gap-2">
      <button
        class="rounded-full hover:bg-red-200 aspect-square w-10 flex justify-center items-center"
        @click="answer('N')"
      >
        <XMarkIcon class="w-6 h-6" />
      </button>
      <button
        class="rounded-full hover:bg-neutral-200 aspect-square w-10 flex justify-center items-center"
        @click="answer('V')"
      >
        🤷‍♂️
      </button>
      <button
        class="rounded-full hover:bg-green-200 aspect-square w-10 flex justify-center items-center"
        @click="answer('J')"
      >
        <CheckIcon class="w-6 h-6" />
      </button>
    </div>
    <div class="flex justify-center" v-if="isDev">
      <button @click="clickFinish">finish</button>
    </div>
  </div>
</template>
