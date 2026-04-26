'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Category, Flashcard } from '@/lib/content/types'
import { createClient } from '@/lib/supabase/client'
import { BackButton } from '@/components/BackButton'
import { pad2 } from '@/lib/utils'

type Item = { cat: Category; flashcard: Flashcard; catIndex: number }

export function FlashcardRunner({
  items,
  title,
  backHref,
  source,
}: {
  items: Item[]
  title: string
  backHref: string
  source: 'category' | 'review'
}) {
  const router = useRouter()
  const [cardIndex, setCardIndex] = useState(0)
  // Track flip state per card so going back/forward preserves the side the user was on
  const [flipped, setFlipped] = useState<boolean[]>(() => items.map(() => false))
  // Track which cards have been marked known (so we can show the running tally)
  const [knownMarks, setKnownMarks] = useState<Set<number>>(new Set())
  const [completed, setCompleted] = useState(false)
  const [saving, setSaving] = useState(false)

  if (items.length === 0) {
    return (
      <>
        <BackButton href={backHref} label="Back" />
        <div className="bg-bg-1 border border-[var(--border)] rounded-2xl p-10 text-center">
          <div className="fraunces-display text-3xl font-medium mb-2">Nothing to review</div>
          <p className="text-fg-2 text-sm mb-6">Come back after you have marked some flashcards as review.</p>
          <Link
            href={backHref}
            className="inline-block px-5 py-3 bg-bg-2 border border-[var(--border)] rounded-lg text-sm hover:border-[var(--border-3)]"
          >
            Back
          </Link>
        </div>
      </>
    )
  }

  const current = items[cardIndex]
  const cat = current?.cat
  const color = cat?.color ?? 'var(--danger)'
  const isFlipped = flipped[cardIndex] ?? false
  const known = knownMarks.size

  const flip = useCallback(() => {
    setFlipped(prev => {
      const next = [...prev]
      next[cardIndex] = !next[cardIndex]
      return next
    })
  }, [cardIndex])

  const goTo = useCallback(
    (newIdx: number) => {
      if (newIdx < 0 || newIdx >= items.length) return
      setCardIndex(newIdx)
    },
    [items.length],
  )

  // Keyboard shortcuts: arrows + space/enter/f to flip
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goTo(cardIndex - 1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goTo(cardIndex + 1)
      } else if (e.key === ' ' || e.key === 'Enter' || e.key === 'f') {
        e.preventDefault()
        flip()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [cardIndex, goTo, flip])

  async function markCard(status: 'known' | 'review') {
    if (saving) return
    setSaving(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user && current) {
      await supabase.from('progress').upsert(
        {
          user_id: user.id,
          item_type: 'flashcard',
          category_id: current.cat.id,
          item_index: current.catIndex,
          status,
          attempts: 1,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,item_type,category_id,item_index' }
      )
    }
    if (status === 'known') {
      setKnownMarks(prev => {
        const next = new Set(prev)
        next.add(cardIndex)
        return next
      })
    } else {
      // If they downgrade a previously-known card, drop it
      setKnownMarks(prev => {
        if (!prev.has(cardIndex)) return prev
        const next = new Set(prev)
        next.delete(cardIndex)
        return next
      })
    }
    setSaving(false)
    // Auto-advance only if there's a next card; otherwise stay so user can hit Finish
    if (cardIndex < items.length - 1) {
      goTo(cardIndex + 1)
    }
  }

  if (completed) {
    const pct = Math.round((known / items.length) * 100)
    return (
      <>
        <BackButton href={backHref} label="Back" />
        <div className="relative bg-gradient-to-b from-bg-1 to-bg border border-[var(--border)] rounded-3xl p-12 text-center overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-[2px]"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${color}, transparent)` }}
          />
          <div className="label-mono mb-4">Set Complete</div>
          <div
            className="font-mono text-[64px] font-medium tracking-tight leading-none mb-2"
            style={{ color: pct >= 80 ? 'var(--success)' : 'var(--warning)' }}
          >
            {pct}%
          </div>
          <h3 className="fraunces-small text-xl font-medium mb-2">Flashcard set complete</h3>
          <p className="text-fg-2 text-sm mb-6">{known} of {items.length} marked as known</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => {
                setCardIndex(0)
                setFlipped(items.map(() => false))
                setKnownMarks(new Set())
                setCompleted(false)
              }}
              className="px-5 py-3 rounded-xl font-medium text-white"
              style={{ background: color }}
            >
              Run it again
            </button>
            <Link href={backHref} className="px-5 py-3 bg-bg-1 border border-[var(--border)] rounded-xl hover:border-[var(--border-3)] text-sm font-medium">
              Done
            </Link>
          </div>
        </div>
      </>
    )
  }

  const pct = ((cardIndex + 1) / items.length) * 100
  const isLast = cardIndex === items.length - 1
  const isFirst = cardIndex === 0
  const thisKnown = knownMarks.has(cardIndex)

  return (
    <>
      <BackButton href={backHref} label="Exit" />
      <div style={{ ['--dc' as string]: color }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="font-mono text-xs text-fg-2 tracking-wide whitespace-nowrap">
            <strong className="text-fg font-medium">{pad2(cardIndex + 1)}</strong> of {pad2(items.length)}
          </div>
          <div className="flex-1 h-[2px] bg-bg-3 rounded overflow-hidden">
            <div className="h-full transition-all" style={{ width: `${pct}%`, background: color }} />
          </div>
          <div className="font-mono text-xs text-fg-2 tracking-wide">{title}</div>
        </div>

        <div
          onClick={flip}
          className="relative min-h-[340px] md:min-h-[400px] bg-gradient-to-b from-bg-1 to-bg border border-[var(--border)] rounded-[20px] p-10 md:p-14 pb-16 flex flex-col justify-center items-center text-center cursor-pointer transition-all hover:border-[var(--border-2)] overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px] opacity-50"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${color}, transparent)` }}
          />
          <div
            className="absolute top-[18px] left-5 font-mono text-[10px] uppercase tracking-[0.14em] flex items-center gap-2"
            style={{ color }}
          >
            <span className="w-1 h-1 rounded-full" style={{ background: color }} />
            {isFlipped ? 'Answer' : 'Prompt'}
          </div>
          <div className="absolute top-[18px] right-5 font-mono text-[10px] text-fg-3 tracking-widest">
            {pad2(cardIndex + 1)}/{pad2(items.length)}
          </div>
          {source === 'review' && cat && (
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 font-mono text-[9px] px-2 py-[2px] rounded border tracking-widest"
              style={{ color: cat.color, borderColor: cat.color }}>
              {cat.short.toUpperCase()}
            </div>
          )}

          {isFlipped ? (
            <div className="font-body text-base md:text-[17px] leading-relaxed max-w-[520px]">
              {current.flashcard.back}
            </div>
          ) : (
            <div className="fraunces-med text-[22px] md:text-[28px] font-medium tracking-[-0.015em] leading-tight">
              {current.flashcard.front}
            </div>
          )}

          <div className="absolute bottom-5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-4">
            {isFlipped ? 'Tap to flip back' : 'Tap card to reveal'}
          </div>
        </div>

        {/* Nav controls - always visible, allow free movement back and forward */}
        <div className="grid grid-cols-3 gap-[10px] mt-[14px]">
          <button
            onClick={() => goTo(cardIndex - 1)}
            disabled={isFirst}
            className="px-4 py-4 rounded-xl font-medium text-sm border bg-bg-1 border-[var(--border)] hover:border-[var(--border-3)] disabled:opacity-40 disabled:hover:border-[var(--border)] disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Prev
          </button>
          <button
            onClick={flip}
            className="px-4 py-4 rounded-xl font-medium text-sm border bg-bg-1 border-[var(--border)] hover:border-[var(--border-3)] transition-all flex items-center justify-center gap-2"
            style={{ color }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
              <path d="M3 21v-5h5" />
            </svg>
            Flip
          </button>
          <button
            onClick={() => {
              if (isLast) setCompleted(true)
              else goTo(cardIndex + 1)
            }}
            className="px-4 py-4 rounded-xl font-medium text-sm text-white transition-all flex items-center justify-center gap-2"
            style={{ background: color }}
          >
            {isLast ? 'Finish' : 'Next'}
            {!isLast && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            )}
          </button>
        </div>

        {/* Recall rating - only after revealing the answer side */}
        {isFlipped && (
          <div className="grid grid-cols-2 gap-[10px] mt-[10px]">
            <button
              onClick={() => markCard('review')}
              disabled={saving}
              className="px-5 py-3 rounded-xl font-medium text-sm border bg-danger/[0.08] border-danger/[0.25] text-[#f87171] hover:bg-danger/[0.14] hover:border-danger transition-all disabled:opacity-60"
            >
              Need to review
            </button>
            <button
              onClick={() => markCard('known')}
              disabled={saving}
              className={`px-5 py-3 rounded-xl font-medium text-sm border transition-all disabled:opacity-60 ${
                thisKnown
                  ? 'bg-success/[0.18] border-success text-success'
                  : 'bg-success/[0.08] border-success/[0.25] text-success hover:bg-success/[0.14] hover:border-success'
              }`}
            >
              {thisKnown ? 'Got it ✓' : 'Got it'}
            </button>
          </div>
        )}

        {/* Tiny progress dots - clickable to jump anywhere */}
        <div className="mt-6 flex flex-wrap gap-1.5 justify-center">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === cardIndex ? '20px' : '8px',
                background:
                  i === cardIndex
                    ? color
                    : knownMarks.has(i)
                    ? 'var(--success)'
                    : flipped[i]
                    ? 'var(--border-3)'
                    : 'var(--bg-3)',
              }}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-[10px] font-mono uppercase tracking-[0.14em] text-fg-4 mt-4">
          ← / → navigate · space to flip
        </p>
      </div>
    </>
  )
}
