export async function getQuestions(fileIdentifier: string) {
  const questions = await (await fetch(`/public/questions/${fileIdentifier}.txt`)).text()

  const questionsArray = questions.split('\n').reduce((acc, curr, idx) => {
    if (curr !== '') {
      acc[idx + 1] = curr
    }
    return acc
  }, {} as any)
  return questionsArray
}
