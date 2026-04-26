import type { Category, Scenario, Flashcard } from './types'
import { AIRWAY } from './airway'
import { CARDIOLOGY } from './cardiology'
import { TRAUMA } from './trauma'
import { MEDICAL } from './medical'
import { OBPEDS } from './obpeds'

export const CATEGORIES: Category[] = [AIRWAY, CARDIOLOGY, TRAUMA, MEDICAL, OBPEDS]

export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id)
}

export function getAllScenarios(): Scenario[] {
  return CATEGORIES.flatMap((c) => c.scenarios)
}

export function getAllFlashcards(): Flashcard[] {
  return CATEGORIES.flatMap((c) => c.flashcards)
}

export function totalScenarios(): number {
  return CATEGORIES.reduce((sum, c) => sum + c.scenarios.length, 0)
}

export function totalFlashcards(): number {
  return CATEGORIES.reduce((sum, c) => sum + c.flashcards.length, 0)
}

/** Get a random subset of scenarios across all categories. Used for mock exams. */
export function randomScenarios(n: number, seed?: number): Scenario[] {
  const all = getAllScenarios().slice()
  // Simple LCG seed if provided, else Math.random
  let rand = seed !== undefined ? mulberry32(seed) : Math.random
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[all[i], all[j]] = [all[j], all[i]]
  }
  return all.slice(0, n)
}

function mulberry32(a: number) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
