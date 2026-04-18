"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200)
      return () => clearTimeout(timer)
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
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-700/60 bg-slate-950/98 backdrop-blur-md text-white shadow-2xl"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container mx-auto max-w-5xl px-4 py-4 xl:max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-white mb-0.5">Cookie Notice — bestukbettingsiteslist.com</p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              We use essential cookies to keep the site running, and optional analytics cookies to improve page layout
              and user experience. Declining keeps only the strictly necessary cookies active.{" "}
              <Link
                href="/cookie-policy"
                className="text-amber-400 hover:text-amber-300 underline font-medium transition-colors"
              >
                Read our Cookie Policy
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDecline}
              className="rounded-lg border border-slate-600 bg-transparent px-4 py-2 text-xs font-semibold text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
            >
              Essential only
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-amber-500 hover:bg-amber-400 px-4 py-2 text-xs font-bold text-slate-900 transition-colors"
            >
              Accept all
            </button>
            <button
              onClick={handleDecline}
              aria-label="Close"
              className="rounded-lg border border-slate-700 p-2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
