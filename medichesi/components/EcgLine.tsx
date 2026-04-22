export function EcgLine() {
  const path =
    'M0,25 L80,25 L95,25 L100,18 L108,32 L115,10 L123,40 L130,25 L180,25 L260,25 L275,25 L280,18 L288,32 L295,10 L303,40 L310,25 L380,25 L460,25 L475,25 L480,18 L488,32 L495,10 L503,40 L510,25 L580,25 L660,25 L675,25 L680,18 L688,32 L695,10 L703,40 L710,25 L800,25'

  return (
    <div className="relative h-[50px] my-5 overflow-hidden bg-black/30 border-y border-border">
      <div className="absolute top-0 left-0 h-full w-[200%] animate-ecgscroll">
        <svg viewBox="0 0 800 50" preserveAspectRatio="none" className="w-1/2 h-full float-left">
          <defs>
            <linearGradient id="ecgfade" x1="0" x2="1">
              <stop offset="0" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="0.5" stopColor="#10b981" stopOpacity="1" />
              <stop offset="1" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d={path} stroke="url(#ecgfade)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg viewBox="0 0 800 50" preserveAspectRatio="none" className="w-1/2 h-full float-left">
          <path d={path} stroke="url(#ecgfade)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 font-mono text-[10px] text-success px-2 py-1 bg-bg border border-border rounded tracking-widest">
        SYS_READY
      </div>
    </div>
  )
}
