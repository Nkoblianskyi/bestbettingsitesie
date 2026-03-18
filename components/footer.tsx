import Link from "next/link"
import Image from "next/image"
import { SiteWordmark } from "@/components/site-wordmark"

const nav = [
  { href: "/about", label: "About" },
  { href: "/responsible-gaming", label: "Safer play" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookies" },
  { href: "/privacy-policy", label: "Privacy" },
]

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-700/60 bg-slate-900/90 text-white">
      <div className="container mx-auto max-w-5xl px-4 py-8 xl:max-w-6xl">
        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 ring-1 ring-slate-600/80">
            <Image src="/favicon.ico" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
          </div>
          <SiteWordmark variant="footer" />
        </div>

        <nav className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mb-8 text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Support</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="https://gambleaware.org/" className="inline-block">
              <img src="/gamble.webp" alt="GambleAware" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://gamcare.org/" className="inline-block">
              <img src="/gamecare.svg" alt="GamCare" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://gamblingtherapy.org/" className="inline-block">
              <img src="/gordon.png" alt="Gordon Moody" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://gamblersanonymous.org/" className="inline-block">
              <img src="/anonymos.avif" alt="Gamblers Anonymous" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://gamblingcare.ie/" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-white px-2 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100">
              <img src="/GamblingCare-w.png" alt="GamblingCare" className="h-8 rounded  px-2 py-1" />
            </Link>
            <Link href="https://problemgambling.ie/" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-white px-2 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100">
              <img src="/ProblemGambling-w.png" alt="ProblemGambling" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1">Publisher</p>
          <p className="font-semibold text-white">Sigmastart04 GmbH</p>
          <p className="text-sm text-slate-400">Zehmeplatz 14, 15230 Frankfurt, Deutschland</p>
          <p className="mt-2 text-xs text-slate-500">Editorial comparisons. Gambling by licensed operators only.</p>
        </div>

        <div className="mt-8 border-t border-slate-700/80 pt-6 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} bestbettingsitesie.com · 18+ · Ireland</p>
        </div>
      </div>
    </footer>
  )
}
