'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const supabase = createClient()
    const { error: err } = await supabase.auth.signInWithPassword({ email, password })
    if (err) {
      setError(err.message)
      setLoading(false)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="max-w-6xl w-full mx-auto px-5 md:px-8 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 font-mono text-xs tracking-[0.16em] font-medium">
          <span className="w-2 h-2 bg-success rounded-full animate-livepulse shadow-[0_0_12px_var(--success)]" />
          <span>MEDIC <span className="text-danger">//</span> HESI</span>
        </Link>
        <Link href="/signup" className="text-sm text-fg-2 hover:text-fg transition-colors">
          Create account
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-sm">
          <div className="label-mono mb-3">Sign in</div>
          <h1 className="fraunces-display text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[0.98] mb-8">
            Welcome back.
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <div>
              <label className="label-mono block mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-bg-1 border border-[var(--border)] rounded-lg text-fg placeholder:text-fg-3 focus:outline-none focus:border-danger transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="label-mono block mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-bg-1 border border-[var(--border)] rounded-lg text-fg placeholder:text-fg-3 focus:outline-none focus:border-danger transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 px-6 py-3 bg-danger text-white rounded-lg font-medium hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <p className="label-mono text-center mt-8">
            New here?{' '}
            <Link href="/signup" className="!text-danger hover:underline">
              Create a free account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
