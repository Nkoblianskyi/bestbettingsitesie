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
    <footer className="mt-16 border-t border-slate-700 bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-10 max-w-5xl xl:max-w-6xl">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Support &amp; tools</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="https://gambleaware.org/" className="inline-block">
              <img src="/gamble.webp" alt="GambleAware" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://gamcare.org/" className="inline-block">
              <img src="/gamecare.svg" alt="GamCare" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://gamblingtherapy.org/" className="inline-block">
              <img src="/gordon.png" alt="Gordon Moody" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://gamblersanonymous.org/" className="inline-block">
              <img src="/anonymos.avif" alt="Gamblers Anonymous" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://egba.org/" className="inline-block">
              <img src="/egba.png" alt="EGBA" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <Link
            href="/"
            className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5 rounded-2xl px-4 py-3 sm:py-2 hover:bg-slate-800/40 transition-colors duration-300 group max-w-full"
          >
            <div className="w-14 h-14 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-600 shadow-md group-hover:border-slate-500 transition-colors">
              <Image src="/logo.png" alt="" width={36} height={36} className="w-9 h-9" />
            </div>
            <SiteWordmark variant="footer" />
          </Link>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-400 mb-8">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-emerald-400 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 px-5 py-6 mb-8 text-center sm:text-left max-w-xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-500/90 mb-3">Publisher / operator</p>
          <address className="not-italic text-sm text-slate-300 leading-relaxed space-y-0.5">
            <p className="text-white font-semibold text-base">Sigmastart04 GmbH</p>
            <p>Zehmeplatz 14</p>
            <p>15230 Frankfurt</p>
            <p className="text-slate-400">Deutschland</p>
          </address>
          <p className="text-xs text-slate-500 mt-4 leading-relaxed">
            bestbettingsitesie.com is published by Sigmastart04 GmbH. Editorial content focuses on Irish-facing
            bookmaker comparisons; gambling services are provided only by third-party licensed operators.
          </p>
        </div>

        <div className="text-center text-sm text-slate-500 border-t border-slate-700 pt-8 space-y-2">
          <p>© {new Date().getFullYear()} bestbettingsitesie.com — independent listings for Irish adults.</p>
          <p className="text-slate-300 font-medium">18+ | Ireland | Gambling carries risk — set limits and play safely.</p>
        </div>
      </div>
    </footer>
  )
}
