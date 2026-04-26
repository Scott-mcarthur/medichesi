'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import type { Flashcard } from '@/lib/content/types'
import Icon from './Icon'

interface Props {
  flashcards: Flashcard[]
  title: string
  backHref: string
  accentColor?: string
}

export default function FlashcardRunner({ flashcards, title, backHref, accentColor }: Props) {
  const [idx, setIdx] = useState(0)
  // Track flip state per card so going back/forward preserves what side the user was on
  const [flipped, setFlipped] = useState<boolean[]>(() => Array(flashcards.length).fill(false))
  const [seen, setSeen] = useState<boolean[]>(() => {
    const a = Array(flashcards.length).fill(false)
    a[0] = true
    return a
  })

  const total = flashcards.length
  const card = flashcards[idx]
  const isFlipped = flipped[idx]
  const seenCount = seen.filter(Boolean).length

  const flip = useCallback(() => {
    const next = flipped.slice()
    next[idx] = !next[idx]
    setFlipped(next)
  }, [flipped, idx])

  const goTo = useCallback(
    (newIdx: number) => {
      if (newIdx < 0 || newIdx >= total) return
      setIdx(newIdx)
      const s = seen.slice()
      s[newIdx] = true
      setSeen(s)
    },
    [seen, total],
  )

  // Keyboard shortcuts: arrows + space to flip
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goTo(idx - 1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goTo(idx + 1)
      } else if (e.key === ' ' || e.key === 'Enter' || e.key === 'f') {
        e.preventDefault()
        flip()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [idx, goTo, flip])

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
              Card {idx + 1} of {total}
            </p>
          </div>
          <div className="text-sm tabular-nums text-[var(--text-2)] min-w-[60px] text-right">
            <span className="text-[var(--brand)] font-semibold">{seenCount}</span>
            <span className="text-[var(--text-3)]"> seen</span>
          </div>
        </div>
        <div className="h-1 bg-[var(--bg-2)]">
          <div
            className="h-full transition-all duration-300"
            style={{ width: `${((idx + 1) / total) * 100}%`, background: accentColor || 'var(--brand)' }}
          />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''} fade-up`} key={card.id} onClick={flip}>
          <div className="flashcard-inner cursor-pointer" style={{ minHeight: '320px' }}>
            <div className="flashcard-face" style={{ borderColor: accentColor ? `${accentColor}33` : undefined }}>
              <div className="text-center w-full">
                <p className="text-[0.7rem] uppercase tracking-widest text-[var(--text-3)] mb-4">Question</p>
                <p className="text-xl md:text-2xl display text-[var(--text-0)] leading-snug">{card.front}</p>
                <p className="text-xs text-[var(--text-3)] mt-8">Tap or press space to reveal</p>
              </div>
            </div>
            <div className="flashcard-face flashcard-back" style={{ borderColor: accentColor ? `${accentColor}55` : undefined }}>
              <div className="text-center w-full">
                <p className="text-[0.7rem] uppercase tracking-widest mb-4 font-semibold" style={{ color: accentColor || 'var(--brand)' }}>
                  Answer
                </p>
                <p className="text-base md:text-lg text-[var(--text-0)] leading-relaxed text-left">{card.back}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 mt-8">
          <button className="btn btn-ghost" onClick={() => goTo(idx - 1)} disabled={idx === 0}>
            <Icon name="prev" size={16} /> Previous
          </button>
          <button className="btn btn-ghost" onClick={flip}>
            <Icon name="flip" size={16} /> Flip
          </button>
          <button className="btn btn-primary" onClick={() => goTo(idx + 1)} disabled={idx === total - 1}>
            Next <Icon name="next" size={16} />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-10 gap-1.5">
          {flashcards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                background: i === idx ? (accentColor || 'var(--brand)') : seen[i] ? 'var(--border-strong)' : 'var(--bg-2)',
              }}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-[var(--text-3)] mt-6">
          ← / → to navigate &nbsp;·&nbsp; Space to flip
        </p>
      </main>
    </div>
  )
}
