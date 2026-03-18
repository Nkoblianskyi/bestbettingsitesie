"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-lg border-t border-slate-600 bg-slate-900/98 backdrop-blur-md text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl">
        <p className="text-sm text-gray-300 flex-1 text-center md:text-left">
          bestbettingsitesie uses essential cookies to run the page and, if you allow, analytics to improve layout.
          Declining limits non-essential scripts only.
          <Link href="/cookie-policy" className="text-emerald-300 hover:text-emerald-200 underline ml-1 font-medium">
            Cookie notice
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <Button
            onClick={handleDecline}
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            Essential only
          </Button>
          <Button onClick={handleAccept} className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold">
            Accept all
          </Button>
        </div>
      </div>
    </div>
  )
}
