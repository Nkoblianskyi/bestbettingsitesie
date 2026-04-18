"use client"

import { ShieldCheck, Award, Clock } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getRatingsRevisedDate() {
  const d = new Date()
  return {
    iso: d.toISOString().slice(0, 10),
    label: d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  }
}

const GOLD = "#C9A84C"
const NAVY = "#0D1B2A"
const NAVY_CARD = "#131E2B"
const IVORY = "#F5F0E8"

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getRatingsRevisedDate()

  const pillClass =
    "inline-flex items-center gap-1.5 border px-3 py-1 text-[10px] font-sans font-semibold uppercase tracking-[0.18em] cursor-pointer transition-colors"

  return (
    <div
      className="w-full mb-4 border"
      style={{
        backgroundColor: NAVY_CARD,
        borderColor: "rgba(201,168,76,0.3)",
      }}
    >
      {/* Gold top rule */}
      <div className="h-[2px]" style={{ background: GOLD }} />

      <div className="px-5 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1px_1fr] gap-0 items-center">
          {/* Left col */}
          <div className="pr-10 space-y-4">
            <p
              className="text-[10px] font-sans font-bold uppercase tracking-[0.35em]"
              style={{ color: GOLD }}
            >
              elitebettingsiteslistuk.com
            </p>

            <h1
              className="font-serif font-bold leading-[1.08] tracking-tight text-[2.1rem] xl:text-[2.5rem]"
              style={{ color: IVORY }}
            >
              Britain&apos;s Finest
              <br />
              <span style={{ color: GOLD }}>Betting Sites</span>
              <br />
              Ranked &amp; Rated
            </h1>

            <p className="text-[11px] font-sans" style={{ color: "rgba(245,240,232,0.5)" }}>
              Last revised:{" "}
              <time dateTime={iso} style={{ color: "rgba(245,240,232,0.7)" }}>
                {label}
              </time>
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                type="button"
                onClick={onAdvertiserModalOpen}
                className={pillClass}
                style={{
                  borderColor: "rgba(201,168,76,0.4)",
                  color: "rgba(245,240,232,0.7)",
                }}
              >
                Advertiser Disclosure
              </button>
              <button
                type="button"
                onClick={onTermsModalOpen}
                className={pillClass}
                style={{
                  borderColor: "rgba(201,168,76,0.4)",
                  color: "rgba(245,240,232,0.7)",
                }}
              >
                18+ Rules
              </button>
            </div>
          </div>

          {/* Vertical gold divider */}
          <div className="self-stretch" style={{ width: "1px", background: "rgba(201,168,76,0.25)" }} />

          {/* Right col */}
          <div className="pl-10 space-y-5">
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "rgba(245,240,232,0.8)" }}
            >
              We compare the United Kingdom&apos;s premier licensed bookmakers so you can evaluate welcome value,
              platform quality, and withdrawal speed — all on a single page, without the noise.
            </p>
            <p
              className="font-sans text-xs leading-relaxed"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              Bonus figures are a current snapshot. Always consult the operator&apos;s own terms before depositing.
              18+ only. Gamble responsibly.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div
                className="inline-flex items-center gap-2 border px-3 py-2"
                style={{ borderColor: "rgba(201,168,76,0.35)", backgroundColor: "rgba(201,168,76,0.05)" }}
              >
                <img src="/flag-uk.svg" alt="" width={22} height={14} className="shrink-0" aria-hidden />
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                  UK Licensed
                </span>
              </div>
              <div
                className="inline-flex items-center gap-2 border px-3 py-2"
                style={{ borderColor: "rgba(201,168,76,0.35)", backgroundColor: "rgba(201,168,76,0.05)" }}
              >
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                  Vetted Operators
                </span>
              </div>
              <div
                className="inline-flex items-center gap-2 border px-3 py-2"
                style={{ borderColor: "rgba(201,168,76,0.35)", backgroundColor: "rgba(201,168,76,0.05)" }}
              >
                <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                  Fast Withdrawals
                </span>
              </div>
            </div>

            <p className="text-[10px] font-sans" style={{ color: "rgba(245,240,232,0.3)" }}>
              Wagering and T&amp;Cs apply on all listed operators.
            </p>
          </div>
        </div>

        {/* Tablet */}
        <div className="hidden md:block lg:hidden text-center space-y-4">
          <p className="text-[9px] font-sans font-bold uppercase tracking-[0.35em]" style={{ color: GOLD }}>
            elitebettingsiteslistuk.com
          </p>
          <h1 className="font-serif font-bold text-2xl md:text-3xl leading-tight" style={{ color: IVORY }}>
            Britain&apos;s Finest Betting Sites{" "}
            <span style={{ color: GOLD }}>Ranked</span>
          </h1>
          <p className="text-xs font-sans max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
            Premier UK bookmakers compared side by side. Verify terms on each operator before you bet.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              className={pillClass}
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "rgba(245,240,232,0.7)" }}
            >
              Advertiser Disclosure
            </button>
            <button
              type="button"
              onClick={onTermsModalOpen}
              className={pillClass}
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "rgba(245,240,232,0.7)" }}
            >
              18+ Rules
            </button>
          </div>
          <p className="text-[10px] font-sans" style={{ color: "rgba(245,240,232,0.35)" }}>
            18+ · Responsible Gambling
          </p>
        </div>

        {/* Mobile */}
        <div className="md:hidden text-center space-y-3">
          <p className="text-[8px] font-sans font-bold uppercase tracking-[0.3em]" style={{ color: GOLD }}>
            elitebettingsiteslistuk.com
          </p>
          <h1 className="font-serif font-bold text-xl leading-tight" style={{ color: IVORY }}>
            Britain&apos;s Finest Betting Sites
          </h1>
          <p className="text-[11px] font-sans leading-snug" style={{ color: "rgba(245,240,232,0.65)" }}>
            Premier UK operators ranked by our editorial team.
          </p>
          <div className="flex justify-center gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              className="border px-2.5 py-1 text-[8px] font-sans font-semibold uppercase tracking-wider"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "rgba(245,240,232,0.6)" }}
            >
              Disclosure
            </button>
            <button
              type="button"
              onClick={onTermsModalOpen}
              className="border px-2.5 py-1 text-[8px] font-sans font-semibold uppercase tracking-wider"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "rgba(245,240,232,0.6)" }}
            >
              18+ Rules
            </button>
          </div>
        </div>
      </div>

      {/* Gold bottom rule */}
      <div className="h-px" style={{ background: "rgba(201,168,76,0.3)" }} />
    </div>
  )
}
