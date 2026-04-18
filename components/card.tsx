"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Star, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

const BADGE: Record<number, { label: string; color: string }> = {
  1: { label: "Editor's Choice", color: "bg-amber-500 text-white" },
  2: { label: "Top Rated", color: "bg-blue-700 text-white" },
  3: { label: "Best Value", color: "bg-emerald-700 text-white" },
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const termsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const welcomeOffer = site.welcomeOffer ?? site.bonus
  const termsText = site.terms ?? ""

  const formatVotes = (n: number) => n.toLocaleString("en-GB")

  // score 0–10 → stars 0–5
  const starRating = site.score / 2
  const getStarFill = (i: number) => Math.round(Math.max(0, Math.min(1, starRating - i)) * 5) / 5

  const badge = BADGE[rank]

  const ScoreCircle = ({ size = "lg" }: { size?: "sm" | "lg" }) => (
    <div
      className={`rounded-full bg-slate-900 border-2 border-amber-400 flex flex-col items-center justify-center shrink-0 ${
        size === "lg" ? "w-16 h-16" : "w-12 h-12"
      }`}
    >
      <span className={`font-black text-white leading-none ${size === "lg" ? "text-2xl" : "text-lg"}`}>
        {site.score.toFixed(1)}
      </span>
      <span className={`font-semibold text-amber-400 uppercase tracking-wider ${size === "lg" ? "text-[8px]" : "text-[7px]"}`}>
        Rating
      </span>
    </div>
  )

  const Stars = ({ starSize = 14 }: { starSize?: number }) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => {
        const fill = getStarFill(i)
        return (
          <span
            key={i}
            className="relative inline-block shrink-0 text-amber-400"
            style={{ width: starSize, height: starSize }}
          >
            <Star
              className="absolute inset-0 fill-none stroke-amber-400"
              style={{ width: starSize, height: starSize, strokeWidth: 1.5 }}
            />
            <Star
              className="absolute inset-0 fill-amber-400 stroke-0"
              style={{
                width: starSize,
                height: starSize,
                clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)`,
              }}
            />
          </span>
        )
      })}
    </div>
  )

  const TermsRow = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      ref={termsRef}
      className={`border-t border-slate-200 bg-slate-50 ${mobile ? "px-3 py-2" : "px-4 py-2"}`}
    >
      <div className="flex items-start justify-between gap-2">
        <p
          className={`text-slate-500 leading-snug flex-1 ${mobile ? "text-[9px]" : "text-[10px]"} ${
            !isTermsExpanded ? "line-clamp-1" : ""
          }`}
        >
          <span className="font-bold text-slate-600 uppercase tracking-wider mr-1">T&Cs:</span>
          {termsText}
        </p>
        {termsText.length > 80 && (
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsTermsExpanded(!isTermsExpanded) }}
            className="shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
          >
            {isTermsExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div className="w-full">
      {/* ——— Desktop ——— */}
      <div className="hidden lg:flex flex-col rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white hover:shadow-xl transition-shadow duration-200">
        <div className="flex items-stretch min-h-[100px]">
          {/* Rank */}
          <div className="w-16 shrink-0 bg-slate-900 flex flex-col items-center justify-center gap-1 py-4">
            <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400">Rank</span>
            <span className="text-4xl font-black text-white leading-none">{rank}</span>
            {badge && (
              <span className={`mt-1 text-[7px] font-bold uppercase px-1.5 py-0.5 rounded whitespace-nowrap ${badge.color}`}>
                {badge.label}
              </span>
            )}
          </div>

          {/* Logo */}
          <div className="w-[200px] shrink-0 flex items-center justify-center bg-slate-50 border-r border-slate-200 px-4 py-3">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              className="max-h-[60px] max-w-full object-contain"
            />
          </div>

          {/* Offer */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 border-r border-slate-100">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Welcome Offer</p>
            <p className="text-xl font-extrabold text-slate-900 text-center leading-tight">{site.bonus}</p>
            <p className="text-sm font-semibold text-emerald-700 mt-0.5">{welcomeOffer}</p>
          </div>

          {/* Features */}
          <div className="w-[200px] shrink-0 flex flex-col justify-center gap-1 px-4 py-4 border-r border-slate-100">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-0.5">Features</p>
            {site.features.slice(0, 3).map((f) => (
              <span key={f} className="flex items-center gap-1.5 text-xs text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                {f}
              </span>
            ))}
          </div>

          {/* Score + CTA */}
          <div className="w-[160px] shrink-0 flex flex-col items-center justify-center gap-2 px-4 py-4">
            <ScoreCircle />
            <Stars />
            <span className="text-[9px] text-slate-400">{formatVotes(site.reviews)} reviews</span>
            <Link
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-1 flex items-center justify-center gap-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-2.5 transition-colors"
            >
              Claim Offer
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
        <TermsRow />
      </div>

      {/* ——— Tablet ——— */}
      <div className="hidden md:flex lg:hidden flex-col rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white hover:shadow-lg transition-shadow">
        <div className="flex items-stretch min-h-[90px]">
          {/* Rank */}
          <div className="w-12 shrink-0 bg-slate-900 flex flex-col items-center justify-center py-3">
            <span className="text-[8px] text-slate-400 uppercase">Rank</span>
            <span className="text-2xl font-black text-white">{rank}</span>
          </div>

          {/* Logo */}
          <div className="w-[150px] shrink-0 flex items-center justify-center bg-slate-50 border-r border-slate-200 px-3 py-3">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              className="max-h-[50px] max-w-full object-contain"
            />
          </div>

          {/* Offer */}
          <div className="flex-1 flex flex-col justify-center px-4 py-3 border-r border-slate-100">
            {badge && (
              <span className={`self-start text-[8px] font-bold uppercase px-1.5 py-0.5 rounded mb-1 ${badge.color}`}>
                {badge.label}
              </span>
            )}
            <p className="text-sm font-extrabold text-slate-900 leading-tight">{site.bonus}</p>
            <p className="text-xs font-semibold text-emerald-700">{welcomeOffer}</p>
          </div>

          {/* Score + CTA */}
          <div className="w-[130px] shrink-0 flex flex-col items-center justify-center gap-1.5 px-3 py-3">
            <ScoreCircle size="sm" />
            <Stars starSize={12} />
            <Link
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2 transition-colors"
            >
              Claim
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
        <TermsRow />
      </div>

      {/* ——— Mobile ——— */}
      <div className="md:hidden rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white hover:shadow-lg transition-shadow">
        <div className="flex items-stretch">
          {/* Rank stripe */}
          <div className="w-10 shrink-0 bg-slate-900 flex flex-col items-center justify-center py-4">
            {badge && (
              <span
                className={`writing-mode-vertical text-[7px] font-bold uppercase mb-2 px-1 py-1 rounded ${badge.color}`}
                style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
              >
                {badge.label}
              </span>
            )}
            <span className="text-2xl font-black text-white leading-none">{rank}</span>
          </div>

          <div className="flex-1 min-w-0 flex flex-col">
            {/* Top row: logo + offer */}
            <div className="flex items-center gap-3 px-3 pt-3 pb-2">
              <div className="w-[90px] shrink-0 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-lg p-2 h-[50px]">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="max-h-[34px] max-w-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400">Welcome Offer</p>
                <p className="text-base font-extrabold text-slate-900 leading-tight">{site.bonus}</p>
                <p className="text-xs font-semibold text-emerald-700">{welcomeOffer}</p>
              </div>
            </div>

            {/* Bottom row: score + stars + CTA */}
            <div className="flex items-center justify-between gap-2 px-3 pb-3">
              <div className="flex items-center gap-2">
                <ScoreCircle size="sm" />
                <div className="flex flex-col gap-0.5">
                  <Stars starSize={13} />
                  <span className="text-[9px] text-slate-400">{formatVotes(site.reviews)} reviews</span>
                </div>
              </div>
              <Link
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-4 py-2.5 transition-colors"
              >
                Claim
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
        <TermsRow mobile />
      </div>
    </div>
  )
}
