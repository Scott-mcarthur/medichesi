import type { MockExam } from './types'

export const MOCK_EXAMS: MockExam[] = [
  { id: 'mock-25', name: 'Quick Drill (25)', desc: '25 random scenarios, 30 min. Spot-check across all topics.', questionCount: 25, timeMinutes: 30 },
  { id: 'mock-50', name: 'Half Mock (50)', desc: '50 random scenarios, 60 min. Mid-prep gut check.', questionCount: 50, timeMinutes: 60 },
  { id: 'mock-100', name: 'Full Mock (100)', desc: '100 random scenarios, 120 min. Test-day rehearsal.', questionCount: 100, timeMinutes: 120 },
]

export function getMock(id: string): MockExam | undefined {
  return MOCK_EXAMS.find((m) => m.id === id)
}
