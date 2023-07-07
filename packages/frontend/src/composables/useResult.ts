import type { CategoryLetter, Result, Score } from '@/types'
import { mapResult, categoryMapping } from '@/utils/resultMapping'

export function useResult(resultStringBase64: string): Result {
  const resultString = atob(resultStringBase64)

  const resultArray = resultString.split(';')[0].split('') as ('J' | 'V' | 'N')[]

  const resultPerCategory: Score = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0
  }

  for (const [idx, result] of resultArray.entries()) {
    const questionNumber = idx + 1
    const res = mapResult(questionNumber, result)

    for (const key of Object.keys(res) as CategoryLetter[]) {
      resultPerCategory[key] += res[key]!
    }
  }

  const result: Result = Object.keys(categoryMapping).map((catLetter) => {
    const { label, max } = categoryMapping[catLetter as CategoryLetter]
    const points = (resultPerCategory as any)[catLetter] as number
    return {
      label,
      max,
      letter: catLetter as CategoryLetter,
      percentage: points === 0 ? points : Math.floor((points / max) * 100),
      points
    }
  })

  return result
}
