export type Choice = {
  text: string
  /** Why this answer is right OR why it's wrong. Always shown to the user after they answer. */
  exp: string
}

export type Scenario = {
  id: string
  q: string
  /** 4 choices A-D. The `correct` index points to the right one. */
  choices: Choice[]
  correct: number
  /** Top-line takeaway shown above the per-choice breakdown. */
  exp: string
  /** 1-10. Used to filter and to display difficulty. */
  difficulty: number
  /** Optional shorthand for what subject this hits */
  tags?: string[]
}

export type Flashcard = {
  id: string
  front: string
  back: string
  tags?: string[]
}

export type Category = {
  id: string
  name: string
  short: string
  desc: string
  color: string
  icon: 'lung' | 'heart' | 'shield' | 'cross' | 'truck'
  flashcards: Flashcard[]
  scenarios: Scenario[]
}

export type MockExam = {
  id: string
  name: string
  desc: string
  questionCount: number
  timeMinutes: number
}
