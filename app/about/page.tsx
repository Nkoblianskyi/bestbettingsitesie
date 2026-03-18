import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Home
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 lg:p-12 shadow-xl max-w-4xl mx-auto border border-gray-100">
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 text-center">About bestbettingsitesie</h1>
        <p className="text-lg text-slate-600 mb-10 text-center max-w-2xl mx-auto">
          Independent listings for Irish punters who want clarity before they open a wallet with a new bookmaker.
        </p>

        <div className="space-y-8 text-gray-700">
          <section className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-cyan-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900 mb-3">Impressum — publisher</h2>
            <address className="not-italic text-slate-700 space-y-1 text-sm">
              <p className="font-semibold text-slate-900 text-base">Sigmastart04 GmbH</p>
              <p>Zehmeplatz 14</p>
              <p>15230 Frankfurt</p>
              <p>Deutschland</p>
            </address>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              This website is operated by Sigmastart04 GmbH. We publish informational and comparative content about
              online bookmakers; we do not accept bets or hold player funds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Why we exist</h2>
            <p className="leading-relaxed">
              The market is crowded and every brand shouts the biggest free bet. bestbettingsitesie exists to slow that
              down: one table, consistent scoring, and plain-language notes so you can compare apples to apples before
              you click through.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Editorial rules</h2>
            <p className="leading-relaxed mb-4">
              Rankings blend odds competitiveness, product breadth, payout experience, and how fairly promos are
              presented. Commercial partnerships help fund the site but do not let a brand “buy” the #1 slot—if
              payouts slip or terms turn punitive, the score moves.
            </p>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
              <ul className="space-y-2 text-sm">
                <li>
                  <strong className="text-slate-900">Licensing:</strong> only operators appropriate for IE customers.
                </li>
                <li>
                  <strong className="text-slate-900">Safety:</strong> deposit tools, reality checks, self-exclusion
                  visibility.
                </li>
                <li>
                  <strong className="text-slate-900">Product:</strong> live betting, builders, streaming where relevant.
                </li>
                <li>
                  <strong className="text-slate-900">Payments:</strong> common Irish rails, speed of cash-out.
                </li>
                <li>
                  <strong className="text-slate-900">Support:</strong> reachable help when something breaks.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">How we work day to day</h2>
            <p className="leading-relaxed">
              Editors open real accounts where possible, walk through KYC, and time withdrawals. We also monitor
              forums and regulator bulletins. When a book changes a headline offer overnight, we aim to reflect that
              within the same week.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Money &amp; transparency</h2>
            <p className="leading-relaxed">
              Outbound links may carry affiliate tags. That does not change our order of merit. Full commercial
              disclosure lives in the “Advertiser Disclosure” link on the homepage hero.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Responsible gambling</h2>
            <p className="leading-relaxed mb-4">
              Betting should be entertainment with a fixed ceiling. If you are staking to escape stress or chasing
              losses, step away and use the organisations linked in our site footer—they are free and confidential.
            </p>
          </section>

          <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6 text-amber-950">
            <p className="font-semibold mb-2">18+ only</p>
            <p className="text-sm">
              bestbettingsitesie does not accept wagers. All play happens on licensed third-party sites under their
              terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
