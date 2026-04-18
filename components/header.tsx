import Link from "next/link"
import Image from "next/image"
import { SiteWordmark } from "@/components/site-wordmark"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-700/50 bg-slate-950/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto max-w-5xl px-4 py-3 xl:max-w-6xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-85 md:gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 ring-1 ring-amber-500/40 md:h-10 md:w-10">
              <Image src="/favicon.ico" alt="" width={32} height={32} className="h-6 w-6 object-contain md:h-7 md:w-7" />
            </div>
            <SiteWordmark variant="header-compact" className="md:hidden" />
            <SiteWordmark variant="header-hero" className="hidden md:inline" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                UKGC Licensed Only
              </span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 ml-2">
              <span className="text-[10px] font-semibold text-slate-300">18+</span>
              <span className="text-slate-600">|</span>
              <span className="text-[10px] font-semibold text-slate-300">BeGambleAware.org</span>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 px-2.5 py-1">
            <span className="text-[9px] font-bold text-amber-300 uppercase">18+</span>
          </div>
        </div>
      </div>
    </header>
  )
}
