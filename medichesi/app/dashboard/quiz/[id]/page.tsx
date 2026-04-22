import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardTopbar } from '@/components/DashboardTopbar'
import { QuizRunner, type QuizItem } from '@/components/QuizRunner'
import { getCategory, CATEGORIES, getAllScenarios } from '@/lib/content/categories'
import { getUserProgress, getWeakSpots } from '@/lib/progress'
import { shuffle } from '@/lib/utils'

export default async function QuizPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const userName = (user.user_metadata?.name as string) || user.email?.split('@')[0] || 'medic'

  let items: QuizItem[] = []
  let title = ''
  let backHref = '/dashboard'
  let showCategoryTag = false

  if (params.id === 'mixed') {
    const all = getAllScenarios()
    items = shuffle(all).slice(0, 10)
    title = 'MIXED'
    backHref = '/dashboard'
    showCategoryTag = true
  } else if (params.id === 'review') {
    const rows = await getUserProgress(user.id)
    const { weakScenarios } = getWeakSpots(rows)
    items = weakScenarios.map(w => ({
      cat: w.cat,
      scenario: w.cat.scenarios[w.catIndex],
      catIndex: w.catIndex,
    }))
    items = shuffle(items)
    title = 'REVIEW'
    backHref = '/dashboard/review'
    showCategoryTag = true
  } else {
    const cat = getCategory(params.id)
    if (!cat) notFound()
    items = cat.scenarios.map((s, i) => ({ cat, scenario: s, catIndex: i }))
    title = cat.short.toUpperCase()
    backHref = `/dashboard/section/${cat.id}`
  }

  return (
    <>
      <DashboardTopbar userName={userName} />
      <QuizRunner items={items} title={title} backHref={backHref} showCategoryTag={showCategoryTag} />
    </>
  )
}
