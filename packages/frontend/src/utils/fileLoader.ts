import questions from '@/assets/questions.txt?raw'

export function getQuestions() {
  const questionsArray = questions.split('\n').reduce((acc, curr, idx) => {
    if (curr !== '') {
      acc[idx + 1] = curr
    }
    return acc
  }, {} as any)
  return questionsArray
}
