import Link from "next/link"
import Image from "next/image"
import { SiteWordmark } from "@/components/site-wordmark"

const nav = [
  { href: "/about", label: "About" },
  { href: "/responsible-gaming", label: "Safer Gambling" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookies" },
  { href: "/privacy-policy", label: "Privacy" },
]

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-700/50 bg-slate-950/95 text-white">
      <div className="container mx-auto max-w-5xl px-4 py-10 xl:max-w-6xl">

        {/* Brand */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-800 ring-1 ring-amber-500/30">
              <Image src="/favicon.ico" alt="" width={36} height={36} className="h-8 w-8 object-contain" />
            </div>
            <SiteWordmark variant="footer" />
          </div>
          <p className="text-slate-500 text-xs text-center max-w-sm">
            Independent rankings of UK-licensed bookmakers. We do not accept bets or hold player funds.
          </p>
        </div>

        {/* Navigation */}
        <nav className="mb-8 flex flex-wrap justify-center gap-4 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-400 hover:text-white transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Responsible gambling logos */}
        <div className="mb-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">
            Safer Gambling Support
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/gamble.webp" alt="GambleAware" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/gamecare.svg" alt="GamCare" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://www.gordonmoody.org.uk/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/gordon.png" alt="Gordon Moody" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://www.gamblersanonymous.org.uk/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/anonymos.avif" alt="Gamblers Anonymous" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
          </div>
          <p className="text-center text-[11px] text-slate-500 mt-3">
            National Gambling Helpline: <strong className="text-slate-400">0808 8020 133</strong> — Free &amp; 24/7
          </p>
        </div>

        {/* Publisher */}
        <div className="mx-auto max-w-xl text-center mb-8">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Publisher</p>
          <p className="font-semibold text-white">K.C. NTOMATA LIMITED</p>
          <p className="text-sm text-slate-400">Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, Nicosia 2019, Cyprus</p>
          <p className="mt-2 text-xs text-slate-500">
            Editorial comparisons only. Gambling should be conducted only with fully licensed UK operators.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-4 mb-6">
          <p className="text-[10px] sm:text-xs text-slate-400 text-center leading-relaxed">
            <strong className="text-slate-300">18+ only.</strong> Gambling can be addictive. Play responsibly. All operators listed are licensed by the UK Gambling Commission. Offers shown are subject to change and operator T&amp;Cs apply. bestukbettingsiteslist.com earns revenue through affiliate partnerships; this does not affect our rankings methodology.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-5 text-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} bestukbettingsiteslist.com &middot; 18+ &middot; United Kingdom</p>
        </div>
      </div>
    </footer>
  )
}
