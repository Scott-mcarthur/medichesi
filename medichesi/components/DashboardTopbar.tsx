'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LogoutIcon } from './Icons'

export function DashboardTopbar({ userName }: { userName: string }) {
  const router = useRouter()

  async function handleSignout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <div className="flex justify-between items-center pb-5 mb-7 border-b border-[var(--border)]">
      <Link href="/dashboard" className="flex items-center gap-3 font-mono text-xs tracking-[0.16em] font-medium">
        <span className="w-2 h-2 bg-success rounded-full animate-livepulse shadow-[0_0_12px_var(--success)]" />
        <span>MEDIC <span className="text-danger">//</span> HESI</span>
      </Link>
      <div className="flex items-center gap-3">
        <span className="label-mono hidden sm:inline">{userName}</span>
        <button
          onClick={handleSignout}
          className="w-9 h-9 border border-[var(--border)] rounded-lg flex items-center justify-center text-fg-2 hover:text-fg hover:border-[var(--border-3)] transition-all"
          title="Sign out"
        >
          <LogoutIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
