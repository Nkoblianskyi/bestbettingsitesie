"use client"

import { useState, useEffect } from "react"
import { X, Star, Trophy } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

const RANK_CONFIG = [
  { label: "#2", badge: "Runner-Up", border: "border-slate-500", accent: "bg-slate-700", isTop: false },
  { label: "#1 Pick", badge: "Editor's Choice", border: "border-amber-500", accent: "bg-amber-600", isTop: true },
  { label: "#3", badge: "Top Value", border: "border-emerald-600", accent: "bg-emerald-700", isTop: false },
]

function ModalCard({
  site,
  config,
  compact,
}: {
  site: BettingSite
  config: (typeof RANK_CONFIG)[number]
  compact: boolean
}) {
  const w = compact
    ? config.isTop ? "w-[190px]" : "w-[160px]"
    : config.isTop ? "w-[300px] xl:w-[330px]" : "w-[220px] xl:w-[250px]"

  return (
    <div
      className={`relative flex flex-col shrink-0 ${w} transition-transform duration-300 ${
        config.isTop ? "z-20 -translate-y-2" : "z-10"
      }`}
    >
      <div
        className={`flex flex-col overflow-hidden rounded-2xl border-2 bg-slate-950 shadow-2xl ${config.border} ${
          config.isTop ? "ring-1 ring-amber-400/30" : ""
        }`}
      >
        {/* Badge */}
        <div
          className={`flex items-center justify-center gap-1.5 px-3 py-1.5 ${config.accent} ${compact ? "text-[9px]" : "text-[10px] xl:text-xs"} font-black text-white uppercase tracking-wide`}
        >
          {config.isTop && <Trophy className={compact ? "w-2.5 h-2.5" : "w-3 h-3"} />}
          {config.badge}
        </div>

        {/* Logo */}
        <div className={`mx-3 flex justify-center ${compact ? "mt-2 mb-2" : "mt-3 mb-3"}`}>
          <div
            className={`flex items-center justify-center rounded-xl bg-white shadow border border-slate-100 w-full ${
              compact ? "h-12 px-2" : "h-[4.5rem] xl:h-[5.25rem] px-3"
            }`}
          >
            <img
              src={site?.logo || "/placeholder.svg"}
              alt={site?.name || ""}
              className={`max-h-full w-auto object-contain ${compact ? "max-h-9" : "max-h-14 xl:max-h-16"}`}
            />
          </div>
        </div>

        {/* Content */}
        <div className={`flex flex-col flex-1 text-center px-3 ${compact ? "pb-3" : "pb-4"} bg-gradient-to-b from-slate-900 to-slate-950`}>
          {/* Stars */}
          <div className={`flex justify-center gap-0.5 ${compact ? "mb-2" : "mb-2.5"}`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${compact ? "w-2.5 h-2.5" : "w-3.5 h-3.5 xl:w-4 xl:h-4"} fill-amber-400 text-amber-400`}
              />
            ))}
          </div>

          {/* Offer */}
          <div className={compact ? "mb-2.5" : "mb-3"}>
            <p className={`font-extrabold text-white leading-tight ${compact ? "text-sm" : "text-base xl:text-lg"}`}>
              {site?.bonus}
            </p>
            <p className={`font-bold text-amber-300/95 ${compact ? "text-xs" : "text-sm xl:text-base"} mt-0.5`}>
              {site?.welcomeOffer ?? site?.bonus}
            </p>
          </div>

          {/* CTA */}
          <Link
            href={site?.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full font-bold text-center transition-all hover:brightness-110 active:scale-[0.98] text-white ${
              config.isTop ? "bg-amber-500 hover:bg-amber-400 text-slate-900" : "bg-emerald-700 hover:bg-emerald-600"
            } ${compact ? "rounded-lg py-2 text-[10px]" : "rounded-xl py-2.5 xl:py-3 text-xs xl:text-sm"}`}
          >
            {config.isTop ? "Claim Top Offer" : "Get Bonus"}
          </Link>

          {/* Terms */}
          <p className={`mt-2 text-slate-500 leading-snug line-clamp-3 ${compact ? "text-[8px]" : "text-[9px] xl:text-[10px]"}`}>
            {site?.terms ?? ""}
          </p>
        </div>

        {/* Bottom accent bar */}
        <div className={`h-1 w-full ${config.isTop ? "bg-amber-500" : config.accent}`} aria-hidden />
      </div>
    </div>
  )
}

export function Modal({ bettingSites, casinoSites: _casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const top3 = bettingSites.slice(0, 3)
  // Reorder: 2nd, 1st, 3rd (podium style)
  const ordered = [top3[1], top3[0], top3[2]]

  return (
    <div className="hidden md:flex fixed inset-0 bg-black/90 backdrop-blur-md z-50 items-center justify-center p-4">
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-6 px-4">
          <p className="text-amber-400/80 text-[10px] font-bold uppercase tracking-[0.25em] mb-1">
            bestukbettingsiteslist.com
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Today&apos;s Top UK Betting Offers
          </h2>
          <p className="text-slate-400 text-xs mt-1.5">Curated picks from our expert reviewers</p>
        </div>

        {/* Desktop cards */}
        <div className="hidden lg:flex items-end justify-center gap-3 xl:gap-5 px-4">
          {ordered.map((site, i) => (
            <ModalCard key={site?.id ?? i} site={site} config={RANK_CONFIG[i]} compact={false} />
          ))}
        </div>

        {/* Tablet cards */}
        <div className="hidden md:flex lg:hidden items-end justify-center gap-2 px-2">
          {ordered.map((site, i) => (
            <ModalCard key={site?.id ?? i} site={site} config={RANK_CONFIG[i]} compact />
          ))}
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-slate-500 text-[10px] sm:text-xs px-4">
          18+ · New customers only · Operator T&amp;Cs apply ·{" "}
          <a
            href="https://www.begambleaware.org"
            className="text-amber-400/80 hover:text-amber-300 underline"
            target="_blank"
            rel="noreferrer"
          >
            BeGambleAware.org
          </a>
        </p>
      </div>
    </div>
  )
}
