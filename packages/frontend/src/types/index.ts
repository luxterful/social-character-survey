export interface ResultEntry {
  categoryName: string
  categoryLetter: CategoryLetter
  percentage: number
}
export type Result = Array<ResultEntry>

export type CategoryLetter =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'

export interface Score {
  a: number
  b: number
  c: number
  d: number
  e: number
  f: number
  g: number
  h: number
  i: number
  j: number
  k: number
  l: number
  m: number
}

export interface Rating {
  J?: 1 | 2
  V: 1 | 2
  N?: 1 | 2
}

export interface ScoreMapping {
  [questionNumber: number]: { [key in keyof Partial<Score>]: Rating }
}

export type CategoryMapping = {
  [key in keyof Score]: {
    label: string
    max: number
  }
}
