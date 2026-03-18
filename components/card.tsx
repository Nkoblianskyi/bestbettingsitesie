"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const termsContainerRef = useRef<HTMLDivElement>(null)

  const isEvenRank = rank % 2 === 0
  const cardBgColor = isEvenRank ? "bg-gray-50" : "bg-white"
  const cardTint = isEvenRank
    ? "from-slate-50 via-white to-slate-100/80"
    : "from-white via-slate-50 to-slate-100/60"

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const limit = isMobile ? 215 : 350
    setShowReadMore(site.terms.length > limit)
  }, [site.terms, site.name, isMobile])

  const formatVotes = (votes: number) => votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const filledStars = Math.floor(site.rating)
  const hasHalfStar = site.rating % 1 !== 0

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  const shouldShowSpecialBadge = rank === 1 || rank === 2 || rank === 4 || rank === 7
  const getSpecialBadgeText = () => {
    if (rank === 1) return "TOP BRAND"
    if (rank === 2) return "EXCLUSIVE OFFER"
    if (rank === 4) return "TRENDING"
    if (rank === 7) return "TOP GROWTH"
    return ""
  }
  const getSpecialBadgeTextShort = () => {
    if (rank === 1) return "TOP BRAND"
    if (rank === 2) return "EXCLUSIVE"
    if (rank === 4) return "TRENDING"
    if (rank === 7) return "GROWTH"
    return ""
  }

  const TermsBlock = ({ className = "", mobile = false }: { className?: string; mobile?: boolean }) => (
    <div
      className={`border-t border-slate-200 bg-slate-100/95 px-2 py-1.5 sm:px-2.5 sm:py-2 ${className}`}
      ref={termsContainerRef}
    >
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-[7px] sm:text-[8px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Terms</p>
        <div
          className={`text-slate-600 leading-tight ${mobile ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-xs"} ${
            !isTermsExpanded ? "line-clamp-2" : ""
          }`}
        >
          {site.terms}
        </div>
        {showReadMore && (
          <button
            type="button"
            onClick={handleTermsClick}
            className="text-emerald-800 hover:text-emerald-950 underline mt-0.5 text-[10px] sm:text-xs font-semibold"
          >
            {isTermsExpanded ? "Less" : "Full terms"}
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div className="block">
      {/* ——— Desktop ——— */}
      <div className="hidden lg:block rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
        <div className={`flex bg-gradient-to-br ${cardTint}`}>
          <div className="w-[4.5rem] xl:w-[5.25rem] shrink-0 bg-emerald-900 flex flex-col items-center justify-center text-white relative py-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Rank</span>
            <span className="text-3xl xl:text-4xl font-black leading-none mt-0.5">{rank}</span>
            {shouldShowSpecialBadge && (
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[7px] font-bold uppercase tracking-tighter bg-white/20 px-1.5 py-0.5 rounded-md whitespace-nowrap max-w-[4rem] text-center leading-tight">
                {getSpecialBadgeTextShort()}
              </span>
            )}
          </div>

          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-0 flex items-stretch py-3 pl-4 pr-5 gap-4 xl:gap-5 group/cell"
          >
            <div className="flex-[0_0_26%] xl:flex-[0_0_28%] flex items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-inner px-3 py-2 group-hover/cell:border-slate-300 transition-colors">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="max-h-[5.5rem] xl:max-h-[6rem] w-full object-contain"
              />
            </div>

            <div className="flex-1 min-w-0 flex flex-col justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-2.5 text-center group-hover/cell:border-slate-400 transition-colors">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600 mb-1">Offer</p>
              <p className="text-base xl:text-lg font-extrabold text-slate-900 leading-tight">{site.bonus}</p>
              <p className="text-base xl:text-lg font-extrabold text-slate-800 leading-tight">{site.welcomeOffer}</p>
            </div>

            <div className="flex-[0_0_18%] flex flex-col items-center justify-center gap-1">
              <div
                className="w-[4.25rem] h-[4.25rem] xl:w-[4.75rem] xl:h-[4.75rem] rounded-full bg-emerald-800 text-white flex flex-col items-center justify-center ring-2 ring-slate-200"
                aria-hidden
              >
                <span className="text-2xl xl:text-3xl font-black leading-none">{site.rating.toFixed(1)}</span>
                <span className="text-[8px] font-semibold uppercase text-emerald-200">score</span>
              </div>
              <div className="flex gap-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${
                      i < Math.floor(site.rating) ? "fill-amber-400 text-amber-400" : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[9px] text-slate-500 font-medium">{formatVotes(site.votes)} votes</span>
            </div>

            <div className="flex-[0_0_14%] flex flex-col items-center justify-center gap-2 min-w-[7rem]">
              <span className="w-full rounded-lg bg-emerald-700 group-hover/cell:bg-emerald-800 text-white font-bold text-xs xl:text-sm py-3.5 xl:py-4 text-center transition-colors">
                GET BONUS
              </span>
              <span className="text-[10px] text-slate-600 font-medium group-hover/cell:underline">{site.name} →</span>
            </div>
          </Link>
        </div>
        <TermsBlock />
      </div>

      {/* ——— Tablet ——— */}
      <div
        className={`hidden md:block lg:hidden rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-gradient-to-br ${cardTint} hover:shadow-lg transition-shadow`}
      >
        <div className="flex items-stretch min-h-[148px]">
          <div className="w-14 shrink-0 bg-emerald-900 flex flex-col items-center justify-center text-white py-2">
            <span className="text-[8px] opacity-80 uppercase">#</span>
            <span className="text-2xl font-black">{rank}</span>
          </div>
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-stretch min-w-0 group/tab"
          >
            <div className="flex-[0_0_32%] flex items-center justify-center p-3 border-r border-slate-200/60 bg-white/50">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="max-h-[4.5rem] w-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center px-3 py-2 gap-2">
              {shouldShowSpecialBadge && (
                <span className="self-start text-[9px] font-bold uppercase bg-slate-700 text-white px-2 py-0.5 rounded-full">
                  {getSpecialBadgeTextShort()}
                </span>
              )}
              <div className="rounded-xl bg-slate-50 border border-slate-200 px-2 py-1.5 text-center">
                <p className="text-[9px] uppercase text-slate-600 font-bold tracking-wide">Bonus</p>
                <p className="text-sm font-extrabold text-slate-900 leading-tight">{site.bonus}</p>
                <p className="text-sm font-extrabold text-slate-800">{site.welcomeOffer}</p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 rounded-full bg-emerald-800 text-white flex flex-col items-center justify-center shrink-0">
                    <span className="text-sm font-black leading-none">{site.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < filledStars || (i === filledStars && hasHalfStar)
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[9px] text-slate-500">{formatVotes(site.votes)}</span>
                  </div>
                </div>
                <span className="rounded-lg shrink-0 px-5 py-3 text-xs font-bold bg-emerald-700 text-white group-hover/tab:bg-emerald-800 transition-colors">
                  BONUS
                </span>
              </div>
            </div>
          </Link>
        </div>
        <TermsBlock />
      </div>

      {/* ——— Mobile (оригінальний двоколонковий макет) ——— */}
      <div
        className={`md:hidden ${cardBgColor} rounded-md border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="absolute top-0 left-0 bg-emerald-800 text-white px-2 py-0.5 rounded-tl-md rounded-bl-md text-[10px] font-bold z-20">
            #{rank}
          </div>

          {shouldShowSpecialBadge && (
            <div className="absolute top-0 left-8 sm:left-10 bg-blue-600 text-white px-2 py-0.5 rounded-tr-md rounded-br-md text-[10px] font-bold z-20 max-w-[calc(100%-4rem)] truncate">
              {getSpecialBadgeText()}
            </div>
          )}

          <div className="grid grid-cols-[1fr_1fr] h-[175px]">
            <div className="bg-[rgb(242,242,242)] flex flex-col justify-between items-center py-2 px-2">
              <div className="flex-1 flex items-center justify-center min-h-0">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="h-16 w-auto max-w-full object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-1 w-full shrink-0">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < filledStars || (i === filledStars && hasHalfStar)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-[12px] text-black text-center leading-tight">
                    Rate it
                    <br />({formatVotes(site.votes)})
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="text-3xl font-bold leading-none text-slate-800"
                  >
                    {site.rating.toFixed(1)}
                  </div>
                  <div className="text-[10px] text-black font-bold mt-1">Our Score</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between py-2 px-2 min-w-0">
              <div className="text-center flex-1 flex flex-col justify-center min-h-0">
                <div className="text-[10px] text-black uppercase font-normal mb-1">WELCOME BONUS</div>
                <div className="text-lg font-bold text-gray-900 leading-tight mb-1 break-words">{site.bonus}</div>
                <div className="text-lg font-bold text-gray-900 leading-tight break-words">{site.welcomeOffer}</div>
              </div>
              <div className="flex justify-center mt-2 shrink-0">
                <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-3 py-1.5 rounded-md text-sm transition-colors w-full">
                  GET BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>

        <TermsBlock mobile />
      </div>
    </div>
  )
}
