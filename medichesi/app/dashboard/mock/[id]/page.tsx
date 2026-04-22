import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardTopbar } from '@/components/DashboardTopbar'
import { MockRunner } from '@/components/MockRunner'
import { getAllScenarios } from '@/lib/content/categories'
import { shuffle } from '@/lib/utils'

export default async function MockRunPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  if (params.id !== 'full' && params.id !== 'quick') notFound()

  const userName = (user.user_metadata?.name as string) || user.email?.split('@')[0] || 'medic'
  const all = getAllScenarios()
  const items = params.id === 'full' ? shuffle(all) : shuffle(all).slice(0, 15)

  return (
    <>
      <DashboardTopbar userName={userName} />
      <MockRunner items={items} examType={params.id} />
    </>
  )
}
