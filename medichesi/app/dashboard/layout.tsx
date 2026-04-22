export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 pt-5 pb-24 relative z-[1]">
      {children}
    </div>
  )
}
