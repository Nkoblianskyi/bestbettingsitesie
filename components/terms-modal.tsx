"use client"

import { X, ShieldAlert } from "lucide-react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-amber-950/15 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0">
          <div className="w-1.5 bg-gradient-to-b from-amber-400 to-orange-600" aria-hidden />
          <div className="flex-1 bg-gradient-to-br from-amber-50/90 to-orange-50/30 px-4 pt-5 pb-4 sm:px-6 relative">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-amber-200/80 text-slate-700 hover:bg-amber-50 transition-colors shadow-sm"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-3 pr-12">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-500/35">
                <ShieldAlert className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <h2 id="terms-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Site rules &amp; 18+
                </h2>
                <p className="text-xs text-amber-800 font-semibold mt-0.5 uppercase tracking-wider">Terms of use</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5 space-y-4 text-slate-700 text-sm leading-relaxed">
          <p>
            Using <strong>bestbettingsitesie.com</strong> means you accept these rules. They apply on phone, tablet,
            and desktop.
          </p>
          <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-4">
            <p className="font-bold text-slate-900 mb-1">Age</p>
            <p>You must be 18 or older. This site discusses gambling; minors should leave.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900 mb-1">Responsible play</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Set time and money limits before you bet</li>
              <li>Never chase losses</li>
              <li>Ask for help early — GambleAware, GamCare, GA</li>
            </ul>
          </div>
          <p>
            We can’t guarantee offers stay accurate; operators change terms anytime. External sites have their own
            policies—we’re not responsible for them.
          </p>
          <p className="text-xs text-slate-500">
            No warranty; don’t rely on this site as legal advice. See our full terms page for more.
          </p>
        </div>

        <div className="shrink-0 border-t border-amber-100 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-3 sm:px-6 sm:rounded-b-3xl">
          <p className="text-center text-xs sm:text-sm font-bold">18+ · Wagering &amp; T&amp;Cs apply · Play responsibly</p>
        </div>
      </div>
    </div>
  )
}
