import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: { 0: '#0a0e14', 1: '#0f141b', 2: '#151b25', 3: '#1c2330' },
        border: { DEFAULT: '#1f2937', strong: '#2d3748' },
        text: { 0: '#f1f5f9', 1: '#cbd5e1', 2: '#94a3b8', 3: '#64748b' },
        brand: { DEFAULT: '#06b6d4', dim: '#0891b2', glow: 'rgba(6,182,212,.15)' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], mono: ['ui-monospace', 'monospace'] },
    },
  },
  plugins: [],
}
export default config
