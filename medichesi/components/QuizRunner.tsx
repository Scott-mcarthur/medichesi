'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { Scenario } from '@/lib/content/types'
import Icon from './Icon'

interface Props {
  scenarios: Scenario[]
  title: string
  backHref: string
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

function diffPill(d: number) {
  if (d <= 5) return <span className="diff diff-low">DIFF {d}</span>
  if (d <= 7) return <span className="diff diff-med">DIFF {d}</span>
  return <span className="diff diff-high">DIFF {d}</span>
}

export default function QuizRunner({ scenarios, title, backHref }: Props) {
  const [idx, setIdx] = useState(0)
  // selections[i] = chosen index for scenario i, or null if unanswered
  const [selections, setSelections] = useState<(number | null)[]>(() => Array(scenarios.length).fill(null))
  const [showResults, setShowResults] = useState(false)

  const total = scenarios.length
  const current = scenarios[idx]
  const selected = selections[idx]
  const answered = selected !== null

  function pick(i: number) {
    if (answered) return
    const next = selections.slice()
    next[idx] = i
    setSelections(next)
  }

  const correctCount = useMemo(
    () => selections.reduce((acc: number, s, i) => acc + (s === scenarios[i].correct ? 1 : 0), 0),
    [selections, scenarios],
  )

  if (showResults) {
    return (
      <ResultsView
        scenarios={scenarios}
        selections={selections}
        correctCount={correctCount}
        title={title}
        backHref={backHref}
        onReview={() => {
          setShowResults(false)
          setIdx(0)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)] sticky top-0 bg-[rgba(10,14,20,0.92)] backdrop-blur z-30">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href={backHref} className="text-[var(--text-2)] hover:text-[var(--text-0)] flex items-center gap-1.5 text-sm">
            <Icon name="prev" size={16} /> Back
          </Link>
          <div className="flex-1 text-center">
            <p className="text-[0.7rem] tracking-widest uppercase text-[var(--text-3)]">{title}</p>
            <p className="text-sm text-[var(--text-1)] mt-0.5 font-medium tabular-nums">
              Question {idx + 1} of {total}
            </p>
          </div>
          <div className="text-sm tabular-nums text-[var(--text-2)] min-w-[60px] text-right">
            <span className="text-[var(--green)] font-semibold">{correctCount}</span>
            <span className="text-[var(--text-3)]"> / {selections.filter((s) => s !== null).length}</span>
          </div>
        </div>
        <div className="h-1 bg-[var(--bg-2)]">
          <div
            className="h-full bg-[var(--brand)] transition-all duration-300"
            style={{ width: `${((idx + (answered ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div key={current.id} className="fade-up">
          <div className="flex items-center gap-2 mb-3">
            {diffPill(current.difficulty)}
            {current.tags?.map((t) => (
              <span
                key={t}
                className="text-[0.68rem] uppercase tracking-wider text-[var(--text-3)] px-1.5 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-1)]"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-[1.05rem] leading-relaxed mb-6 text-[var(--text-0)]">{current.q}</p>

          <div className="space-y-3">
            {current.choices.map((c, i) => {
              const isCorrect = i === current.correct
              const isSelected = selected === i
              let cls = 'choice'
              if (answered) {
                if (isCorrect) cls += ' choice-correct'
                else if (isSelected) cls += ' choice-incorrect'
              } else if (isSelected) cls += ' choice-selected'

              return (
                <div key={i}>
                  <button className={cls} disabled={answered} onClick={() => pick(i)}>
                    <span className="choice-letter">{LETTERS[i]}</span>
                    <span className="flex-1 pt-0.5">{c.text}</span>
                    {answered && isCorrect && <Icon name="check" size={18} color="#10b981" />}
                    {answered && !isCorrect && isSelected && <Icon name="x" size={18} color="#ef4444" />}
                  </button>
                  {/* ALWAYS show per-choice explanation after answering - correct OR incorrect */}
                  {answered && (
                    <div className={`exp-block ${isCorrect ? 'exp-block-correct' : 'exp-block-incorrect'}`}>
                      <span className="font-semibold text-[var(--text-0)] mr-1">{isCorrect ? 'Why right:' : 'Why wrong:'}</span>
                      {c.exp}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {answered && (
            <div className="surface mt-6 p-4 fade-up">
              <p className="text-[0.7rem] uppercase tracking-widest text-[var(--brand)] mb-2 font-semibold">Bottom Line</p>
              <p className="text-[var(--text-0)] leading-relaxed">{current.exp}</p>
            </div>
          )}

          <div className="flex justify-between items-center gap-3 mt-8">
            <button
              className="btn btn-ghost"
              onClick={() => setIdx(Math.max(0, idx - 1))}
              disabled={idx === 0}
            >
              <Icon name="prev" size={16} /> Previous
            </button>
            {idx < total - 1 ? (
              <button
                className="btn btn-primary"
                onClick={() => setIdx(idx + 1)}
                disabled={!answered}
              >
                Next <Icon name="next" size={16} />
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => setShowResults(true)}
                disabled={!answered}
              >
                Finish <Icon name="check" size={16} />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function ResultsView({
  scenarios,
  selections,
  correctCount,
  title,
  backHref,
  onReview,
}: {
  scenarios: Scenario[]
  selections: (number | null)[]
  correctCount: number
  title: string
  backHref: string
  onReview: () => void
}) {
  const total = scenarios.length
  const pct = Math.round((correctCount / total) * 100)
  const wrong = scenarios.map((s, i) => ({ s, i, sel: selections[i] })).filter((x) => x.sel !== x.s.correct)

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href={backHref} className="text-[var(--text-2)] hover:text-[var(--text-0)] flex items-center gap-1.5 text-sm">
            <Icon name="home" size={16} /> Done
          </Link>
          <p className="text-[0.7rem] tracking-widest uppercase text-[var(--text-3)]">{title} - Results</p>
          <span />
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="surface p-8 text-center mb-8 fade-up">
          <p className="text-[0.7rem] uppercase tracking-widest text-[var(--text-3)] mb-2">Score</p>
          <p className="text-7xl display tabular-nums" style={{ color: pct >= 75 ? 'var(--green)' : pct >= 50 ? 'var(--amber)' : 'var(--red)' }}>
            {pct}%
          </p>
          <p className="text-[var(--text-2)] mt-2 tabular-nums">
            {correctCount} correct of {total}
          </p>
        </div>

        {wrong.length > 0 && (
          <>
            <h2 className="display text-xl mb-4">Review missed ({wrong.length})</h2>
            <div className="space-y-4">
              {wrong.map(({ s, i, sel }) => (
                <div key={s.id} className="surface p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[var(--text-3)] text-xs tabular-nums">#{i + 1}</span>
                    {diffPill(s.difficulty)}
                  </div>
                  <p className="text-[var(--text-0)] mb-3 leading-relaxed">{s.q}</p>
                  <div className="text-sm space-y-1.5 mt-3">
                    {sel !== null && sel !== s.correct && (
                      <p className="text-[var(--text-2)]">
                        <span className="text-[var(--red)] font-semibold">Your answer:</span> {LETTERS[sel]}. {s.choices[sel].text}
                      </p>
                    )}
                    {sel === null && (
                      <p className="text-[var(--text-3)]"><em>(Not answered)</em></p>
                    )}
                    <p className="text-[var(--text-2)]">
                      <span className="text-[var(--green)] font-semibold">Correct:</span> {LETTERS[s.correct]}. {s.choices[s.correct].text}
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-[var(--text-1)] leading-relaxed border-t border-[var(--border)] pt-3">{s.exp}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="flex gap-3 mt-8 justify-center">
          <button className="btn btn-ghost" onClick={onReview}>
            <Icon name="reset" size={16} /> Review answers
          </button>
          <Link href={backHref} className="btn btn-primary">
            <Icon name="home" size={16} /> Done
          </Link>
        </div>
      </main>
    </div>
  )
}
