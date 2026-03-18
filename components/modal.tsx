"use client"

import { useState, useEffect } from "react"
import { X, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

function ModalSiteCard({
  site,
  isCenter,
  compact,
  rankLabel,
}: {
  site: BettingSite
  isCenter: boolean
  compact: boolean
  rankLabel: string
}) {
  const w = compact ? (isCenter ? "w-[200px]" : "w-[168px]") : isCenter ? "w-[300px] xl:w-[340px]" : "w-[220px] xl:w-[252px]"

  return (
    <div
      className={`relative flex flex-col shrink-0 ${w} min-h-0 transition-transform duration-300 ${isCenter ? "z-20 scale-[1.02] xl:scale-105" : "z-10 opacity-95 hover:opacity-100"}`}
    >
      <div
        className={`absolute -inset-0.5 rounded-[2rem] opacity-40 ${isCenter ? "bg-emerald-900/30" : "bg-slate-600/20"}`}
        aria-hidden
      />

        <div
          className={`relative flex flex-col flex-1 min-h-0 overflow-hidden rounded-[1.35rem] xl:rounded-[1.75rem] border-2 bg-slate-950 shadow-xl ${
            isCenter
              ? "border-emerald-700 ring-1 ring-emerald-800/50"
              : "border-slate-600/80 ring-1 ring-white/5"
          }`}
      >
        <div
          className={`absolute -top-px left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 px-3 py-1 rounded-b-xl font-black text-[10px] xl:text-xs shadow-md whitespace-nowrap ${
            isCenter ? "bg-emerald-700 text-white" : "bg-slate-700 text-white"
          }`}
        >
          {rankLabel}
        </div>
        <div className="h-6 xl:h-7" aria-hidden />

        <div className={`mx-3 mt-1 flex justify-center ${compact ? "mb-2" : "mb-3"}`}>
          <div
            className={`flex items-center justify-center rounded-2xl bg-white shadow-inner border border-slate-200/90 ${compact ? "h-14 w-[90%] px-2" : "h-[4.5rem] xl:h-[5.25rem] w-[88%] px-3"}`}
          >
            <img
              src={site?.logo || "/placeholder.svg"}
              alt={site?.name || "Site"}
              className={`max-h-full w-auto object-contain ${compact ? "max-h-10" : "max-h-14 xl:max-h-16"}`}
            />
          </div>
        </div>

        <div
          className={`flex flex-col flex-1 min-h-0 text-center px-3 ${compact ? "pb-2 pt-1" : "pb-3 pt-2"} bg-gradient-to-b from-slate-900 via-slate-950 to-emerald-950/50`}
        >
          <div className={`flex justify-center gap-0.5 shrink-0 ${compact ? "mb-1.5" : "mb-2"}`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${compact ? "w-2.5 h-2.5" : "w-3.5 h-3.5 xl:w-4 xl:h-4"} fill-amber-400 text-amber-400`}
              />
            ))}
          </div>

          <div className={`flex-1 min-h-0 flex flex-col justify-center space-y-0.5 ${compact ? "mb-2" : "mb-3"}`}>
            <p className={`font-extrabold text-white leading-tight ${compact ? "text-sm" : "text-base xl:text-lg"}`}>
              {site?.bonus}
            </p>
            <p className={`font-bold text-emerald-200/95 ${compact ? "text-xs" : "text-sm xl:text-base"}`}>
              {site?.welcomeOffer ?? site?.bonus}
            </p>
          </div>

          <Link
            href={site?.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full font-bold text-center transition-colors hover:bg-emerald-600 active:scale-[0.98] bg-emerald-700 hover:shadow-md text-white ${
              compact ? "rounded-lg py-2 text-[10px]" : "rounded-xl py-2.5 xl:py-3 text-xs xl:text-sm"
            }`}
          >
            GET BONUS
          </Link>

          <p
            className={`mt-2 text-slate-400 leading-snug line-clamp-4 ${compact ? "text-[9px]" : "text-[10px] xl:text-xs"}`}
          >
            {site?.terms ?? ""}
          </p>
        </div>

        <div
          className={`h-1 w-full ${isCenter ? "bg-emerald-800" : "bg-slate-700"}`}
          aria-hidden
        />
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

  const top3Sites = bettingSites.slice(0, 3)
  const reorderedSites = [top3Sites[1], top3Sites[0], top3Sites[2]]
  const labels = ["#2", "#1", "#3"]

  return (
    <div className="hidden md:flex fixed inset-0 bg-black/85 backdrop-blur-md z-50 items-center justify-center p-3 sm:p-4">
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg hover:bg-slate-100 transition-colors border border-slate-200"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full max-w-6xl pt-8">
        <div className="text-center mb-4 lg:mb-6 px-2">
          <p className="text-emerald-200/85 text-xs font-bold uppercase tracking-[0.2em] mb-1">bestbettingsitesie</p>
          <h2 className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-extrabold text-white tracking-tight">
            Today&apos;s standout offers
          </h2>
        </div>

        <div className="hidden lg:flex items-stretch justify-center gap-2 xl:gap-4 px-2">
          {reorderedSites.map((site, index) => (
            <ModalSiteCard
              key={site?.id ?? index}
              site={site}
              isCenter={index === 1}
              compact={false}
              rankLabel={index === 1 ? "#1 Pick" : labels[index]}
            />
          ))}
        </div>

        <div className="hidden md:flex lg:hidden items-stretch justify-center gap-1.5 sm:gap-2 px-1">
          {reorderedSites.map((site, index) => (
            <ModalSiteCard
              key={site?.id ?? index}
              site={site}
              isCenter={index === 1}
              compact
              rankLabel={index === 1 ? "#1" : labels[index]}
            />
          ))}
        </div>

        <p className="text-center mt-6 text-slate-400 text-xs sm:text-sm px-4">
          18+ · Operator T&amp;Cs apply ·{" "}
          <a href="https://www.gambleaware.org" className="text-emerald-300 hover:text-emerald-200 underline" target="_blank" rel="noreferrer">
            BeGambleAware.org
          </a>
        </p>
      </div>
    </div>
  )
}
