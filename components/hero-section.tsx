"use client"

import Image from "next/image"
import { ShieldCheck, RefreshCw, CheckCircle2, Star } from "lucide-react"

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

const stats = [
  { value: "6", label: "Sites Reviewed" },
  { value: "100%", label: "UKGC Licensed" },
  { value: "2025", label: "Up to Date" },
  { value: "18+", label: "Required Age" },
]

const tags = [
  { icon: <Image src="/flag.png" alt="" width={20} height={13} className="rounded-sm" />, text: "UK Licensed" },
  { icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />, text: "Expert Vetted" },
  { icon: <RefreshCw className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />, text: "Fast Withdrawals" },
  { icon: <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--navy))]" strokeWidth={2.5} />, text: "UKGC Regulated" },
  { icon: <Star className="w-3.5 h-3.5 text-[hsl(var(--gold-dark))] fill-[hsl(var(--gold-dark))]" />, text: "Editor Reviewed" },
]

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getRevisedDate()

  return (
    <div className="bg-[hsl(var(--navy))] text-white">
      <div className="container mx-auto max-w-5xl px-4 xl:max-w-6xl">
        {/* Main hero content */}
        <div className="py-8 md:py-10 lg:py-12">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--gold))]/15 border border-[hsl(var(--gold))]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[hsl(var(--gold))]">
              Expert Rankings
            </span>
            <span className="text-[11px] text-white/40 font-medium">
              Updated <time dateTime={iso}>{label}</time>
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-balance mb-4">
            Best UK Betting Sites —{" "}
            <span className="text-[hsl(var(--gold))]">Ranked by Experts</span>
          </h1>

          {/* Description */}
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
            Our editorial team tests every major UK bookmaker — deposits, withdrawals, betting markets, live features
            and app quality. We rank them so you can compare offers in seconds, without visiting a dozen different sites.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 sm:gap-8 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[hsl(var(--gold))] leading-none">
                  {s.value}
                </span>
                <span className="text-[11px] font-medium text-white/50 mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Tags row */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((t) => (
              <div
                key={t.text}
                className="inline-flex items-center gap-1.5 rounded-md bg-white/10 border border-white/15 px-2.5 py-1.5"
              >
                {t.icon}
                <span className="text-xs font-semibold text-white/90">{t.text}</span>
              </div>
            ))}
          </div>

          {/* Disclosure */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              className="rounded-md border border-white/20 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white/60 hover:text-white/90 hover:bg-white/12 transition-colors"
            >
              Advertiser Disclosure
            </button>
            <button
              type="button"
              onClick={onTermsModalOpen}
              className="rounded-md border border-white/20 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white/60 hover:text-white/90 hover:bg-white/12 transition-colors"
            >
              18+ Rules
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-2.5">
          <p className="text-[10px] text-white/35 text-center">
            Gambling involves risk. Please play responsibly. All listed sites hold valid UKGC licences. 18+ only. BeGambleAware.org
          </p>
        </div>
      </div>
    </div>
  )
}
