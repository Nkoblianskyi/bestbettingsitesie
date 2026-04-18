"use client"

import { useState } from "react"
import { Modal } from "./modal"
import { CookieBanner } from "./cookie-banner"
import { InfoSections } from "./info-sections"
import { AdvertiserDisclosureModal } from "./advertiser-disclosure-modal"
import { TermsModal } from "./terms-modal"
import { bettingSites } from "../data/mock-data"
import { HeroSection } from "./hero-section"
import { SitesList } from "./sites-list"

export default function IrishPage() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      {/* Full-width navy hero */}
      <HeroSection
        onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
        onTermsModalOpen={() => setIsTermsModalOpen(true)}
      />

      {/* Light content area */}
      <div className="bg-background">
        <div className="container mx-auto px-3 sm:px-4 max-w-5xl xl:max-w-6xl py-6 sm:py-8">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-5 w-1 rounded-full bg-[hsl(var(--gold))]" aria-hidden />
            <h2 className="font-display text-base sm:text-lg font-bold text-foreground">
              Top 6 UK Betting Sites — April 2025
            </h2>
          </div>

          <SitesList />
          <InfoSections />
        </div>
      </div>

      <Modal bettingSites={bettingSites} casinoSites={[]} />
      <CookieBanner />
      <AdvertiserDisclosureModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
