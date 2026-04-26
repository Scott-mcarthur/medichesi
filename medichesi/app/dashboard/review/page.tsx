import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardTopbar } from '@/components/DashboardTopbar'
import { BackButton } from '@/components/BackButton'
import { AlertIcon, CardsIcon, TargetIcon } from '@/components/Icons'
import { getUserProgress, getWeakSpots } from '@/lib/progress'

export default async function ReviewPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const userName = (user.user_metadata?.name as string) || user.email?.split('@')[0] || 'medic'
  const rows = await getUserProgress(user.id)
  const { weakScenarios, weakFlashcards } = getWeakSpots(rows)

  const scenariosByCategory = weakScenarios.reduce<Record<string, typeof weakScenarios>>((acc, w) => {
    if (!acc[w.cat.id]) acc[w.cat.id] = []
    acc[w.cat.id].push(w)
    return acc
  }, {})

  const flashcardsByCategory = weakFlashcards.reduce<Record<string, typeof weakFlashcards>>((acc, w) => {
    if (!acc[w.cat.id]) acc[w.cat.id] = []
    acc[w.cat.id].push(w)
    return acc
  }, {})

  const totalWeak = weakScenarios.length + weakFlashcards.length

  return (
    <>
      <DashboardTopbar userName={userName} />
      <BackButton href="/dashboard" label="Back to dashboard" />

      <div className="mb-7 pb-6 border-b border-[var(--border)]">
        <div className="flex items-center gap-3 mb-4">
          <span className="label-mono !text-[var(--sec-weak)]">WEAK SPOTS // TARGETS</span>
          <span className="flex-1 h-px bg-[var(--border)]" />
        </div>
        <h1 className="fraunces-display text-[30px] md:text-[38px] font-medium tracking-[-0.02em] leading-[1.05] mb-3">
          {totalWeak > 0 ? (
            <>Fix the gaps, <span className="italic text-[var(--sec-weak)]">one by one.</span></>
          ) : (
            <>Nothing to review <span className="italic text-success">yet.</span></>
          )}
        </h1>
        <p className="text-fg-2 text-[15px] leading-relaxed">
          {totalWeak > 0
            ? `${weakScenarios.length} scenario${weakScenarios.length !== 1 ? 's' : ''} and ${weakFlashcards.length} flashcard${weakFlashcards.length !== 1 ? 's' : ''} to drill. Knocking these out is the highest-leverage study you can do.`
            : 'Weak spots are the scenarios you got wrong and the flashcards you marked to review. Come back after some practice.'}
        </p>
      </div>

      {totalWeak === 0 ? (
        <div className="bg-bg-1 border border-[var(--border)] rounded-2xl p-10 text-center">
          <div className="w-14 h-14 rounded-full bg-success/15 text-success flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="fraunces-small text-xl font-medium mb-2">All clear for now</h3>
          <p className="text-fg-2 text-sm mb-6">Start a section or run a mixed practice to generate weak spots.</p>
          <Link href="/dashboard" className="inline-block px-5 py-3 bg-bg-2 border border-[var(--border)] rounded-lg text-sm hover:border-[var(--border-3)]">
            Back to dashboard
          </Link>
        </div>
      ) : (
        <>
          {/* Drill actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {weakScenarios.length > 0 && (
              <Link
                href="/dashboard/quiz/review"
                className="relative block p-5 bg-bg-1 border border-[var(--border)] rounded-xl overflow-hidden hover:-translate-y-0.5 hover:border-[var(--border-3)] transition-all group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--sec-weak)]" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity"
                  style={{ background: 'radial-gradient(circle at top right, var(--sec-weak) 0%, transparent 60%)' }}
                />
                <div className="relative">
                  <div className="mb-3 text-[var(--sec-weak)]">
                    <TargetIcon className="w-6 h-6" />
                  </div>
                  <div className="fraunces-small text-lg font-medium mb-1">Drill Scenarios</div>
                  <div className="text-xs text-fg-3 mb-3 leading-relaxed">Retake the ones you missed. Shuffled.</div>
                  <div className="font-mono text-[11px] text-fg pt-3 border-t border-[var(--border)] tracking-wider">
                    {weakScenarios.length} SCENARIO{weakScenarios.length !== 1 ? 'S' : ''}
                  </div>
                </div>
              </Link>
            )}
            {weakFlashcards.length > 0 && (
              <Link
                href="/dashboard/flashcards/review"
                className="relative block p-5 bg-bg-1 border border-[var(--border)] rounded-xl overflow-hidden hover:-translate-y-0.5 hover:border-[var(--border-3)] transition-all group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--sec-weak)]" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity"
                  style={{ background: 'radial-gradient(circle at top right, var(--sec-weak) 0%, transparent 60%)' }}
                />
                <div className="relative">
                  <div className="mb-3 text-[var(--sec-weak)]">
                    <CardsIcon className="w-6 h-6" />
                  </div>
                  <div className="fraunces-small text-lg font-medium mb-1">Drill Cards</div>
                  <div className="text-xs text-fg-3 mb-3 leading-relaxed">Retake the flashcards you flagged for review.</div>
                  <div className="font-mono text-[11px] text-fg pt-3 border-t border-[var(--border)] tracking-wider">
                    {weakFlashcards.length} CARD{weakFlashcards.length !== 1 ? 'S' : ''}
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* List view by category */}
          {weakScenarios.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[var(--border)]">
                <AlertIcon className="w-4 h-4 text-[var(--sec-weak)]" />
                <h3 className="fraunces-small text-lg font-medium">Scenarios to retry</h3>
                <span className="ml-auto label-mono">{weakScenarios.length}</span>
              </div>
              <div className="flex flex-col gap-2">
                {Object.entries(scenariosByCategory).map(([catId, list]) => {
                  const cat = list[0].cat
                  return (
                    <div key={catId}>
                      {list.map(item => (
                        <div
                          key={`${catId}-${item.catIndex}`}
                          className="flex gap-3 p-4 bg-bg-1 border border-[var(--border)] rounded-lg mb-2 items-start"
                        >
                          <span
                            className="font-mono text-[9px] px-2 py-[3px] rounded border tracking-widest flex-shrink-0 mt-[2px]"
                            style={{ color: cat.color, borderColor: cat.color }}
                          >
                            {cat.short.toUpperCase()}
                          </span>
                          <p className="text-sm text-fg leading-relaxed flex-1">
                            {cat.scenarios[item.catIndex].q}
                          </p>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {weakFlashcards.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[var(--border)]">
                <AlertIcon className="w-4 h-4 text-[var(--sec-weak)]" />
                <h3 className="fraunces-small text-lg font-medium">Cards to review</h3>
                <span className="ml-auto label-mono">{weakFlashcards.length}</span>
              </div>
              <div className="flex flex-col gap-2">
                {Object.entries(flashcardsByCategory).map(([catId, list]) => {
                  const cat = list[0].cat
                  return (
                    <div key={catId}>
                      {list.map(item => (
                        <div
                          key={`${catId}-${item.catIndex}`}
                          className="flex gap-3 p-4 bg-bg-1 border border-[var(--border)] rounded-lg mb-2 items-start"
                        >
                          <span
                            className="font-mono text-[9px] px-2 py-[3px] rounded border tracking-widest flex-shrink-0 mt-[2px]"
                            style={{ color: cat.color, borderColor: cat.color }}
                          >
                            {cat.short.toUpperCase()}
                          </span>
                          <p className="text-sm text-fg leading-relaxed flex-1">
                            {cat.flashcards[item.catIndex].front}
                          </p>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
