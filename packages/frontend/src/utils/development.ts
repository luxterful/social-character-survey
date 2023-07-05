import type { Ref } from 'vue'
import demodata from '@/assets/examples/l.json?raw'

export const isDev = import.meta.env.DEV

export async function finish(results: Ref<any>, questionNumber: Ref<number>) {
  results.value = JSON.parse(demodata)
  console.log(results.value)
  questionNumber.value = 104
}
