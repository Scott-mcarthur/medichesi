'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import type { Scenario } from '@/lib/content/types'
import Icon from './Icon'

interface Props {
  scenarioPool: Scenario[]
  questionCount: number
  title: string
  backHref: string
  timeMinutes: number
  categoryMap?: Record<string, string>
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

function diffPill(d: number) {
  if (d <= 5) return <span className="diff diff-low">DIFF {d}</span>
  if (d <= 7) return <span className="diff diff-med">DIFF {d}</span>
  return <span className="diff diff-high">DIFF {d}</span>
}

function fmt(secs: number) {
  if (secs < 0) secs = 0
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function MockRunner({ scenarioPool, questionCount, title, backHref, timeMinutes, categoryMap }: Props) {
  // Shuffle client-side ONCE on mount so each visit gets a fresh exam
  const [scenarios] = useState<Scenario[]>(() => {
    const arr = scenarioPool.slice()
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.slice(0, Math.min(questionCount, arr.length))
  })
  const total = scenarios.length
  const [idx, setIdx] = useState(0)
  const [selections, setSelections] = useState<(number | null)[]>(() => Array(total).fill(null))
  // Track whether the user has clicked "submit" on a per-question basis. Only after submit do we lock and show explanations.
  const [submitted, setSubmitted] = useState<boolean[]>(() => Array(total).fill(false))
  const [secondsLeft, setSecondsLeft] = useState(timeMinutes * 60)
  const [finished, setFinished] = useState(false)

  // Timer
  useEffect(() => {
    if (finished) return
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id)
          setFinished(true)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [finished])

  const current = scenarios[idx]
  const sel = selections[idx]
  const sub = submitted[idx]

  function pick(i: number) {
    if (sub) return
    const next = selections.slice()
    next[idx] = i
    setSelections(next)
  }

  function submitOne() {
    if (sel === null) return
    const next = submitted.slice()
    next[idx] = true
    setSubmitted(next)
  }

  const correctCount = useMemo(
    () => selections.reduce((acc: number, s, i) => acc + (s === scenarios[i].correct ? 1 : 0), 0),
    [selections, scenarios],
  )

  const finishExam = useCallback(() => setFinished(true), [])

  if (finished) {
    return (
      <ResultsView
        scenarios={scenarios}
        selections={selections}
        correctCount={correctCount}
        title={title}
        backHref={backHref}
        timeUsed={timeMinutes * 60 - secondsLeft}
        timedOut={secondsLeft === 0}
      />
    )
  }

  const lowTime = secondsLeft < 300

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)] sticky top-0 bg-[rgba(10,14,20,0.92)] backdrop-blur z-30">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href={backHref} className="text-[var(--text-2)] hover:text-[var(--text-0)] flex items-center gap-1.5 text-sm">
            <Icon name="prev" size={16} /> Exit
          </Link>
          <div className="flex-1 text-center">
            <p className="text-[0.7rem] tracking-widest uppercase text-[var(--text-3)]">{title}</p>
            <p className="text-sm text-[var(--text-1)] mt-0.5 font-medium tabular-nums">
              Q {idx + 1} of {total}
            </p>
          </div>
          <div
            className={`text-sm tabular-nums font-mono font-semibold flex items-center gap-1.5 ${
              lowTime ? 'text-[var(--red)]' : 'text-[var(--brand)]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${lowTime ? 'bg-[var(--red)] live-dot' : 'bg-[var(--brand)] live-dot'}`} />
            {fmt(secondsLeft)}
          </div>
        </div>
        <div className="h-1 bg-[var(--bg-2)]">
          <div
            className="h-full bg-[var(--brand)] transition-all duration-300"
            style={{ width: `${((idx + (sub ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div key={current.id} className="fade-up">
          <div className="flex items-center gap-2 mb-3">
            {diffPill(current.difficulty)}
            {categoryMap && categoryMap[current.id] && (
              <span className="diff" style={{ background: 'var(--bg-3)', color: 'var(--text-2)' }}>
                {categoryMap[current.id]}
              </span>
            )}
          </div>

          <p className="text-[1.05rem] leading-relaxed mb-6 text-[var(--text-0)]">{current.q}</p>

          <div className="space-y-3">
            {current.choices.map((c, i) => {
              const isCorrect = i === current.correct
              const isSelected = sel === i
              let cls = 'choice'
              if (sub) {
                if (isCorrect) cls += ' choice-correct'
                else if (isSelected) cls += ' choice-incorrect'
              } else if (isSelected) cls += ' choice-selected'

              return (
                <div key={i}>
                  <button className={cls} disabled={sub} onClick={() => pick(i)}>
                    <span className="choice-letter">{LETTERS[i]}</span>
                    <span className="flex-1 pt-0.5">{c.text}</span>
                    {sub && isCorrect && <Icon name="check" size={18} color="#10b981" />}
                    {sub && !isCorrect && isSelected && <Icon name="x" size={18} color="#ef4444" />}
                  </button>
                  {sub && (
                    <div className={`exp-block ${isCorrect ? 'exp-block-correct' : 'exp-block-incorrect'}`}>
                      <span className="font-semibold text-[var(--text-0)] mr-1">{isCorrect ? 'Why right:' : 'Why wrong:'}</span>
                      {c.exp}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {sub && (
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
              <Icon name="prev" size={16} /> Prev
            </button>
            <div className="flex gap-3">
              {!sub ? (
                <button className="btn btn-primary" onClick={submitOne} disabled={sel === null}>
                  Submit answer
                </button>
              ) : idx < total - 1 ? (
                <button className="btn btn-primary" onClick={() => setIdx(idx + 1)}>
                  Next <Icon name="next" size={16} />
                </button>
              ) : (
                <button className="btn btn-primary" onClick={finishExam}>
                  Finish exam <Icon name="check" size={16} />
                </button>
              )}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-10 sm:grid-cols-15 gap-1.5">
            {scenarios.map((_, i) => {
              const sUsr = selections[i]
              const sSub = submitted[i]
              const sCor = scenarios[i].correct
              let bg = 'var(--bg-2)'
              if (i === idx) bg = 'var(--brand)'
              else if (sSub) bg = sUsr === sCor ? 'var(--green)' : 'var(--red)'
              else if (sUsr !== null) bg = 'var(--border-strong)'
              return (
                <button
                  key={i}
                  className="h-2 rounded-full transition-all"
                  style={{ background: bg }}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to question ${i + 1}`}
                />
              )
            })}
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
  timeUsed,
  timedOut,
}: {
  scenarios: Scenario[]
  selections: (number | null)[]
  correctCount: number
  title: string
  backHref: string
  timeUsed: number
  timedOut: boolean
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
        {timedOut && (
          <div className="surface p-4 mb-6 fade-up" style={{ borderColor: 'rgba(239,68,68,0.4)' }}>
            <p className="text-[var(--red)] font-semibold mb-1">Time expired</p>
            <p className="text-[var(--text-2)] text-sm">Unanswered questions are scored as incorrect.</p>
          </div>
        )}
        <div className="surface p-8 text-center mb-8 fade-up">
          <p className="text-[0.7rem] uppercase tracking-widest text-[var(--text-3)] mb-2">Score</p>
          <p
            className="text-7xl display tabular-nums"
            style={{ color: pct >= 75 ? 'var(--green)' : pct >= 50 ? 'var(--amber)' : 'var(--red)' }}
          >
            {pct}%
          </p>
          <p className="text-[var(--text-2)] mt-2 tabular-nums">
            {correctCount} correct of {total}
          </p>
          <p className="text-xs text-[var(--text-3)] mt-2 tabular-nums">Time used: {fmt(timeUsed)}</p>
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
                        <span className="text-[var(--red)] font-semibold">You:</span> {LETTERS[sel]}. {s.choices[sel].text}
                      </p>
                    )}
                    {sel === null && <p className="text-[var(--text-3)]"><em>(Not answered)</em></p>}
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
          <Link href={backHref} className="btn btn-primary">
            <Icon name="home" size={16} /> Done
          </Link>
        </div>
      </main>
    </div>
  )
}
