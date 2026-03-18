"use client"

import Image from "next/image"
import { Clock, ShieldCheck } from "lucide-react"
import { RATINGS_LAST_REVISED_ISO } from "@/data/hero-constants"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function formatRevisedDate(iso: string) {
  const d = new Date(iso + "T12:00:00")
  return d.toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function HeroLegalPill({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/20 px-3 py-1.5 backdrop-blur-sm ${className}`}
    >
      <Image src="/flag-ireland.svg" alt="" width={22} height={15} className="rounded-sm shadow-sm shrink-0" />
      <span className="font-semibold text-white/95 tracking-wide">Licensed for Ireland</span>
    </div>
  )
}

function HeroSecurityPill({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 ${
        compact ? "py-1 px-2.5" : ""
      }`}
    >
      <div
        className={`flex shrink-0 items-center justify-center rounded-lg bg-emerald-900/50 border border-emerald-700/50 ${
          compact ? "h-6 w-6" : "h-7 w-7"
        }`}
      >
        <ShieldCheck
          className={`text-emerald-200 ${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`}
          strokeWidth={2.5}
          aria-hidden
        />
      </div>
      <span className={`font-semibold text-white/95 ${compact ? "text-[10px] leading-tight" : "text-xs"}`}>
        {compact ? (
          <>
            Secure
            <br />
            listings
          </>
        ) : (
          "Secure & vetted listings"
        )}
      </span>
    </div>
  )
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const revisedLabel = formatRevisedDate(RATINGS_LAST_REVISED_ISO)

  const ModalTriggers = ({ compact, mobileCalm }: { compact?: boolean; mobileCalm?: boolean }) => (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 ${compact ? "mt-1" : "mt-2 md:mt-3"}`}
    >
      <button
        type="button"
        onClick={onAdvertiserModalOpen}
        className={
          mobileCalm
            ? "inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/35 backdrop-blur-sm px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-white shadow-sm"
            : "inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wide text-white/90 hover:bg-white/15 transition-colors"
        }
      >
        <span className="hidden sm:inline">ℹ</span>
        Advertiser disclosure
      </button>
      <button
        type="button"
        onClick={onTermsModalOpen}
        className={
          mobileCalm
            ? "inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/35 backdrop-blur-sm px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-white shadow-sm"
            : "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/8 px-3 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wide text-white/90 hover:bg-white/12 transition-colors"
        }
      >
        18+ site rules
      </button>
    </div>
  )

  return (
    <>
      {/* Desktop */}
      <div
        className="hidden lg:block relative overflow-hidden text-white mb-3 w-full min-h-[280px] lg:min-h-[300px] rounded-2xl border border-white/10"
        style={{ background: "rgba(0, 0, 0, 0.70)" }}
      >
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-6 xl:gap-10 px-6 xl:px-10 py-6 xl:py-8 items-center">
          <div className="text-left space-y-4">
            <div>
              <p className="text-emerald-200/80 text-xs font-bold uppercase tracking-[0.25em] mb-2">bestbettingsitesie</p>
              <h1 className="font-hero-display text-3xl xl:text-[2.35rem] 2xl:text-[2.6rem] font-extrabold leading-[1.1] tracking-tight">
                Irish bookmakers,
                <br />
                <span className="text-white">ranked for you</span>
              </h1>
              <p className="mt-3 text-xs text-white/55 font-medium">
                Ratings last revised: <time dateTime={RATINGS_LAST_REVISED_ISO}>{revisedLabel}</time>
              </p>
            </div>
            <ModalTriggers />
          </div>

          <div className="space-y-4 text-left border-l border-white/10 pl-6 xl:pl-8">
            <p className="text-sm xl:text-[0.95rem] text-white/88 leading-relaxed">
              We line up Ireland-facing operators so you can judge welcome value, app quality, and cash-out speed in one
              glance—without wading through ten homepages.
            </p>
            <p className="text-xs xl:text-sm text-white/65 leading-relaxed">
              Bonuses shift weekly; figures here are a snapshot. Always read the bookmaker’s own T&amp;Cs before you
              deposit. 18+ only.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <HeroLegalPill />
              <HeroSecurityPill />
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5">
                <Clock className="w-4 h-4 text-emerald-200/90 shrink-0" />
                <span className="text-xs font-semibold text-white/90">Fast withdrawals</span>
              </div>
            </div>
            <p className="text-[11px] text-white/45 pt-1">Play responsibly. Wagering and operator T&amp;Cs apply.</p>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div
        className="hidden md:block lg:hidden relative overflow-hidden text-white mb-2 w-full rounded-xl border border-white/10"
        style={{ background: "rgba(0, 0, 0, 0.70)" }}
      >
        <div className="px-5 py-4 text-center">
          <p className="text-emerald-200/80 text-[10px] font-bold uppercase tracking-widest mb-1">bestbettingsitesie</p>
          <h1 className="font-hero-display text-2xl md:text-3xl font-extrabold leading-tight">
            Irish bookmakers, <span className="text-white">ranked</span>
          </h1>
          <p className="text-[11px] text-white/50 mt-1.5 mb-3">
            Ratings revised <time dateTime={RATINGS_LAST_REVISED_ISO}>{revisedLabel}</time>
          </p>
          <p className="text-xs text-white/80 max-w-xl mx-auto leading-snug mb-3">
            Side-by-side picks for IE players. Check each brand’s live rules before you bet.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-3 items-center">
            <HeroLegalPill className="py-1" />
            <HeroSecurityPill compact />
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 border border-white/15">
              <Clock className="w-3.5 h-3.5 text-emerald-200/90" />
              <span className="text-[11px] font-semibold">Quick payouts</span>
            </div>
          </div>
          <ModalTriggers />
          <p className="text-[10px] text-white/40 mt-2">18+ · Responsible play</p>
        </div>
      </div>

      {/* Mobile — 50% чорний оверлей; блок без зайвої висоти між рядами */}
      <div
        className="md:hidden relative overflow-hidden text-white rounded-xl mb-2 w-full border border-white/10 shadow-md"
        style={{
          backgroundImage: "url(/bg-7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 rounded-xl bg-black/50" aria-hidden />
        <div className="relative z-10 px-3 py-2.5 flex flex-col gap-2">
          <div className="text-center space-y-0.5">
            <h1 className="font-hero-display text-lg font-extrabold leading-snug text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.5)]">
              Irish bookies, ranked
            </h1>
            <p className="text-[10px] font-medium text-white/90 leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
              Revised{" "}
              <time dateTime={RATINGS_LAST_REVISED_ISO}>{revisedLabel}</time>
            </p>
          </div>
          <div className="flex justify-center gap-1.5 flex-wrap">
            <div className="inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 px-2 py-0.5">
              <Image src="/flag-ireland.svg" alt="" width={16} height={11} className="rounded-sm" />
              <span className="text-[9px] font-semibold uppercase tracking-wide text-white [text-shadow:0_1px_2px_black]">
                IE legal
              </span>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 px-2 py-0.5">
              <ShieldCheck className="w-3 h-3 text-white shrink-0 drop-shadow-md" strokeWidth={2.25} aria-hidden />
              <span className="text-[9px] font-semibold uppercase tracking-wide text-white [text-shadow:0_1px_2px_black]">
                Safe picks
              </span>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 px-2 py-0.5">
              <Clock className="w-3 h-3 text-white shrink-0 drop-shadow-md" strokeWidth={2.25} aria-hidden />
              <span className="text-[9px] font-semibold uppercase tracking-wide text-white [text-shadow:0_1px_2px_black]">
                Fast cash-out
              </span>
            </div>
          </div>
          <ModalTriggers compact mobileCalm />
        </div>
      </div>
    </>
  )
}
