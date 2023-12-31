import type { CategoryLetter, CategoryMapping, Score, ScoreMapping } from '@/types'

const scoreMapping: ScoreMapping = {
  1: { j: { J: 2, V: 1 } },
  2: { j: { J: 2, V: 1 } },
  3: { j: { J: 2, V: 1 } },
  4: { k: { J: 2, V: 1 } },
  5: { k: { J: 2, V: 1 } },
  6: { k: { J: 2, V: 1 } },
  7: { d: { N: 2, V: 1 } },
  8: { m: { J: 2, V: 1 } },
  9: { m: { J: 2, V: 1 } },
  10: { e: { N: 2, V: 1 } },
  11: { e: { N: 2, V: 1 } },
  12: { f: { J: 2, V: 1 } },
  13: { g: { J: 2, V: 1 } },
  14: { l: { J: 2, V: 1 } },
  15: { c: { J: 2, V: 1 } },
  16: { g: { J: 2, V: 1 } },
  17: { f: { J: 2, V: 1 } },
  18: { c: { J: 2, V: 1 } },
  19: { g: { J: 2, V: 1 } },
  20: { g: { J: 2, V: 1 } },
  21: { d: { J: 2, V: 1 } },
  22: { g: { J: 2, V: 1 } },
  23: { j: { J: 2, V: 1 } },
  24: { j: { J: 2, V: 1 } },
  25: { i: { N: 2, V: 1 } },
  26: { j: { J: 2, V: 1 } },
  27: { k: { J: 2, V: 1 } },
  28: { l: { J: 2, V: 1 } },
  29: { m: { J: 2, V: 1 } },
  30: { g: { J: 2, V: 1 } },
  31: { m: { N: 2, V: 1 } },
  32: { m: { J: 2, V: 1 } },
  33: { m: { J: 2, V: 1 } },
  34: { m: { J: 2, V: 1 } },
  35: { m: { J: 2, V: 1 } },
  36: { i: { J: 2, V: 1 } },
  37: { i: { J: 2, V: 1 } },
  38: { i: { J: 2, V: 1 } },
  39: { i: { J: 2, V: 1 } },
  40: { i: { J: 2, V: 1 } },
  41: { i: { N: 2, V: 1 } },
  42: { i: { J: 2, V: 1 } },
  43: { e: { J: 2, V: 1 } },
  44: { f: { J: 2, V: 1 } },
  45: { f: { J: 2, V: 1 } },
  46: { f: { J: 2, V: 1 } },
  47: { e: { J: 2, V: 1 } },
  48: { g: { J: 2, V: 1 } },
  49: { a: { J: 2, V: 1 } },
  50: { a: { J: 2, V: 1 } },
  51: { b: { N: 2, V: 1 }, c: { N: 2, V: 1 }, h: { N: 2, V: 1 } },
  52: { a: { N: 2, V: 1 } },
  53: { a: { J: 2, V: 1 }, c: { J: 2, V: 1 } },
  54: { b: { J: 2, V: 1 } },
  55: { b: { J: 2, V: 1 } },
  56: { b: { J: 2, V: 1 } },
  57: { c: { N: 2, V: 1 } },
  58: { c: { J: 2, V: 1 } },
  59: { h: { J: 2, V: 1 } },
  60: { h: { J: 2, V: 1 } },
  61: { h: { N: 2, V: 1 } },
  62: { k: { J: 2, V: 1 } },
  63: { k: { N: 2, V: 1 } },
  64: { k: { J: 2, V: 1 } },
  65: { k: { J: 2, V: 1 } },
  66: { k: { J: 2, V: 1 } },
  67: { j: { J: 2, V: 1 } },
  68: { l: { J: 2, V: 1 } },
  69: { l: { J: 2, V: 1 } },
  70: { l: { J: 2, V: 1 } },
  71: { l: { J: 2, V: 1 } },
  72: { l: { N: 2, V: 1 } },
  73: { g: { J: 2, V: 1 } },
  74: { a: { J: 2, V: 1 } },
  75: { a: { J: 2, V: 1 } },
  76: { d: { J: 2, V: 1 } },
  77: { d: { J: 2, V: 1 } },
  78: { l: { J: 2, V: 1 } },
  79: { d: { J: 2, V: 1 } },
  80: { d: { J: 2, V: 1 } },
  81: { a: { J: 2, V: 1 } },
  82: { e: { N: 2, V: 1 } },
  83: { f: { J: 2, V: 1 } },
  84: { c: { J: 2, V: 1 } },
  85: { e: { J: 2, V: 1 }, f: { J: 2, V: 1 } },
  86: { h: { N: 2, V: 1 }, i: { N: 2, V: 1 } },
  87: { h: { J: 2, V: 1 } },
  88: { g: { J: 2, V: 1 } },
  89: { j: { J: 2, V: 1 } },
  90: { h: { J: 2, V: 1 } },
  91: { b: { J: 2, V: 1 } },
  92: { b: { J: 2, V: 1 } },
  93: { b: { J: 2, V: 1 } },
  94: { c: { J: 2, V: 1 } },
  95: { c: { J: 2, V: 1 } },
  96: { j: { J: 2, V: 1 } },
  97: { f: { J: 2, V: 1 } },
  98: { e: { J: 2, V: 1 } },
  99: { e: { J: 2, V: 1 } },
  100: { d: { J: 2, V: 1 } },
  101: { d: { J: 2, V: 1 } },
  102: { d: { J: 2, V: 1 } },
  103: { d: { J: 2, V: 1 } },
  104: { d: { J: 2, V: 1 } }
}

export const categoryMapping: CategoryMapping = {
  a: { label: 'Wachsam', max: 14 },
  b: { label: 'Ungesellig', max: 14 },
  c: { label: 'Exzentrisch', max: 18 },
  d: { label: 'Abenteuerlich', max: 22 },
  e: { label: 'Sprunghaft', max: 16 },
  f: { label: 'Dramatisch', max: 16 },
  g: { label: 'Selbstbewusst', max: 18 },
  h: { label: 'Sensibel', max: 14 },
  i: { label: 'Anhänglich', max: 18 },
  j: { label: 'Gewissenhaft', max: 18 },
  k: { label: 'Lässig', max: 18 },
  l: { label: 'Aggressiv', max: 16 },
  m: { label: 'Aufopfernd', max: 16 }
}

export function mapResult(questionNumber: number, value: 'J' | 'V' | 'N') {
  const q = scoreMapping[questionNumber]
  const categoryLetters = Object.keys(q) as CategoryLetter[]
  const res: Partial<Score> = {}
  for (const letter of categoryLetters) {
    const score = q[letter]![value]
    if (score) {
      res[letter] = score
    }
  }
  return res
}
