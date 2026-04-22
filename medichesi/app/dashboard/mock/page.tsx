import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardTopbar } from '@/components/DashboardTopbar'
import { BackButton } from '@/components/BackButton'
import { TrophyIcon } from '@/components/Icons'
import { getUserMockExams } from '@/lib/progress'
import { CATEGORIES } from '@/lib/content/categories'
import { getAllScenarios } from '@/lib/content/categories'

export default async function MockSelectPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const userName = (user.user_metadata?.name as string) || user.email?.split('@')[0] || 'medic'
  const mocks = await getUserMockExams(user.id)
  const completed = mocks.filter(m => m.completed_at)
  const totalScenarios = getAllScenarios().length

  return (
    <>
      <DashboardTopbar userName={userName} />
      <BackButton href="/dashboard" label="Back to dashboard" />

      <div className="mb-7 pb-6 border-b border-[var(--border)]">
        <div className="flex items-center gap-3 mb-4">
          <span className="label-mono" style={{ color: 'var(--sec-mock)' }}>MOCK EXAMS</span>
          <span className="flex-1 h-px bg-[var(--border)]" />
        </div>
        <h1 className="fraunces-display text-[30px] md:text-[38px] font-medium tracking-[-0.02em] leading-[1.05] mb-3">
          Simulate the <span className="italic" style={{ color: 'var(--sec-mock)' }}>real thing.</span>
        </h1>
        <p className="text-fg-2 text-[15px] leading-relaxed">
          Each mock draws scenarios randomly from every section. You get a per-section breakdown so you know exactly where you are soft. Pass threshold is {'>'} 75% accuracy, which roughly maps to the 650 HESI cutoff.
        </p>
      </div>

      {/* Start buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <Link
          href="/dashboard/mock/full"
          className="relative block p-6 bg-bg-1 border border-[var(--border)] rounded-xl overflow-hidden hover:-translate-y-0.5 hover:border-[var(--border-3)] transition-all group"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: 'var(--sec-mock)' }} />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity"
            style={{ background: 'radial-gradient(circle at top right, var(--sec-mock) 0%, transparent 60%)' }}
          />
          <div className="relative">
            <div className="mb-3" style={{ color: 'var(--sec-mock)' }}>
              <TrophyIcon className="w-7 h-7" />
            </div>
            <div className="fraunces-small text-xl font-medium mb-1">Full Mock</div>
            <div className="text-sm text-fg-3 mb-4 leading-relaxed">
              All {totalScenarios} scenarios across every section, shuffled. Best baseline before test day.
            </div>
            <div className="font-mono text-[11px] text-fg pt-3 border-t border-[var(--border)] tracking-wider">
              {totalScenarios} QUESTIONS · ALL SECTIONS
            </div>
          </div>
        </Link>

        <Link
          href="/dashboard/mock/quick"
          className="relative block p-6 bg-bg-1 border border-[var(--border)] rounded-xl overflow-hidden hover:-translate-y-0.5 hover:border-[var(--border-3)] transition-all group"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: 'var(--sec-mock)' }} />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity"
            style={{ background: 'radial-gradient(circle at top right, var(--sec-mock) 0%, transparent 60%)' }}
          />
          <div className="relative">
            <div className="mb-3" style={{ color: 'var(--sec-mock)' }}>
              <TrophyIcon className="w-7 h-7" />
            </div>
            <div className="fraunces-small text-xl font-medium mb-1">Quick Mock</div>
            <div className="text-sm text-fg-3 mb-4 leading-relaxed">
              15 random scenarios. Quick gut-check in 10-15 minutes.
            </div>
            <div className="font-mono text-[11px] text-fg pt-3 border-t border-[var(--border)] tracking-wider">
              15 QUESTIONS · MIXED
            </div>
          </div>
        </Link>
      </div>

      {/* Past attempts */}
      {completed.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[var(--border)]">
            <h3 className="fraunces-small text-lg font-medium">Past attempts</h3>
            <span className="ml-auto label-mono">{completed.length}</span>
          </div>
          <div className="flex flex-col gap-2">
            {completed.slice(0, 10).map(m => {
              const date = new Date(m.completed_at!)
              const pct = m.score != null ? Math.round(m.score) : 0
              const passed = pct >= 75
              return (
                <div
                  key={m.id}
                  className="flex justify-between items-center p-4 bg-bg-1 border border-[var(--border)] rounded-lg"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="label-mono">
                        {m.exam_type === 'full' ? 'FULL MOCK' : 'QUICK MOCK'}
                      </span>
                      <span className="label-mono">·</span>
                      <span className="label-mono">
                        {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <div className="text-sm text-fg-2">
                      {m.questions.length} questions
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="font-mono text-2xl font-medium tracking-tight"
                      style={{ color: passed ? 'var(--success)' : 'var(--warning)' }}
                    >
                      {pct}%
                    </div>
                    <div className={`font-mono text-[10px] tracking-widest ${passed ? 'text-success' : 'text-warning'}`}>
                      {passed ? 'PASS' : 'BELOW'}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
