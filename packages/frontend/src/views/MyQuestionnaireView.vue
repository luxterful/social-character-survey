<script setup lang="ts">
import { getQuestions } from '@/utils/fileLoader'
import { useRouter } from 'vue-router'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { onMounted, ref } from 'vue'
import QuestionnaireComponent from '@/components/QuestionnaireComponent.vue'

const router = useRouter()
const { mainStore } = useLocalStorage()

const questions = ref()

onMounted(async () => {
  questions.value = await getQuestions(`i_male_de`)
})

function onLastQuestionAnswered(resultString: string) {
  mainStore.value.me = resultString
  router.push({ name: 'result', params: { value: resultString } })
}
</script>

<template>
  <div class="mx-auto container">
    <QuestionnaireComponent
      v-if="questions"
      :questions="questions"
      @last-question-answered="onLastQuestionAnswered"
    />
  </div>
</template>
