import Link from 'next/link'
import { EcgLine } from '@/components/EcgLine'
import { AlertIcon, CardsIcon, TargetIcon, TrophyIcon, ArrowRightIcon, ShuffleIcon } from '@/components/Icons'
import { CATEGORIES } from '@/lib/content/categories'

export default function LandingPage() {
  const features = [
    {
      icon: CardsIcon,
      title: 'Real exam criteria',
      desc: 'Built directly from the Massachusetts didactic paramedic HESI content outline. Not generic test prep, not scraped flashcards. The actual categories your school tests on.',
      color: 'var(--sec-airway)',
    },
    {
      icon: AlertIcon,
      title: 'Weak spots, tracked',
      desc: 'Every scenario you miss goes into your Weak Spots. Drill only what you got wrong. Fix the gaps before test day.',
      color: 'var(--sec-weak)',
    },
    {
      icon: TargetIcon,
      title: 'Detailed rationale',
      desc: 'Every scenario tells you why the right answer is right, why your specific wrong answer is wrong, plus a clinical pearl. No just a letter grade.',
      color: 'var(--sec-medical)',
    },
    {
      icon: ShuffleIcon,
      title: 'Mock exams',
      desc: 'Full and quick mock exams that mix scenarios from every section like the real HESI. Score by section so you know where to focus.',
      color: 'var(--sec-mixed)',
    },
    {
      icon: TrophyIcon,
      title: 'Progress that persists',
      desc: 'Log in on any device. Your progress, weak spots, and mock history follow you. Grind on your phone, review on your laptop.',
      color: 'var(--sec-ops)',
    },
  ]

  return (
    <div className="min-h-screen relative z-[1]">
      {/* Topbar */}
      <header className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex justify-between items-center border-b border-[var(--border)]">
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.16em] font-medium">
          <span className="w-2 h-2 bg-success rounded-full animate-livepulse shadow-[0_0_12px_var(--success)]" />
          <span>MEDIC <span className="text-danger">//</span> HESI</span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/login" className="text-sm text-fg-2 hover:text-fg px-3 py-2 transition-colors">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium bg-danger hover:brightness-110 text-white px-4 py-2 rounded-lg transition-all"
          >
            Start free
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-12 relative">
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-5 h-px bg-danger" />
            <span className="label-mono !text-danger">HESI Capstone // Paramedic Prep</span>
            <span className="label-mono">FREE</span>
          </div>
          <h1 className="fraunces-display font-medium leading-[0.98] tracking-[-0.03em] text-[44px] md:text-[72px] lg:text-[88px] mb-4">
            Pass the test.<br />
            <span className="italic font-normal text-danger">Know your shit.</span>
          </h1>
          <p className="text-fg-2 text-base md:text-lg leading-relaxed max-w-xl mb-2">
            <span className="text-fg font-medium">The free study app built from the real Massachusetts didactic paramedic HESI criteria.</span>
          </p>
          <p className="text-fg-2 text-base md:text-lg leading-relaxed max-w-xl">
            Flashcards, scenario-based questions, weak-spot tracking, mock exams. No paywall, no upsell, no BS.
          </p>

          <EcgLine />

          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <Link
              href="/signup"
              className="flex-1 px-6 py-4 bg-danger text-white rounded-xl font-medium hover:brightness-110 transition-all flex items-center justify-center gap-2 text-base"
            >
              Start studying free
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/login"
              className="flex-1 px-6 py-4 bg-bg-1 border border-[var(--border)] text-fg rounded-xl font-medium hover:border-[var(--border-3)] hover:bg-bg-2 transition-all text-center"
            >
              Already have an account
            </Link>
          </div>
          <p className="label-mono mt-5">Minimum passing score: 650 // Target {'>'} 75% accuracy on mocks</p>
        </div>
      </section>

      {/* Content sections preview */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-12 border-t border-[var(--border)]">
        <div className="flex items-center gap-3 mb-10">
          <span className="label-mono">Content Areas</span>
          <span className="flex-1 h-px bg-[var(--border)]" />
          <span className="label-mono">{CATEGORIES.length} Sections</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              className="bg-bg-1 border border-[var(--border)] rounded-xl p-5 relative overflow-hidden"
              style={{ borderLeftColor: cat.color, borderLeftWidth: '2px' }}
            >
              <div className="label-mono mb-2">SEC // {String(i + 1).padStart(2, '0')}</div>
              <h3 className="fraunces-small text-xl font-medium tracking-[-0.01em] mb-2">{cat.name}</h3>
              <p className="text-sm text-fg-2 leading-relaxed mb-3">{cat.desc}</p>
              <div className="font-mono text-[10px] text-fg-3 tracking-wider">
                {cat.flashcards.length} CARDS · {cat.scenarios.length} SCENARIOS
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-12 border-t border-[var(--border)]">
        <div className="flex items-center gap-3 mb-10">
          <span className="label-mono">How it works</span>
          <span className="flex-1 h-px bg-[var(--border)]" />
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-bg-1 border border-[var(--border)] rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: f.color }} />
                <Icon className="w-6 h-6 mb-4" style={{ color: f.color }} />
                <h3 className="fraunces-small text-xl font-medium tracking-[-0.01em] mb-2">{f.title}</h3>
                <p className="text-sm text-fg-2 leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 border-t border-[var(--border)]">
        <div className="bg-gradient-to-b from-bg-1 to-bg border border-[var(--border)] rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-[2px] bg-gradient-to-r from-transparent via-danger to-transparent" />
          <div className="label-mono mb-5">Ready to work</div>
          <h2 className="fraunces-display text-4xl md:text-5xl font-medium tracking-[-0.02em] mb-4">
            Stop guessing. <span className="italic text-danger">Start grinding.</span>
          </h2>
          <p className="text-fg-2 max-w-md mx-auto mb-8">
            Free forever. Sign up with email, track your progress, pass the test. No credit card, no upsell.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-danger text-white rounded-xl font-medium hover:brightness-110 transition-all"
          >
            Create free account
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t border-[var(--border)] mt-6">
        <p className="label-mono text-center leading-relaxed">
          Study aid only. Follow your local protocols and official curriculum.<br />
          Built to pass the HESI. Keep working.
        </p>
      </footer>
    </div>
  )
}
