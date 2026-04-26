import { notFound } from 'next/navigation'
import { getCategory, CATEGORIES } from '@/lib/content/categories'
import FlashcardRunner from '@/components/FlashcardRunner'

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoryId: c.id }))
}

export default function FlashcardsPage({ params }: { params: { categoryId: string } }) {
  const cat = getCategory(params.categoryId)
  if (!cat) notFound()

  return (
    <FlashcardRunner
      flashcards={cat.flashcards}
      title={`${cat.short} · Flashcards`}
      backHref={`/dashboard/${cat.id}`}
      accentColor={cat.color}
    />
  )
}
