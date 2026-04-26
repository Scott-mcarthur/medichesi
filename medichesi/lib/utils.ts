export function pad2(n: number): string {
  return String(n).padStart(2, '0')
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function hesiScoreEstimate(percent: number): number {
  // Rough conversion: 65% ≈ 650 (passing), 100% ≈ 1000
  // Linear-ish mapping
  return Math.round(percent * 10)
}

export function passed(percent: number): boolean {
  return percent >= 65
}
