import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050505',
          1: '#0a0a0a',
          2: '#111111',
          3: '#181818',
        },
        border: {
          DEFAULT: '#1e1e1e',
          2: '#2a2a2a',
          3: '#3a3a3a',
        },
        fg: {
          DEFAULT: '#fafafa',
          2: '#a0a0a0',
          3: '#666666',
          4: '#444444',
        },
        sec: {
          airway: '#06b6d4',
          cardio: '#ef4444',
          trauma: '#f59e0b',
          medical: '#10b981',
          ops: '#a78bfa',
          weak: '#f59e0b',
          mixed: '#d946ef',
          mock: '#ec4899',
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'livepulse': 'livepulse 1.4s ease-in-out infinite',
        'weakpulse': 'weakpulse 2s ease-in-out infinite',
        'ecgscroll': 'ecgscroll 3.5s linear infinite',
        'fadeIn': 'fadeIn 0.3s ease',
      },
      keyframes: {
        livepulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        weakpulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        ecgscroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
