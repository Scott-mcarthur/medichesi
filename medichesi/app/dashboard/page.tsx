import Link from 'next/link'
import { CATEGORIES, totalScenarios, totalFlashcards } from '@/lib/content/categories'
import { MOCK_EXAMS } from '@/lib/content/mocks'
import Icon from '@/components/Icon'

export default function Dashboard() {
  const tScen = totalScenarios()
  const tCards = totalFlashcards()

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <div>
            <p className="display text-2xl tracking-tight">
              <span style={{ color: 'var(--brand)' }}>medi</span>chesi
            </p>
            <p className="text-xs text-[var(--text-3)] mt-0.5">Critical care · Hard mode</p>
          </div>
          <div className="text-right text-xs text-[var(--text-2)] tabular-nums hidden sm:block">
            <p>
              <span className="text-[var(--text-0)] font-semibold">{tScen}</span> scenarios &nbsp;·&nbsp;
              <span className="text-[var(--text-0)] font-semibold">{tCards}</span> flashcards
            </p>
            <p className="text-[var(--text-3)]">All 8/10 difficulty target</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <section className="mb-12">
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <p className="text-[0.7rem] uppercase tracking-widest text-[var(--text-3)] mb-1">Topics</p>
              <h2 className="display text-2xl">Pick a category</h2>
            </div>
            <p className="text-sm text-[var(--text-3)] tabular-nums hidden sm:block">5 categories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/dashboard/${cat.id}`}
                className="surface surface-hover relative overflow-hidden p-6 transition-all hover:-translate-y-0.5"
              >
                <span className="cat-stripe" style={{ background: cat.color }} />
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ background: `${cat.color}1a`, color: cat.color }}
                  >
                    <Icon name={cat.icon} size={22} color={cat.color} />
                  </div>
                  <div className="flex-1">
                    <p className="display text-lg leading-tight">{cat.name}</p>
                    <p className="text-xs text-[var(--text-3)] tabular-nums mt-1">
                      {cat.scenarios.length} scenarios · {cat.flashcards.length} cards
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-2)] leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <p className="text-[0.7rem] uppercase tracking-widest text-[var(--text-3)] mb-1">Mock exams</p>
              <h2 className="display text-2xl">Test yourself under time</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MOCK_EXAMS.map((mock) => (
              <Link
                key={mock.id}
                href={`/dashboard/mock/${mock.id}`}
                className="surface surface-hover p-6 group transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--bg-3)] text-[var(--brand)]">
                    <Icon name="clock" size={18} />
                  </div>
                  <p className="display text-base">{mock.name}</p>
                </div>
                <p className="text-sm text-[var(--text-2)] mb-3 leading-relaxed">{mock.desc}</p>
                <div className="flex items-center justify-between text-xs tabular-nums text-[var(--text-3)]">
                  <span>{mock.questionCount} questions</span>
                  <span>{mock.timeMinutes} min</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] mt-16">
        <div className="max-w-6xl mx-auto px-4 py-5 text-xs text-[var(--text-3)] flex flex-wrap items-center justify-between gap-2">
          <p>Per-choice rationales · Bidirectional flashcard nav · Hard mode default</p>
          <p className="tabular-nums">v2.0</p>
        </div>
      </footer>
    </div>
  )
}
