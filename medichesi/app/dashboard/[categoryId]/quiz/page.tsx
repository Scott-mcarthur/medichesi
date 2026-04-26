import { notFound } from 'next/navigation'
import { getCategory, CATEGORIES } from '@/lib/content/categories'
import QuizRunner from '@/components/QuizRunner'

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoryId: c.id }))
}

export default function QuizPage({ params }: { params: { categoryId: string } }) {
  const cat = getCategory(params.categoryId)
  if (!cat) notFound()

  return (
    <QuizRunner
      scenarios={cat.scenarios}
      title={`${cat.short} · Scenarios`}
      backHref={`/dashboard/${cat.id}`}
    />
  )
}
