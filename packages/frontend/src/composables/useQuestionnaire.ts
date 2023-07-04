import { computed, ref } from 'vue'

export function useQuestionnaire(questions: string[]) {
  const totalQuestionCount = computed(() => Object.keys(questions).length)

  const selectedQuestionNumber = ref(1)
  const selectedQuestion = computed(() => questions[selectedQuestionNumber.value])

  function next() {
    selectedQuestionNumber.value += 1
  }

  const canGoNext = computed(() => {
    return selectedQuestionNumber.value < totalQuestionCount.value
  })

  function back() {
    if (canGoBack.value) {
      selectedQuestionNumber.value -= 1
    }
  }
  const canGoBack = computed(() => {
    return selectedQuestionNumber.value > 1
  })

  const results = ref<any>({})

  function pick(value: 'J' | 'V' | 'N') {
    results.value[selectedQuestionNumber.value] = value
  }

  function getResultString() {
    return Object.keys(results.value)
      .map((key) => results.value[key])
      .join('')
  }

  return {
    totalQuestionCount,
    selectedQuestionNumber,
    selectedQuestion,
    next,
    canGoNext,
    back,
    canGoBack,
    results,
    pick,
    getResultString
  }
}
