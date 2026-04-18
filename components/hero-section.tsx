"use client"

import Image from "next/image"
import { ShieldCheck, Clock, CheckCircle2 } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getRevisedDate() {
  const d = new Date()
  return {
    iso: d.toISOString().slice(0, 10),
    label: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
  }
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getRevisedDate()

  const pills = [
    {
      icon: <Image src="/flag.png" alt="" width={22} height={14} className="rounded-sm shrink-0" />,
      text: "UK Licensed Only",
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" strokeWidth={2.5} />,
      text: "Verified & Vetted",
    },
    {
      icon: <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" strokeWidth={2.5} />,
      text: "Fast Withdrawals",
    },
    {
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-blue-300 shrink-0" strokeWidth={2.5} />,
      text: "UKGC Regulated",
    },
  ]

  const DisclosureButtons = () => (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      <button
        type="button"
        onClick={onAdvertiserModalOpen}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/85 hover:bg-white/15 transition-colors"
      >
        Advertiser Disclosure
      </button>
      <button
        type="button"
        onClick={onTermsModalOpen}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/85 hover:bg-white/12 transition-colors"
      >
        18+ Rules
      </button>
    </div>
  )

  return (
    <>
      {/* Desktop */}
      <div
        className="hidden lg:block relative overflow-hidden text-white mb-4 w-full rounded-2xl border border-white/10 shadow-2xl"
        style={{ background: "rgba(2, 8, 23, 0.82)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-blue-950/30 pointer-events-none" />
        <div className="relative z-10 grid lg:grid-cols-[1.1fr_1fr] gap-8 xl:gap-12 px-8 xl:px-12 py-8 xl:py-10 items-center">
          <div className="space-y-4">
            <p className="text-amber-400/90 text-xs font-bold uppercase tracking-[0.3em]">bestukbettingsiteslist.com</p>
            <h1 className="font-hero-display text-3xl xl:text-4xl 2xl:text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-balance">
              Top UK Betting Sites,
              <br />
              <span className="text-amber-400">Ranked by Experts</span>
            </h1>
            <p className="text-xs text-white/50 font-medium">
              Last updated: <time dateTime={iso}>{label}</time>
            </p>
            <DisclosureButtons />
          </div>

          <div className="space-y-4 border-l border-white/10 pl-8 xl:pl-12">
            <p className="text-sm xl:text-base text-white/85 leading-relaxed">
              We independently review every major UK bookmaker so you can compare welcome bonuses, betting markets,
              cash-out speed and app quality — all without visiting a dozen different sites.
            </p>
            <p className="text-xs text-white/55 leading-relaxed">
              Bonuses and terms change frequently. Always read the operator&apos;s own T&Cs before depositing. All listed
              operators hold valid UKGC licences. 18+ only.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {pills.map((p) => (
                <div
                  key={p.text}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/8 border border-white/15 px-3 py-1.5"
                >
                  {p.icon}
                  <span className="text-xs font-semibold text-white/90">{p.text}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-white/35 pt-1">Gambling involves risk. Play responsibly. BeGambleAware.org</p>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div
        className="hidden md:block lg:hidden relative overflow-hidden text-white mb-3 w-full rounded-xl border border-white/10"
        style={{ background: "rgba(2, 8, 23, 0.82)" }}
      >
        <div className="px-6 py-5 text-center">
          <p className="text-amber-400/85 text-[10px] font-bold uppercase tracking-widest mb-1">bestukbettingsiteslist.com</p>
          <h1 className="font-hero-display text-2xl md:text-3xl font-extrabold leading-tight">
            Top UK Betting Sites, <span className="text-amber-400">Ranked</span>
          </h1>
          <p className="text-[11px] text-white/45 mt-1.5 mb-3">
            Updated <time dateTime={iso}>{label}</time>
          </p>
          <p className="text-xs text-white/75 max-w-lg mx-auto leading-snug mb-4">
            Expert-reviewed UK bookmakers. Check each operator&apos;s live T&Cs before you place a bet.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {pills.map((p) => (
              <div key={p.text} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-2.5 py-1">
                {p.icon}
                <span className="text-[11px] font-semibold text-white/90">{p.text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/85 hover:bg-white/15 transition-colors"
            >
              Advertiser Disclosure
            </button>
            <button
              type="button"
              onClick={onTermsModalOpen}
              className="inline-flex items-center rounded-full border border-white/20 bg-white/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/85 transition-colors"
            >
              18+ Rules
            </button>
          </div>
          <p className="text-[10px] text-white/35 mt-3">18+ · Responsible gambling</p>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="md:hidden relative overflow-hidden text-white rounded-xl mb-3 w-full border border-white/10 shadow-lg"
        style={{ background: "rgba(2, 8, 23, 0.88)" }}
      >
        <div className="relative z-10 px-4 py-4 flex flex-col gap-2.5">
          <div className="text-center">
            <p className="text-amber-400/80 text-[9px] font-bold uppercase tracking-[0.25em] mb-0.5">bestukbettingsiteslist.com</p>
            <h1 className="font-hero-display text-xl font-extrabold leading-tight text-white">
              Top UK Betting Sites, <span className="text-amber-400">Ranked</span>
            </h1>
            <p className="text-[10px] text-white/50 mt-0.5">
              Updated <time dateTime={iso}>{label}</time>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5">
            {pills.map((p) => (
              <div key={p.text} className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/20 px-2 py-1">
                {p.icon}
                <span className="text-[9px] font-semibold text-white/90">{p.text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-1.5">
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              className="inline-flex items-center rounded-full border border-white/25 bg-black/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-white"
            >
              Advertiser Disclosure
            </button>
            <button
              type="button"
              onClick={onTermsModalOpen}
              className="inline-flex items-center rounded-full border border-white/25 bg-black/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-white"
            >
              18+ Rules
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
