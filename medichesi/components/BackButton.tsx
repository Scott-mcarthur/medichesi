import Link from 'next/link'

export function BackButton({ href, label = 'Back' }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-fg-2 font-mono text-[11px] uppercase tracking-widest mb-6 py-2 hover:text-fg transition-colors"
    >
      ← {label}
    </Link>
  )
}
