import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      <div className="bg-white/97 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto border border-slate-100">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 text-center">
          About bestukbettingsiteslist.com
        </h1>
        <p className="text-slate-500 text-base mb-10 text-center max-w-xl mx-auto leading-relaxed">
          Straightforward, independently compiled rankings of UK-licensed bookmakers — built for punters who want
          clarity before opening a new account.
        </p>

        <div className="space-y-8 text-slate-700">
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-bold text-amber-900 mb-3">Impressum — Publisher</h2>
            <address className="not-italic text-slate-700 space-y-0.5 text-sm">
              <p className="font-semibold text-slate-900 text-base">K.C. NTOMATA LIMITED</p>
              <p>Stylianou Lena, 24 Christiana Court, Flat/Office 202</p>
              <p>Strovolos, Nicosia 2019, Cyprus</p>
            </address>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              This website is operated by K.C. NTOMATA LIMITED. We publish informational and comparative content about
              UK bookmakers licensed by the UK Gambling Commission. We do not accept bets, hold player funds, or act as
              a gambling operator in any capacity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Why this site exists</h2>
            <p className="leading-relaxed text-sm">
              The UK betting market is competitive and every brand leads with its biggest welcome offer. We built
              bestukbettingsiteslist.com to slow that noise down: one ranked table, consistent scoring across
              bookmakers, and plain-English notes so you can compare product quality — not just bonus headlines —
              before you click through.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Editorial standards</h2>
            <p className="leading-relaxed text-sm mb-4">
              Rankings are built on a multi-factor scoring model that covers odds competitiveness, live-betting depth,
              app quality, withdrawal speed, and promotional transparency. Affiliate revenue helps fund the editorial
              work but does not purchase rank positions — if a bookmaker&apos;s product quality declines, its score
              moves down.
            </p>
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-5">
              <ul className="space-y-2 text-sm">
                <li><strong className="text-slate-900">Licensing:</strong> Only UKGC-licensed operators are considered.</li>
                <li><strong className="text-slate-900">Responsible gambling:</strong> Deposit tools, session limits, and self-exclusion must be clearly accessible.</li>
                <li><strong className="text-slate-900">Product:</strong> Live betting, bet builders, streaming, and acca tools are evaluated.</li>
                <li><strong className="text-slate-900">Payments:</strong> Commonly available UK payment rails and realistic cash-out timelines.</li>
                <li><strong className="text-slate-900">Support:</strong> Responsive customer service when issues arise.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Our review process</h2>
            <p className="leading-relaxed text-sm">
              Our editors open real accounts, complete full KYC, make deposits via common UK payment methods, and time
              the withdrawal process. We also test bet builders, live-betting interfaces, and streaming access on both
              desktop and mobile. Offers and features are cross-referenced against regulator bulletins and user forums
              on a rolling basis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Commercial transparency</h2>
            <p className="leading-relaxed text-sm">
              Outbound links to bookmakers may include affiliate identifiers. This generates revenue that funds the
              site. Full disclosure is available via the &quot;Advertiser Disclosure&quot; button on the homepage. Our
              order of merit is determined by editorial scoring, not commercial arrangements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Responsible gambling commitment</h2>
            <p className="leading-relaxed text-sm">
              Gambling should be entertainment with a fixed, affordable ceiling. If you are chasing losses, gambling to
              relieve stress, or losing track of time and money spent, please contact one of the support organisations
              linked in our site footer. They are free, confidential, and available around the clock.
            </p>
          </section>

          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5 text-amber-950">
            <p className="font-semibold mb-1 text-sm">18+ only</p>
            <p className="text-sm leading-relaxed">
              bestukbettingsiteslist.com does not accept wagers. All gambling activity takes place on fully licensed
              third-party platforms subject to their own terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
