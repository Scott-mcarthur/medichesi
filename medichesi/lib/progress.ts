import type { Category } from './content/types'
import { CATEGORIES } from './content/categories'
import { createClient } from './supabase/server'

export type ProgressRow = {
  id: string
  user_id: string
  item_type: 'flashcard' | 'scenario'
  category_id: string
  item_index: number
  status: string | null
  attempts: number
  last_correct: boolean | null
  ever_correct: boolean
  updated_at: string
}

export type MockExamRow = {
  id: string
  user_id: string
  exam_type: 'full' | 'quick'
  questions: Array<{ cat: string; idx: number }>
  answers: Array<{ selected: number; correct: boolean }> | null
  score: number | null
  section_scores: Record<string, { correct: number; total: number }> | null
  started_at: string
  completed_at: string | null
}

export async function getUserProgress(userId: string) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', userId)

  if (error) {
    console.error('Error fetching progress:', error)
    return []
  }
  return (data ?? []) as ProgressRow[]
}

export async function getUserMockExams(userId: string) {
  const supabase = createClient()
  const { data } = await supabase
    .from('mock_exams')
    .select('*')
    .eq('user_id', userId)
    .order('started_at', { ascending: false })
    .limit(20)
  return (data ?? []) as MockExamRow[]
}

export function buildProgressMap(rows: ProgressRow[]) {
  const map: Record<string, ProgressRow> = {}
  rows.forEach(r => {
    const key = `${r.item_type}_${r.category_id}_${r.item_index}`
    map[key] = r
  })
  return map
}

export function getCategoryProgress(cat: Category, rows: ProgressRow[]) {
  const catRows = rows.filter(r => r.category_id === cat.id)
  const flashcardsKnown = catRows.filter(
    r => r.item_type === 'flashcard' && r.status === 'known'
  ).length
  const quizCorrect = catRows.filter(
    r => r.item_type === 'scenario' && r.last_correct === true
  ).length
  return {
    flashcardsKnown,
    flashcardsTotal: cat.flashcards.length,
    quizCorrect,
    quizTotal: cat.scenarios.length,
  }
}

export function getOverallProgress(rows: ProgressRow[]) {
  let cards = 0, cardsTotal = 0, quiz = 0, quizTotal = 0
  CATEGORIES.forEach(cat => {
    const p = getCategoryProgress(cat, rows)
    cards += p.flashcardsKnown
    cardsTotal += p.flashcardsTotal
    quiz += p.quizCorrect
    quizTotal += p.quizTotal
  })
  return { cards, cardsTotal, quiz, quizTotal }
}

export function getWeakSpots(rows: ProgressRow[]) {
  const weakScenarios: Array<{ cat: Category; catIndex: number }> = []
  const weakFlashcards: Array<{ cat: Category; catIndex: number }> = []

  CATEGORIES.forEach(cat => {
    cat.scenarios.forEach((_s, i) => {
      const row = rows.find(
        r => r.item_type === 'scenario' && r.category_id === cat.id && r.item_index === i
      )
      if (row && row.attempts > 0 && !row.last_correct) {
        weakScenarios.push({ cat, catIndex: i })
      }
    })
    cat.flashcards.forEach((_f, i) => {
      const row = rows.find(
        r => r.item_type === 'flashcard' && r.category_id === cat.id && r.item_index === i
      )
      if (row && row.status === 'review') {
        weakFlashcards.push({ cat, catIndex: i })
      }
    })
  })

  return { weakScenarios, weakFlashcards }
}
