'use client'

import { useState } from 'react'
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
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(0)
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
    if (status === 'known') setKnown(known + 1)
    setCardIndex(cardIndex + 1)
    setFlipped(false)
    setSaving(false)
  }

  if (cardIndex >= items.length) {
    const pct = Math.round((known / items.length) * 100)
    return (
      <>
        <BackButton href={backHref} label="Back" />
        <div className="relative bg-gradient-to-b from-bg-1 to-bg border border-[var(--border)] rounded-3xl p-12 text-center overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-[2px] bg-gradient-to-r from-transparent to-transparent"
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
                setFlipped(false)
                setKnown(0)
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

  const pct = (cardIndex / items.length) * 100

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
          onClick={() => !flipped && setFlipped(true)}
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
            {flipped ? 'Answer' : 'Prompt'}
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

          {flipped ? (
            <div className="font-body text-base md:text-[17px] leading-relaxed max-w-[520px]">
              {current.flashcard.back}
            </div>
          ) : (
            <div className="fraunces-med text-[22px] md:text-[28px] font-medium tracking-[-0.015em] leading-tight">
              {current.flashcard.front}
            </div>
          )}

          <div className="absolute bottom-5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-4">
            {flipped ? 'Rate your recall' : 'Tap card to reveal'}
          </div>
        </div>

        {flipped ? (
          <div className="grid grid-cols-2 gap-[10px] mt-[14px]">
            <button
              onClick={() => markCard('review')}
              disabled={saving}
              className="px-5 py-4 rounded-xl font-medium text-sm border bg-danger/[0.08] border-danger/[0.25] text-[#f87171] hover:bg-danger/[0.14] hover:border-danger transition-all disabled:opacity-60"
            >
              Need to review
            </button>
            <button
              onClick={() => markCard('known')}
              disabled={saving}
              className="px-5 py-4 rounded-xl font-medium text-sm border bg-success/[0.08] border-success/[0.25] text-success hover:bg-success/[0.14] hover:border-success transition-all disabled:opacity-60"
            >
              Got it
            </button>
          </div>
        ) : (
          <button
            onClick={() => setFlipped(true)}
            className="w-full mt-[14px] px-5 py-4 rounded-xl font-medium text-sm text-white"
            style={{ background: color }}
          >
            Reveal Answer
          </button>
        )}
      </div>
    </>
  )
}
