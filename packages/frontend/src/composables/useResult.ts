import { mapResult, maxScore } from '@/utils/resultMapping'

export function useResult(resultStringBase64: string) {
  const resultString = atob(resultStringBase64)

  const resultArray = resultString.split(';')[0].split('') as ('J' | 'V' | 'N')[]

  const resultTypes: any = {
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
    const res = mapResult(idx + 1, result)

    for (const key of Object.keys(res)) {
      resultTypes[key] += res[key]
    }
  }

  return Object.keys(resultTypes).map((key) => {
    const res = resultTypes[key]
    const max = maxScore[key]
    if (res === 0) return 0
    return Math.floor((res / max) * 100)
  })
}
