import type { Ref } from 'vue'

export const isDev = import.meta.env.DEV

export async function finish(results: Ref<any>, questionNumber: Ref<number>) {
  const res: any = {}
  const answers = ['J', 'V', 'N']

  for (let i = 1; i <= 104; i++) {
    res[i] = answers[Math.floor(Math.random() * answers.length)]
  }
  results.value = res
  console.log(res)
  questionNumber.value = 104
}
