<script setup lang="ts">
import { CheckIcon, XMarkIcon, ArrowUturnLeftIcon } from '@heroicons/vue/24/solid'
import { useQuestionnaire } from '@/composables/useQuestionnaire'
import { isDev, finish } from '@/utils/development'
import { computed } from 'vue'
import type { Questionnaire } from '@/types'
import DevelopmentFinishButton from './DevelopmentFinishButton.vue'

const props = defineProps<{ questions: Questionnaire; replaceName?: string }>()
const emits = defineEmits<{ (e: 'lastQuestionAnswered', data: string): void }>()

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
} = useQuestionnaire(props.questions)

function answer(value: 'J' | 'V' | 'N') {
  pick(value)
  if (canGoNext.value) {
    next()
  } else {
    const resultString = generateResultString()
    emits('lastQuestionAnswered', resultString)
  }
}

function clickFinish() {
  finish(results, selectedQuestionNumber)
}

const selectedQuestionReplaced = computed(() =>
  props.replaceName
    ? selectedQuestion.value.replace('{name}', props.replaceName)
    : selectedQuestion.value
)
</script>

<template>
  <div>
    <div class="text-center">
      <div
        class="bg-slate-400 p-1 rounded-md disabled:opacity-30 cursor-pointer w-auto inline-block"
        @click="back"
        :disabled="!canGoBack"
      >
        <ArrowUturnLeftIcon class="w-6 h-6" />
      </div>
    </div>

    <div class="text-center py-4">{{ selectedQuestionNumber }} / {{ totalQuestionCount }}</div>
    <div
      class="mx-auto w-full sm:w-96 bg-neutral-100 rounded-md shadow-md h-[300px] flex items-center"
    >
      <p class="text-lg text-center w-full p-2">
        {{ selectedQuestionReplaced }}
      </p>
    </div>
    <div class="mx-auto w-full p-2 mt-2 flex justify-center gap-2">
      <div
        class="rounded-full hover:bg-red-200 aspect-square w-10 flex justify-center items-center cursor-pointer"
        @click="answer('N')"
      >
        <XMarkIcon class="w-6 h-6" />
      </div>
      <div
        class="rounded-full hover:bg-neutral-200 aspect-square w-10 flex justify-center items-center cursor-pointer"
        @click="answer('V')"
      >
        🤷‍♂️
      </div>
      <div
        class="rounded-full hover:bg-green-200 aspect-square w-10 flex justify-center items-center cursor-pointer"
        @click="answer('J')"
      >
        <CheckIcon class="w-6 h-6" />
      </div>
    </div>
    <div class="flex justify-center" v-if="isDev">
      <DevelopmentFinishButton @click="clickFinish"
        >click button to set all results</DevelopmentFinishButton
      >
    </div>
  </div>
</template>
