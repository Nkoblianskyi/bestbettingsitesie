import Link from "next/link"
import Image from "next/image"
import { SiteWordmark } from "@/components/site-wordmark"

export function Header() {
  return (
    <header className="text-white mb-2 border-b border-slate-700/80 bg-slate-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-3 sm:px-4 max-w-5xl xl:max-w-6xl">
        <div className="md:hidden flex items-center justify-center py-2.5 min-h-[44px]">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-slate-800/90 flex items-center justify-center border border-slate-600/80 shadow-inner group-hover:border-slate-500 transition-all duration-300">
              <Image src="/logo.png" alt="bestbettingsitesie" width={26} height={26} className="w-[1.35rem] h-[1.35rem]" />
            </div>
            <SiteWordmark variant="header-compact" className="text-[0.9375rem] sm:text-base" />
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center py-3.5 lg:py-4">
          <Link href="/" className="flex items-center gap-4 lg:gap-5 group">
            <div className="w-12 h-12 lg:w-[3.65rem] lg:h-[3.65rem] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-600/90 shadow-lg shadow-black/25 group-hover:border-slate-500 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="bestbettingsitesie"
                width={44}
                height={44}
                className="w-9 h-9 lg:w-11 lg:h-11"
              />
            </div>
            <SiteWordmark variant="header-hero" />
          </Link>
        </div>
      </div>
    </header>
  )
}
