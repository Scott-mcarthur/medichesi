'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Category, Scenario } from '@/lib/content/types'
import { createClient } from '@/lib/supabase/client'
import { BackButton } from '@/components/BackButton'
import { TrophyIcon } from '@/components/Icons'
import { CATEGORIES } from '@/lib/content/categories'
import { pad2, hesiScoreEstimate } from '@/lib/utils'

type MockItem = { cat: Category; scenario: Scenario; catIndex: number }
type Answer = { selected: number; correct: boolean }

const LETTERS = ['A', 'B', 'C', 'D']

export function MockRunner({
  items,
  examType,
}: {
  items: MockItem[]
  examType: 'full' | 'quick'
}) {
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<(Answer | null)[]>(() => items.map(() => null))
  const [saved, setSaved] = useState(false)

  async function pickOption(optIdx: number) {
    if (answers[idx]) return
    const current = items[idx]
    const isCorrect = optIdx === current.scenario.ans
    const newAnswers = [...answers]
    newAnswers[idx] = { selected: optIdx, correct: isCorrect }
    setAnswers(newAnswers)

    // Also update individual progress row
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const { data: existing } = await supabase
        .from('progress')
        .select('attempts, ever_correct')
        .eq('user_id', user.id)
        .eq('item_type', 'scenario')
        .eq('category_id', current.cat.id)
        .eq('item_index', current.catIndex)
        .maybeSingle()

      const prevAttempts = existing?.attempts ?? 0
      const everCorrect = (existing?.ever_correct ?? false) || isCorrect

      await supabase.from('progress').upsert(
        {
          user_id: user.id,
          item_type: 'scenario',
          category_id: current.cat.id,
          item_index: current.catIndex,
          status: isCorrect ? 'correct' : 'review',
          attempts: prevAttempts + 1,
          last_correct: isCorrect,
          ever_correct: everCorrect,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,item_type,category_id,item_index' }
      )
    }
  }

  // Save mock result when complete
  async function saveMockResult() {
    if (saved) return
    setSaved(true)
    const correct = answers.filter(a => a?.correct).length
    const pct = Math.round((correct / items.length) * 100)
    const sectionScores: Record<string, { correct: number; total: number }> = {}
    CATEGORIES.forEach(c => {
      sectionScores[c.id] = { correct: 0, total: 0 }
    })
    items.forEach((item, i) => {
      sectionScores[item.cat.id].total += 1
      if (answers[i]?.correct) sectionScores[item.cat.id].correct += 1
    })

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('mock_exams').insert({
        user_id: user.id,
        exam_type: examType,
        questions: items.map(i => ({ cat: i.cat.id, idx: i.catIndex })),
        answers: answers.map(a => a ?? { selected: -1, correct: false }),
        score: pct,
        section_scores: sectionScores,
        completed_at: new Date().toISOString(),
      })
    }
  }

  // Completion screen
  if (idx >= items.length) {
    if (!saved) saveMockResult()
    const correct = answers.filter(a => a?.correct).length
    const pct = Math.round((correct / items.length) * 100)
    const passed = pct >= 75
    const hesiEst = hesiScoreEstimate(pct)

    // Calculate per-section scores
    const sectionBreakdown = CATEGORIES.map(cat => {
      const catItems = items.map((it, i) => ({ it, i })).filter(x => x.it.cat.id === cat.id)
      const catCorrect = catItems.filter(x => answers[x.i]?.correct).length
      return {
        cat,
        correct: catCorrect,
        total: catItems.length,
        pct: catItems.length > 0 ? Math.round((catCorrect / catItems.length) * 100) : null,
      }
    })

    const incorrectItems = items
      .map((item, i) => ({ item, i, ans: answers[i] }))
      .filter(x => x.ans && !x.ans.correct)

    return (
      <>
        <BackButton href="/dashboard/mock" label="Back to mocks" />

        {/* Main score card */}
        <div className="relative bg-gradient-to-b from-bg-1 to-bg border border-[var(--border)] rounded-3xl p-10 md:p-12 text-center overflow-hidden mb-6">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-[2px]"
            style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--sec-mock), transparent)' }}
          />
          <div className="inline-flex items-center gap-2 mb-4">
            <TrophyIcon className="w-4 h-4" style={{ color: 'var(--sec-mock)' }} />
            <span className="label-mono" style={{ color: 'var(--sec-mock)' }}>
              {examType === 'full' ? 'Full Mock' : 'Quick Mock'} Complete
            </span>
          </div>
          <div
            className="font-mono text-[72px] md:text-[88px] font-medium tracking-tight leading-none mb-2"
            style={{ color: passed ? 'var(--success)' : 'var(--warning)' }}
          >
            {pct}%
          </div>
          <div className={`label-mono mb-4 !tracking-[0.2em] ${passed ? '!text-success' : '!text-warning'}`}>
            {passed ? 'ESTIMATED PASS' : 'BELOW THRESHOLD'}
          </div>
          <h3 className="fraunces-small text-xl font-medium mb-2">{correct} of {items.length} correct</h3>
          <p className="text-fg-2 text-sm mb-1">
            HESI-scale estimate: <strong className="text-fg font-medium">{hesiEst}</strong>
          </p>
          <p className="text-fg-3 text-xs mb-6">Passing threshold is 650 HESI // roughly 75% accuracy</p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href={`/dashboard/mock/${examType}`}
              className="px-5 py-3 rounded-xl font-medium text-white text-sm"
              style={{ background: 'var(--sec-mock)' }}
            >
              Retake mock
            </Link>
            <Link href="/dashboard/review" className="px-5 py-3 bg-bg-1 border border-[var(--border)] rounded-xl text-sm font-medium hover:border-[var(--border-3)]">
              Drill weak spots
            </Link>
          </div>
        </div>

        {/* Per-section breakdown */}
        <div className="bg-bg-1 border border-[var(--border)] rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="label-mono">Section Breakdown</span>
            <span className="flex-1 h-px bg-[var(--border)]" />
          </div>
          <div className="flex flex-col gap-3">
            {sectionBreakdown.map(s => {
              if (s.total === 0) {
                return (
                  <div key={s.cat.id} className="flex items-center gap-3 opacity-40">
                    <div className="w-2 h-8 rounded" style={{ background: s.cat.color }} />
                    <div className="flex-1">
                      <div className="fraunces-small text-sm font-medium">{s.cat.name}</div>
                      <div className="label-mono mt-[2px]">No questions this run</div>
                    </div>
                  </div>
                )
              }
              const passedSection = (s.pct ?? 0) >= 75
              return (
                <div key={s.cat.id}>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-8 rounded" style={{ background: s.cat.color }} />
                    <div className="flex-1 min-w-0">
                      <div className="fraunces-small text-[15px] font-medium">{s.cat.name}</div>
                      <div className="label-mono mt-[2px]">{s.correct}/{s.total} correct</div>
                    </div>
                    <div className="text-right">
                      <div
                        className="font-mono text-xl font-medium tracking-tight"
                        style={{ color: passedSection ? 'var(--success)' : 'var(--warning)' }}
                      >
                        {s.pct}%
                      </div>
                    </div>
                  </div>
                  <div className="h-1 bg-bg-3 rounded overflow-hidden ml-5">
                    <div
                      className="h-full transition-all"
                      style={{ width: `${s.pct ?? 0}%`, background: s.cat.color }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Incorrect review */}
        {incorrectItems.length > 0 && (
          <div className="bg-bg-1 border border-[var(--border)] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="label-mono !text-[var(--sec-weak)]">Review Incorrect</span>
              <span className="flex-1 h-px bg-[var(--border)]" />
              <span className="label-mono">{incorrectItems.length}</span>
            </div>
            <div className="flex flex-col gap-4">
              {incorrectItems.map(({ item, ans, i }) => (
                <div key={i} className="pb-4 border-b border-[var(--border)] last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="font-mono text-[9px] px-2 py-[3px] rounded border tracking-widest flex-shrink-0"
                      style={{ color: item.cat.color, borderColor: item.cat.color }}
                    >
                      {item.cat.short.toUpperCase()}
                    </span>
                    <span className="label-mono">Q{pad2(i + 1)}</span>
                  </div>
                  <p className="fraunces-small text-[15px] font-medium mb-3 leading-snug">{item.scenario.q}</p>
                  <div className="text-sm text-fg-2 mb-2">
                    Your answer: <span className="text-danger font-medium">{LETTERS[ans!.selected]}</span>
                    {' · '}
                    Correct: <span className="text-success font-medium">{LETTERS[item.scenario.ans]}</span>
                  </div>
                  <div className="text-[13.5px] text-fg leading-relaxed bg-bg-2 rounded-lg p-3 border border-[var(--border)]">
                    <span className="label-mono !text-success mr-2">WHY</span>
                    {item.scenario.exp.correct}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    )
  }

  // Active quiz view
  const current = items[idx]
  const answered = answers[idx]
  const color = current.cat.color
  const pct = (idx / items.length) * 100

  return (
    <>
      <BackButton href="/dashboard/mock" label="Exit mock" />
      <div style={{ ['--dc' as string]: color }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="font-mono text-xs text-fg-2 tracking-wide whitespace-nowrap">
            <strong className="text-fg font-medium">{pad2(idx + 1)}</strong> of {pad2(items.length)}
          </div>
          <div className="flex-1 h-[2px] bg-bg-3 rounded overflow-hidden">
            <div className="h-full transition-all" style={{ width: `${pct}%`, background: 'var(--sec-mock)' }} />
          </div>
          <div className="font-mono text-xs text-fg-2 tracking-wide">
            {examType === 'full' ? 'FULL MOCK' : 'QUICK MOCK'}
          </div>
        </div>

        <div className="bg-bg-1 border border-[var(--border)] rounded-2xl p-6 mb-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px opacity-40" style={{ background: color }} />
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--sec-mock)' }}>
              Scenario {pad2(idx + 1)}
            </span>
            <span
              className="font-mono text-[9px] px-2 py-[3px] rounded border tracking-widest bg-black/30"
              style={{ color: current.cat.color, borderColor: current.cat.color }}
            >
              {current.cat.short.toUpperCase()}
            </span>
          </div>
          <div className="fraunces-small text-lg md:text-xl font-medium leading-snug tracking-[-0.01em]">
            {current.scenario.q}
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-3">
          {current.scenario.opts.map((opt, i) => {
            const isCorrect = answered && i === current.scenario.ans
            const isWrong = answered && i === answered.selected && !answered.correct

            return (
              <button
                key={i}
                onClick={() => pickOption(i)}
                disabled={!!answered}
                className={`p-4 border rounded-xl text-left flex gap-3 items-start text-[15px] leading-snug w-full transition-all ${
                  isCorrect
                    ? 'border-success/50 bg-success/[0.06]'
                    : isWrong
                    ? 'border-danger/50 bg-danger/[0.06]'
                    : !answered
                    ? 'bg-bg-1 border-[var(--border)] hover:bg-bg-2 hover:translate-x-0.5'
                    : 'bg-bg-1 border-[var(--border)]'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-lg border flex items-center justify-center font-mono text-xs font-medium flex-shrink-0 ${
                    isCorrect
                      ? 'bg-success border-success text-black'
                      : isWrong
                      ? 'bg-danger border-danger text-white'
                      : 'bg-bg-3 border-[var(--border-2)] text-fg-2'
                  }`}
                >
                  {LETTERS[i]}
                </span>
                <span className="pt-1">{opt}</span>
              </button>
            )
          })}
        </div>

        {answered && (
          <div className="flex flex-col gap-[10px] mb-[14px]">
            <div className="bg-bg-1 border border-[var(--border)] rounded-xl p-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-success" />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-success mb-2 block">
                Why {LETTERS[current.scenario.ans]} is correct
              </span>
              <p className="text-[14.5px] leading-relaxed">{current.scenario.exp.correct}</p>
            </div>
            {!answered.correct && (
              <div className="bg-bg-1 border border-[var(--border)] rounded-xl p-5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-danger" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-danger mb-2 block">
                  Why {LETTERS[answered.selected]} is wrong
                </span>
                <p className="text-[14.5px] leading-relaxed">
                  {current.scenario.exp.wrong[answered.selected] ?? 'This option is incorrect.'}
                </p>
              </div>
            )}
            <div className="bg-bg-1 border border-[var(--border)] rounded-xl p-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-warning" />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-warning mb-2 block">
                Clinical Pearl
              </span>
              <p className="text-[14.5px] leading-relaxed">{current.scenario.exp.pearl}</p>
            </div>
            <button
              onClick={() => setIdx(idx + 1)}
              className="w-full mt-1 px-5 py-4 rounded-xl font-medium text-sm text-white"
              style={{ background: 'var(--sec-mock)' }}
            >
              {idx === items.length - 1 ? 'Finish & See Results' : 'Next Scenario'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
