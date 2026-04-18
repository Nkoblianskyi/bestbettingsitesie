import Link from "next/link"
import Image from "next/image"
import { ShieldCheck } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[hsl(var(--navy-deep))] shadow-lg">
      {/* Top bar */}
      <div className="bg-[hsl(var(--gold))]">
        <div className="container mx-auto max-w-5xl px-4 xl:max-w-6xl">
          <div className="flex items-center justify-between py-1.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--navy-deep))]">
              bestukbettingsiteslist.com — Independent UK Betting Reviews
            </p>
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-[10px] font-bold text-[hsl(var(--navy-deep))]">18+ Only</span>
              <span className="text-[hsl(var(--navy-deep))]/40">|</span>
              <a
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold text-[hsl(var(--navy-deep))] hover:underline"
              >
                BeGambleAware.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container mx-auto max-w-5xl px-4 xl:max-w-6xl">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20 group-hover:ring-[hsl(var(--gold))]/60 transition-all">
              <Image src="/favicon.ico" alt="" width={28} height={28} className="h-5 w-5 object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-base sm:text-lg leading-tight">
                Best UK Betting Sites
              </span>
              <span className="text-[hsl(var(--gold))] font-display font-semibold text-xs sm:text-sm tracking-wide leading-tight">
                List
              </span>
            </div>
          </Link>

          {/* Right side badges */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1.5 rounded-md border border-white/15 bg-white/8 px-3 py-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[hsl(var(--gold))] shrink-0" strokeWidth={2.5} />
              <span className="text-[11px] font-semibold text-white/90 whitespace-nowrap">UKGC Licensed Only</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-md border border-[hsl(var(--gold))]/40 bg-[hsl(var(--gold))]/10 px-2.5 py-1.5">
              <span className="text-[11px] font-bold text-[hsl(var(--gold))]">18+</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
