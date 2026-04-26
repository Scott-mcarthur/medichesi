import { notFound } from 'next/navigation'
import { getMock, MOCK_EXAMS } from '@/lib/content/mocks'
import { getAllScenarios, CATEGORIES } from '@/lib/content/categories'
import MockRunner from '@/components/MockRunner'

export function generateStaticParams() {
  return MOCK_EXAMS.map((m) => ({ id: m.id }))
}

function buildCategoryLookup() {
  const map: Record<string, string> = {}
  for (const c of CATEGORIES) {
    for (const s of c.scenarios) {
      map[s.id] = c.short
    }
  }
  return map
}

export default function MockPage({ params }: { params: { id: string } }) {
  const mock = getMock(params.id)
  if (!mock) notFound()

  const pool = getAllScenarios()
  const lookup = buildCategoryLookup()

  return (
    <MockRunner
      scenarioPool={pool}
      questionCount={mock.questionCount}
      title={mock.name}
      backHref="/dashboard"
      timeMinutes={mock.timeMinutes}
      categoryMap={lookup}
    />
  )
}
