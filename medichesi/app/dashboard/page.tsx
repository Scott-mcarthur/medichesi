import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardTopbar } from '@/components/DashboardTopbar'
import { EcgLine } from '@/components/EcgLine'
import { AlertIcon, ShuffleIcon, SECTION_ICONS, TrophyIcon } from '@/components/Icons'
import { CATEGORIES } from '@/lib/content/categories'
import {
  getUserProgress,
  getUserMockExams,
  getOverallProgress,
  getCategoryProgress,
  getWeakSpots,
} from '@/lib/progress'
import { pad2 } from '@/lib/utils'

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const userName = (user.user_metadata?.name as string) || user.email?.split('@')[0] || 'medic'
  const rows = await getUserProgress(user.id)
  const mocks = await getUserMockExams(user.id)

  const overall = getOverallProgress(rows)
  const totalAll = overall.cardsTotal + overall.quizTotal
  const doneAll = overall.cards + overall.quiz
  const overallPct = totalAll ? Math.round((doneAll / totalAll) * 100) : 0

  const { weakScenarios, weakFlashcards } = getWeakSpots(rows)
  const totalWeak = weakScenarios.length + weakFlashcards.length

  const lastMock = mocks.find(m => m.completed_at)

  return (
    <>
      <DashboardTopbar userName={userName} />

      {/* Hero */}
      <div className="relative p-7 md:p-9 mb-6 bg-gradient-to-b from-[#0c0c0c] to-[#070707] border border-[var(--border)] rounded-2xl overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-danger" />
            <span className="label-mono !text-danger">HESI Capstone // Session</span>
          </div>
          <h1 className="fraunces-display font-medium text-[34px] md:text-[48px] leading-[0.98] tracking-[-0.03em] mb-2">
            Welcome back, <span className="italic text-danger">{userName}.</span>
          </h1>
          <p className="text-fg-2 text-sm md:text-base max-w-md mt-3">
            <span className="text-fg font-medium">Minimum passing: 650.</span>{' '}
            {totalWeak > 0
              ? `You have ${totalWeak} weak target${totalWeak > 1 ? 's' : ''} to drill. Fix the gaps.`
              : overall.quiz === 0
              ? 'Start with a section or run a mock exam to baseline where you are.'
              : 'Keep going. You are building real retention.'}
          </p>

          <EcgLine />

          <div className="grid grid-cols-3 gap-2 md:gap-3">
            <div className="p-3 md:p-4 bg-white/[0.02] border border-[var(--border)] rounded-xl">
              <div className="font-mono text-2xl md:text-[28px] font-medium tracking-[-0.02em] leading-none">
                {overallPct}<span className="text-base text-fg-3">%</span>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-fg-3 mt-2">Mastery</div>
            </div>
            <div className="p-3 md:p-4 bg-white/[0.02] border border-[var(--border)] rounded-xl">
              <div className="font-mono text-2xl md:text-[28px] font-medium tracking-[-0.02em] leading-none">
                {overall.cards}<span className="text-sm text-fg-3">/{overall.cardsTotal}</span>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-fg-3 mt-2">Cards</div>
            </div>
            <div className="p-3 md:p-4 bg-white/[0.02] border border-[var(--border)] rounded-xl">
              <div className="font-mono text-2xl md:text-[28px] font-medium tracking-[-0.02em] leading-none">
                {overall.quiz}<span className="text-sm text-fg-3">/{overall.quizTotal}</span>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-fg-3 mt-2">Scenarios</div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice modes */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Link
          href={totalWeak > 0 ? '/dashboard/review' : '#'}
          className={`relative block p-5 bg-bg-1 border border-[var(--border)] rounded-xl overflow-hidden transition-all ${totalWeak === 0 ? 'opacity-50 pointer-events-none' : 'hover:-translate-y-0.5 hover:border-[var(--border-3)]'}`}
          style={{ ['--pc' as string]: 'var(--sec-weak)' }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px] opacity-80" style={{ background: 'var(--sec-weak)' }} />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{ background: 'radial-gradient(circle at top right, var(--sec-weak) 0%, transparent 55%)' }}
          />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-[var(--border)] flex items-center justify-center" style={{ color: 'var(--sec-weak)' }}>
                <AlertIcon className="w-4 h-4" />
              </div>
              <span
                className={`ml-auto font-mono text-[9px] px-2 py-1 rounded border tracking-widest bg-black/30 ${totalWeak > 0 ? 'animate-weakpulse' : ''}`}
                style={{ color: 'var(--sec-weak)', borderColor: 'var(--sec-weak)' }}
              >
                {totalWeak > 0 ? `${totalWeak} TARGETS` : 'CLEAR'}
              </span>
            </div>
            <div className="fraunces-small text-[17px] font-medium tracking-[-0.01em] mb-1">Weak Spots</div>
            <div className="text-xs text-fg-3 leading-relaxed min-h-[32px]">
              {totalWeak > 0 ? 'Drill only what you have missed. Fix the gaps.' : 'Nothing to review yet. Keep practicing.'}
            </div>
          </div>
        </Link>

        <Link
          href="/dashboard/quiz/mixed"
          className="relative block p-5 bg-bg-1 border border-[var(--border)] rounded-xl overflow-hidden hover:-translate-y-0.5 hover:border-[var(--border-3)] transition-all"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px] opacity-80" style={{ background: 'var(--sec-mixed)' }} />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{ background: 'radial-gradient(circle at top right, var(--sec-mixed) 0%, transparent 55%)' }}
          />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-[var(--border)] flex items-center justify-center" style={{ color: 'var(--sec-mixed)' }}>
                <ShuffleIcon className="w-4 h-4" />
              </div>
              <span className="ml-auto font-mono text-[9px] px-2 py-1 rounded border tracking-widest bg-black/30"
                style={{ color: 'var(--sec-mixed)', borderColor: 'var(--sec-mixed)' }}>
                10 Qs
              </span>
            </div>
            <div className="fraunces-small text-[17px] font-medium tracking-[-0.01em] mb-1">Mixed Practice</div>
            <div className="text-xs text-fg-3 leading-relaxed min-h-[32px]">
              Random scenarios from every section. HESI-style flow.
            </div>
          </div>
        </Link>
      </div>

      {/* Mock exam card */}
      <Link
        href="/dashboard/mock"
        className="relative block p-6 mb-8 bg-bg-1 border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--border-3)] transition-all group"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[2px] opacity-80" style={{ background: 'var(--sec-mock)' }} />
        <div
          className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.12] transition-opacity"
          style={{ background: 'radial-gradient(circle at top right, var(--sec-mock) 0%, transparent 60%)' }}
        />
        <div className="relative flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-[var(--border)] flex items-center justify-center flex-shrink-0" style={{ color: 'var(--sec-mock)' }}>
            <TrophyIcon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="label-mono" style={{ color: 'var(--sec-mock)' }}>Mock Exam</span>
              {lastMock && lastMock.score != null && (
                <span className="label-mono !text-fg-2">
                  · LAST: {Math.round(lastMock.score)}%
                </span>
              )}
            </div>
            <div className="fraunces-small text-xl font-medium tracking-[-0.01em] mb-1">
              Run a Full or Quick Mock
            </div>
            <div className="text-sm text-fg-2 leading-relaxed">
              Simulate the test. Get a per-section score. See exactly where you stand.
            </div>
          </div>
        </div>
      </Link>

      {/* Content Areas */}
      <div className="flex items-center gap-3 mb-4">
        <span className="label-mono">Content Areas</span>
        <span className="flex-1 h-px bg-[var(--border)]" />
        <span className="label-mono">{CATEGORIES.length} Sections</span>
      </div>
      <div className="flex flex-col gap-[10px] stagger">
        {CATEGORIES.map((cat, idx) => {
          const p = getCategoryProgress(cat, rows)
          const fcPct = p.flashcardsTotal ? (p.flashcardsKnown / p.flashcardsTotal) * 100 : 0
          const qPct = p.quizTotal ? (p.quizCorrect / p.quizTotal) * 100 : 0
          const Icon = SECTION_ICONS[cat.icon]
          return (
            <Link
              key={cat.id}
              href={`/dashboard/section/${cat.id}`}
              className="relative block p-5 bg-bg-1 border border-[var(--border)] rounded-xl overflow-hidden transition-all hover:translate-x-0.5 hover:bg-bg-2 hover:border-[var(--border-3)]"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] opacity-60 transition-all"
                style={{ background: cat.color }}
              />
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.02] border border-[var(--border)] flex items-center justify-center flex-shrink-0" style={{ color: cat.color }}>
                  {Icon && <Icon className="w-5 h-5" />}
                </div>
                <div className="min-w-0">
                  <div className="label-mono mb-1">SEC // {pad2(idx + 1)}</div>
                  <div className="fraunces-small text-[19px] font-medium tracking-[-0.01em] leading-tight">{cat.name}</div>
                </div>
              </div>
              <div className="text-[13px] text-fg-2 leading-relaxed mb-3 pr-4">{cat.desc}</div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-1 font-mono text-[10px] tracking-wider uppercase">
                    <span className="text-fg-3">Cards</span>
                    <span>{p.flashcardsKnown}/{p.flashcardsTotal}</span>
                  </div>
                  <div className="h-[3px] bg-bg-3 rounded overflow-hidden">
                    <div
                      className={`h-full transition-all ${fcPct === 100 ? 'shadow-[0_0_8px_rgba(16,185,129,0.5)]' : ''}`}
                      style={{ width: `${fcPct}%`, background: fcPct === 100 ? 'var(--success)' : cat.color }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1 font-mono text-[10px] tracking-wider uppercase">
                    <span className="text-fg-3">Quiz</span>
                    <span>{p.quizCorrect}/{p.quizTotal}</span>
                  </div>
                  <div className="h-[3px] bg-bg-3 rounded overflow-hidden">
                    <div
                      className={`h-full transition-all ${qPct === 100 ? 'shadow-[0_0_8px_rgba(16,185,129,0.5)]' : ''}`}
                      style={{ width: `${qPct}%`, background: qPct === 100 ? 'var(--success)' : cat.color }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <footer className="mt-12 pt-5 border-t border-[var(--border)] label-mono text-center leading-loose">
        Study aid only. Follow your local protocols and official curriculum.<br />
        Built to pass the HESI. Keep working.
      </footer>
    </>
  )
}
