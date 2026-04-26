import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategory, CATEGORIES } from '@/lib/content/categories'
import Icon from '@/components/Icon'

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoryId: c.id }))
}

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const cat = getCategory(params.categoryId)
  if (!cat) notFound()

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 py-5 flex items-center justify-between">
          <Link href="/dashboard" className="text-[var(--text-2)] hover:text-[var(--text-0)] flex items-center gap-1.5 text-sm">
            <Icon name="prev" size={16} /> Dashboard
          </Link>
          <p className="display text-base">
            <span style={{ color: 'var(--brand)' }}>medi</span>chesi
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-start gap-4 mb-10">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: `${cat.color}1a`, color: cat.color }}
          >
            <Icon name={cat.icon} size={28} color={cat.color} />
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-widest text-[var(--text-3)] mb-1">Category</p>
            <h1 className="display text-3xl tracking-tight">{cat.name}</h1>
            <p className="text-[var(--text-2)] mt-2 leading-relaxed max-w-2xl">{cat.desc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href={`/dashboard/${cat.id}/quiz`}
            className="surface surface-hover p-6 group transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-3)] flex items-center justify-center text-[var(--brand)]">
                <Icon name="list" size={20} />
              </div>
              <p className="display text-lg">Scenarios</p>
            </div>
            <p className="text-sm text-[var(--text-2)] mb-4 leading-relaxed">
              {cat.scenarios.length} hard scenarios. Per-choice rationales after every answer.
            </p>
            <p className="text-xs text-[var(--text-3)] flex items-center gap-1.5">
              Start quiz <Icon name="arrow" size={14} />
            </p>
          </Link>

          <Link
            href={`/dashboard/${cat.id}/flashcards`}
            className="surface surface-hover p-6 group transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-3)] flex items-center justify-center" style={{ color: cat.color }}>
                <Icon name="cards" size={20} color={cat.color} />
              </div>
              <p className="display text-lg">Flashcards</p>
            </div>
            <p className="text-sm text-[var(--text-2)] mb-4 leading-relaxed">
              {cat.flashcards.length} deep-rationale cards. Flip back and forth, navigate freely.
            </p>
            <p className="text-xs text-[var(--text-3)] flex items-center gap-1.5">
              Start flashcards <Icon name="arrow" size={14} />
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
