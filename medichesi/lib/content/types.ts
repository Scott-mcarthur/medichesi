export type Flashcard = {
  front: string
  back: string
}

export type ScenarioExplanation = {
  correct: string
  wrong: Record<number, string>
  pearl: string
}

export type Scenario = {
  q: string
  opts: string[]
  ans: number
  exp: ScenarioExplanation
}

export type Category = {
  id: string
  name: string
  short: string
  desc: string
  color: string // hex
  colorVar: string // css var name
  icon: string // svg key
  flashcards: Flashcard[]
  scenarios: Scenario[]
}
