'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Category, Scenario } from '@/lib/content/types'
import { createClient } from '@/lib/supabase/client'
import { BackButton } from '@/components/BackButton'
import { pad2 } from '@/lib/utils'

export type QuizItem = { cat: Category; scenario: Scenario; catIndex: number }

type Answer = { selected: number; correct: boolean }

const LETTERS = ['A', 'B', 'C', 'D', 'E']

export function QuizRunner({
  items,
  title,
  backHref,
  showCategoryTag = false,
}: {
  items: QuizItem[]
  title: string
  backHref: string
  showCategoryTag?: boolean
}) {
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<(Answer | null)[]>(() => items.map(() => null))
  const [saving, setSaving] = useState(false)

  if (items.length === 0) {
    return (
      <>
        <BackButton href={backHref} label="Back" />
        <div className="bg-bg-1 border border-[var(--border)] rounded-2xl p-10 text-center">
          <div className="fraunces-display text-3xl font-medium mb-2">No questions</div>
          <p className="text-fg-2 text-sm mb-6">Come back later.</p>
          <Link href={backHref} className="inline-block px-5 py-3 bg-bg-2 border border-[var(--border)] rounded-lg text-sm">
            Back
          </Link>
        </div>
      </>
    )
  }

  // Completion screen
  if (idx >= items.length) {
    const correct = answers.filter(a => a?.correct).length
    const pct = Math.round((correct / items.length) * 100)
    const color = items[0].cat.color
    return (
      <>
        <BackButton href={backHref} label="Back" />
        <div className="relative bg-gradient-to-b from-bg-1 to-bg border border-[var(--border)] rounded-3xl p-12 text-center overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-[2px]"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${color}, transparent)` }}
          />
          <div className="label-mono mb-4">Run Complete</div>
          <div
            className="font-mono text-[64px] font-medium tracking-tight leading-none mb-2"
            style={{ color: pct >= 70 ? 'var(--success)' : 'var(--warning)' }}
          >
            {pct}%
          </div>
          <h3 className="fraunces-small text-xl font-medium mb-2">Scenario set complete</h3>
          <p className="text-fg-2 text-sm mb-6">{correct} of {items.length} correct on this run</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => {
                setIdx(0)
                setAnswers(items.map(() => null))
              }}
              className="px-5 py-3 rounded-xl font-medium text-white"
              style={{ background: color }}
            >
              Retake
            </button>
            <Link href={backHref} className="px-5 py-3 bg-bg-1 border border-[var(--border)] rounded-xl text-sm font-medium hover:border-[var(--border-3)]">
              Done
            </Link>
          </div>
        </div>
      </>
    )
  }

  const current = items[idx]
  const answered = answers[idx]
  const color = current.cat.color

  async function pickOption(optIdx: number) {
    if (answered || saving) return
    setSaving(true)
    const isCorrect = optIdx === current.scenario.ans
    const newAnswers = [...answers]
    newAnswers[idx] = { selected: optIdx, correct: isCorrect }
    setAnswers(newAnswers)

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      // Read existing attempts
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
    setSaving(false)
  }

  const pct = (idx / items.length) * 100

  return (
    <>
      <BackButton href={backHref} label="Exit" />
      <div style={{ ['--dc' as string]: color }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="font-mono text-xs text-fg-2 tracking-wide whitespace-nowrap">
            <strong className="text-fg font-medium">{pad2(idx + 1)}</strong> of {pad2(items.length)}
          </div>
          <div className="flex-1 h-[2px] bg-bg-3 rounded overflow-hidden">
            <div className="h-full transition-all" style={{ width: `${pct}%`, background: color }} />
          </div>
          <div className="font-mono text-xs text-fg-2 tracking-wide">{title}</div>
        </div>

        <div className="bg-bg-1 border border-[var(--border)] rounded-2xl p-6 mb-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px opacity-40" style={{ background: color }} />
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color }}>
              Scenario {pad2(idx + 1)}
            </span>
            <div className="flex items-center gap-2">
              {showCategoryTag && (
                <span
                  className="font-mono text-[9px] px-2 py-[3px] rounded border tracking-widest bg-black/30"
                  style={{ color: current.cat.color, borderColor: current.cat.color }}
                >
                  {current.cat.short.toUpperCase()}
                </span>
              )}
              <span className="font-mono text-[10px] text-fg-3 tracking-wider">
                {pad2(idx + 1)} / {pad2(items.length)}
              </span>
            </div>
          </div>
          <div className="fraunces-small text-lg md:text-xl font-medium leading-snug tracking-[-0.01em]">
            {current.scenario.q}
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-3">
          {current.scenario.opts.map((opt, i) => {
            const isCorrect = answered && i === current.scenario.ans
            const isWrong = answered && i === answered.selected && !answered.correct
            const isDisabled = !!answered

            return (
              <button
                key={i}
                onClick={() => pickOption(i)}
                disabled={isDisabled}
                className={`p-4 border rounded-xl text-left flex gap-3 items-start text-[15px] leading-snug w-full transition-all ${
                  isCorrect
                    ? 'border-success/50 bg-success/[0.06]'
                    : isWrong
                    ? 'border-danger/50 bg-danger/[0.06]'
                    : isDisabled
                    ? 'bg-bg-1 border-[var(--border)]'
                    : 'bg-bg-1 border-[var(--border)] hover:bg-bg-2 hover:translate-x-0.5'
                }`}
                style={isCorrect || isWrong ? {} : !isDisabled ? { borderColor: 'var(--border)' } : {}}
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
          <div className="flex flex-col gap-[10px] mt-1 mb-[14px]">
            {/* Correct answer rationale */}
            <div className="bg-bg-1 border border-[var(--border)] rounded-xl p-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-success" />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 rounded-full bg-success/15 text-success flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-success">
                  Why {LETTERS[current.scenario.ans]} is correct
                </span>
              </div>
              <p className="text-[14.5px] leading-relaxed">{current.scenario.exp.correct}</p>
            </div>

            {/* Wrong answer rationale (only if they got it wrong) */}
            {!answered.correct && (
              <div className="bg-bg-1 border border-[var(--border)] rounded-xl p-5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-danger" />
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-5 h-5 rounded-full bg-danger/15 text-danger flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-danger">
                    Why {LETTERS[answered.selected]} is wrong
                  </span>
                </div>
                <p className="text-[14.5px] leading-relaxed">
                  {current.scenario.exp.wrong[answered.selected] ?? 'This option is incorrect.'}
                </p>
              </div>
            )}

            {/* Clinical pearl */}
            <div className="bg-bg-1 border border-[var(--border)] rounded-xl p-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-warning" />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 rounded-full bg-warning/15 text-warning flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-warning">Clinical Pearl</span>
              </div>
              <p className="text-[14.5px] leading-relaxed">{current.scenario.exp.pearl}</p>
            </div>

            <button
              onClick={() => setIdx(idx + 1)}
              className="w-full mt-1 px-5 py-4 rounded-xl font-medium text-sm text-white"
              style={{ background: color }}
            >
              {idx === items.length - 1 ? 'Finish' : 'Next Scenario'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
