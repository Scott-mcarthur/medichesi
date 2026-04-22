import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { DashboardTopbar } from '@/components/DashboardTopbar'
import { BackButton } from '@/components/BackButton'
import { CardsIcon, TargetIcon } from '@/components/Icons'
import { getCategory, CATEGORIES } from '@/lib/content/categories'
import { getUserProgress, getCategoryProgress } from '@/lib/progress'
import { pad2 } from '@/lib/utils'

export default async function SectionPage({ params }: { params: { id: string } }) {
  const cat = getCategory(params.id)
  if (!cat) notFound()

  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const userName = (user.user_metadata?.name as string) || user.email?.split('@')[0] || 'medic'
  const rows = await getUserProgress(user.id)
  const p = getCategoryProgress(cat, rows)
  const idx = CATEGORIES.findIndex(c => c.id === cat.id)

  return (
    <>
      <DashboardTopbar userName={userName} />
      <BackButton href="/dashboard" label="Back to sections" />

      <div className="mb-7 pb-6 border-b border-[var(--border)]" style={{ ['--sc' as string]: cat.color }}>
        <div className="flex items-center gap-3 mb-4">
          <span className="label-mono" style={{ color: cat.color }}>
            SEC // {pad2(idx + 1)} // {cat.short.toUpperCase()}
          </span>
          <span className="flex-1 h-px bg-[var(--border)]" />
        </div>
        <h1 className="fraunces-display text-[30px] md:text-[38px] font-medium tracking-[-0.02em] leading-[1.05] mb-3">
          {cat.name}
        </h1>
        <p className="text-fg-2 text-[15px] leading-relaxed">{cat.desc}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-7">
        <Link
          href={`/dashboard/flashcards/${cat.id}`}
          className="relative block p-5 bg-bg-1 border border-[var(--border)] rounded-xl overflow-hidden hover:-translate-y-0.5 hover:border-[var(--border-3)] transition-all group"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity"
            style={{ background: `radial-gradient(circle at top right, ${cat.color} 0%, transparent 60%)` }}
          />
          <div className="relative">
            <div className="mb-3" style={{ color: cat.color }}>
              <CardsIcon className="w-[22px] h-[22px] opacity-90" />
            </div>
            <div className="fraunces-small text-lg font-medium tracking-[-0.01em] mb-1">Flashcards</div>
            <div className="text-xs text-fg-3 mb-3 leading-relaxed">Facts, dosing, signs, formulas. Tap to flip, mark known.</div>
            <div className="font-mono text-[11px] text-fg pt-3 border-t border-[var(--border)] tracking-wider">
              {p.flashcardsKnown} / {p.flashcardsTotal} KNOWN
            </div>
          </div>
        </Link>

        <Link
          href={`/dashboard/quiz/${cat.id}`}
          className="relative block p-5 bg-bg-1 border border-[var(--border)] rounded-xl overflow-hidden hover:-translate-y-0.5 hover:border-[var(--border-3)] transition-all group"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity"
            style={{ background: `radial-gradient(circle at top right, ${cat.color} 0%, transparent 60%)` }}
          />
          <div className="relative">
            <div className="mb-3" style={{ color: cat.color }}>
              <TargetIcon className="w-[22px] h-[22px] opacity-90" />
            </div>
            <div className="fraunces-small text-lg font-medium tracking-[-0.01em] mb-1">Scenarios</div>
            <div className="text-xs text-fg-3 mb-3 leading-relaxed">Clinical decisions. What comes first, what causes harm if delayed.</div>
            <div className="font-mono text-[11px] text-fg pt-3 border-t border-[var(--border)] tracking-wider">
              {p.quizCorrect} / {p.quizTotal} CORRECT
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-bg-1 border border-[var(--border)] rounded-xl p-6">
        <div className="label-mono mb-3" style={{ color: cat.color }}>Study Strategy</div>
        <p className="font-display italic text-base leading-relaxed text-fg">
          For every scenario ask: <span className="not-italic font-semibold" style={{ color: cat.color }}>what is the most immediate life threat?</span> Then,{' '}
          <span className="not-italic font-semibold" style={{ color: cat.color }}>what action comes first?</span> And finally,{' '}
          <span className="not-italic font-semibold" style={{ color: cat.color }}>what would cause harm if delayed?</span> Do not just memorize. Know the why.
        </p>
      </div>
    </>
  )
}
