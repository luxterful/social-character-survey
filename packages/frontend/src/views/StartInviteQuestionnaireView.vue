<script setup lang="ts">
import { getQuestions } from '@/utils/fileLoader'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import ShareLink from '@/components/ShareLink.vue'
import QuestionnaireComponent from '@/components/QuestionnaireComponent.vue'

const route = useRoute()
const questions = ref()

const val = atob(route.params.value as string)
const [name, pronome] = val.split(';')

onMounted(async () => {
  const gender = (() => {
    if (pronome === 'he') return 'male'
    if (pronome === 'she') return 'female'
    return 'diverse'
  })()
  questions.value = await getQuestions(`name_${gender}_de`)
})

const shareString = ref('')
function onLastQuestionAnswered(resultString: string) {
  const baseUrl = `${window.location.protocol}//${window.location.host}/result/`
  shareString.value = `${baseUrl}${resultString}?add`
}
</script>

<template>
  <div class="mx-auto container">
    <QuestionnaireComponent
      v-if="questions"
      :questions="questions"
      :replace-name="name"
      @last-question-answered="onLastQuestionAnswered"
    />
    <div v-if="shareString" class="flex justify-center">
      <ShareLink :link="shareString" />
    </div>
  </div>
</template>
