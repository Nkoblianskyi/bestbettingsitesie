import Link from "next/link"
import Image from "next/image"
import { SiteWordmark } from "@/components/site-wordmark"

export function Header() {
  return (
    <header className="sticky top-0 z-40 mb-3 border-b border-slate-700/60 bg-slate-900/90 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl px-4 py-3 xl:max-w-6xl md:py-3.5">
        <Link
          href="/"
          className="flex items-center justify-center gap-3 transition-opacity hover:opacity-90 md:gap-4"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 ring-1 ring-slate-600/80 md:h-10 md:w-10">
            <Image src="/favicon.ico" alt="" width={32} height={32} className="h-6 w-6 object-contain md:h-7 md:w-7" />
          </div>
          <SiteWordmark variant="header-compact" className="md:hidden" />
          <SiteWordmark variant="header-hero" className="hidden md:inline" />
        </Link>
      </div>
    </header>
  )
}
