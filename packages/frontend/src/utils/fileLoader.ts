import type { Questionnaire } from '@/types'

export async function getQuestions(fileIdentifier: string): Promise<Questionnaire> {
  const questions = await (await fetch(`/questions/${fileIdentifier}.txt`)).text()

  const questionsArray = questions.split('\n').reduce((acc, curr, idx) => {
    if (curr !== '') {
      acc[idx + 1] = curr
    }
    return acc
  }, {} as any)
  return questionsArray
}
