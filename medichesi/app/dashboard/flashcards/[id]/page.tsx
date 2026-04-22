import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardTopbar } from '@/components/DashboardTopbar'
import { FlashcardRunner } from '@/components/FlashcardRunner'
import { getCategory, CATEGORIES } from '@/lib/content/categories'
import { getUserProgress, getWeakSpots } from '@/lib/progress'

export default async function FlashcardsPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const userName = (user.user_metadata?.name as string) || user.email?.split('@')[0] || 'medic'

  // Special: 'review' shows weak flashcards across all sections
  if (params.id === 'review') {
    const rows = await getUserProgress(user.id)
    const { weakFlashcards } = getWeakSpots(rows)
    const items = weakFlashcards.map(w => ({
      cat: w.cat,
      flashcard: w.cat.flashcards[w.catIndex],
      catIndex: w.catIndex,
    }))
    return (
      <>
        <DashboardTopbar userName={userName} />
        <FlashcardRunner items={items} title="REVIEW" backHref="/dashboard/review" source="review" />
      </>
    )
  }

  const cat = getCategory(params.id)
  if (!cat) notFound()
  const items = cat.flashcards.map((f, i) => ({ cat, flashcard: f, catIndex: i }))

  return (
    <>
      <DashboardTopbar userName={userName} />
      <FlashcardRunner
        items={items}
        title={cat.short.toUpperCase()}
        backHref={`/dashboard/section/${cat.id}`}
        source="category"
      />
    </>
  )
}
