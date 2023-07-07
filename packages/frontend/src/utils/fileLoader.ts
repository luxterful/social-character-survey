import q_i_male_de from '@/assets/questions/i_male_de.txt?raw'
import q_name_male_de from '@/assets/questions/name_male_de.txt?raw'

export function getQuestions() {
  const questionsArray = q_name_male_de.split('\n').reduce((acc, curr, idx) => {
    if (curr !== '') {
      acc[idx + 1] = curr
    }
    return acc
  }, {} as any)
  return questionsArray
}
