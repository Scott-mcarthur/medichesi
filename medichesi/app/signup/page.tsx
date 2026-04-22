'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const supabase = createClient()
    const { error: err } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (err) {
      setError(err.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
      // If email confirmation is off in Supabase, log them in directly:
      const { data: sessionData } = await supabase.auth.getSession()
      if (sessionData?.session) {
        router.push('/dashboard')
        router.refresh()
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="max-w-6xl w-full mx-auto px-5 md:px-8 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 font-mono text-xs tracking-[0.16em] font-medium">
          <span className="w-2 h-2 bg-success rounded-full animate-livepulse shadow-[0_0_12px_var(--success)]" />
          <span>MEDIC <span className="text-danger">//</span> HESI</span>
        </Link>
        <Link href="/login" className="text-sm text-fg-2 hover:text-fg transition-colors">
          Sign in
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-sm">
          <div className="label-mono mb-3 !text-danger">Free account</div>
          <h1 className="fraunces-display text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[0.98] mb-3">
            Start studying.
          </h1>
          <p className="text-fg-2 text-sm mb-8">
            Your progress, weak spots, and mock exams all saved across devices. Free forever.
          </p>

          {success ? (
            <div className="bg-bg-1 border border-success/30 rounded-lg p-5">
              <div className="label-mono !text-success mb-2">Check your email</div>
              <p className="text-fg text-sm leading-relaxed">
                We sent a confirmation link. Click it to verify, then sign in.
              </p>
              <Link
                href="/login"
                className="inline-block mt-4 px-5 py-2 bg-bg-2 border border-[var(--border)] rounded-lg text-sm hover:border-[var(--border-3)]"
              >
                Go to sign in
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSignup} className="flex flex-col gap-3">
              <div>
                <label className="label-mono block mb-2">First name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-bg-1 border border-[var(--border)] rounded-lg text-fg placeholder:text-fg-3 focus:outline-none focus:border-danger transition-colors"
                  placeholder="AJ"
                />
              </div>
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
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-bg-1 border border-[var(--border)] rounded-lg text-fg placeholder:text-fg-3 focus:outline-none focus:border-danger transition-colors"
                  placeholder="6+ characters"
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
                className="w-full mt-2 px-6 py-3 bg-danger text-white rounded-lg font-medium hover:brightness-110 transition-all disabled:opacity-60"
              >
                {loading ? 'Creating account...' : 'Create free account'}
              </button>
            </form>
          )}

          <p className="label-mono text-center mt-8">
            Already have an account?{' '}
            <Link href="/login" className="!text-danger hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
