import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Medic HESI Prep',
  description: 'Free Paramedic HESI study app. Built from the real Massachusetts didactic exam criteria. Track weak spots, run mock exams, pass the test.',
}

export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
