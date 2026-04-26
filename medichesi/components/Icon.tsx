import React from 'react'

type IconName = 'lung' | 'heart' | 'shield' | 'cross' | 'truck' | 'cards' | 'list' | 'clock' | 'arrow' | 'check' | 'x' | 'flip' | 'prev' | 'next' | 'home' | 'reset'

interface Props {
  name: IconName
  size?: number
  className?: string
  color?: string
}

export default function Icon({ name, size = 20, className = '', color = 'currentColor' }: Props) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  }
  switch (name) {
    case 'lung':
      return (
        <svg {...props}>
          <path d="M6.4 19c-2.5 0-2.4-3-2.4-5.5C4 11 5.4 8 7.5 7c1 .5 1.5 1 1.5 2.5V18a1 1 0 0 1-1.1 1z" />
          <path d="M17.6 19c2.5 0 2.4-3 2.4-5.5 0-2.5-1.4-5.5-3.5-6.5-1 .5-1.5 1-1.5 2.5V18a1 1 0 0 0 1.1 1z" />
          <path d="M12 3v8" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...props}>
          <path d="M19 14c1.5-1.5 3-3.5 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 1-4.5 2.5C10.5 4 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2 1.5 4 3 5.5l7 7Z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'cross':
      return (
        <svg {...props}>
          <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
        </svg>
      )
    case 'truck':
      return (
        <svg {...props}>
          <path d="M2 7h13v8H2z" />
          <path d="M15 10h4l3 3v2h-7" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </svg>
      )
    case 'cards':
      return (
        <svg {...props}>
          <rect x="3" y="6" width="14" height="14" rx="2" />
          <path d="M7 6V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2" />
        </svg>
      )
    case 'list':
      return (
        <svg {...props}>
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...props}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      )
    case 'check':
      return (
        <svg {...props}>
          <path d="M5 12l5 5L20 7" />
        </svg>
      )
    case 'x':
      return (
        <svg {...props}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      )
    case 'flip':
      return (
        <svg {...props}>
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          <path d="M3 21v-5h5" />
        </svg>
      )
    case 'prev':
      return (
        <svg {...props}>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      )
    case 'next':
      return (
        <svg {...props}>
          <path d="M9 18l6-6-6-6" />
        </svg>
      )
    case 'home':
      return (
        <svg {...props}>
          <path d="M3 11l9-8 9 8M5 10v10h14V10" />
        </svg>
      )
    case 'reset':
      return (
        <svg {...props}>
          <path d="M3 12a9 9 0 1 0 3-6.7" />
          <path d="M3 4v5h5" />
        </svg>
      )
  }
}
