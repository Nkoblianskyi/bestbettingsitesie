import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      <div className="bg-white/97 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl max-w-4xl mx-auto border border-slate-100">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-2 text-slate-900">
          Privacy Policy — bestukbettingsiteslist.com
        </h1>
        <p className="text-slate-400 text-sm mb-8 border-b border-slate-100 pb-4">
          Last reviewed:{" "}
          {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="space-y-7 text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Who we are</h2>
            <p className="text-sm leading-relaxed">
              bestukbettingsiteslist.com is an independent comparison website that reviews and ranks UK-licensed
              bookmakers. The site is operated by K.C. NTOMATA LIMITED, registered in Cyprus. We publish editorial
              comparisons only — we do not accept wagers or hold player funds.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Data we may process</h2>
            <ul className="space-y-1.5 text-sm pl-4 list-disc">
              <li>
                <strong>Technical logs:</strong> IP address, browser type, approximate location derived from IP,
                timestamps of requests.
              </li>
              <li>
                <strong>Usage signals:</strong> Pages visited, scroll depth, and navigation flows — only when analytics
                cookies are accepted.
              </li>
              <li>
                <strong>Communications:</strong> If you contact us by email, we retain the thread for as long as
                necessary to resolve your query.
              </li>
            </ul>
            <p className="text-xs text-slate-500 bg-slate-50 rounded-lg p-3 border border-slate-100 mt-3">
              We do not operate a sportsbook. We do not hold betting history, payment details, or personal account
              information related to gambling activity.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Legal bases (UK GDPR)</h2>
            <p className="text-sm leading-relaxed">
              We rely on legitimate interests to operate and secure the site, and on consent for non-essential cookies.
              You may withdraw consent at any time via your browser settings or the cookie banner on this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Sharing</h2>
            <p className="text-sm leading-relaxed">
              Data may be processed by our hosting provider, analytics vendor, and affiliate networks under data
              processing agreements. We do not sell personal data as a commercial product. We will comply with lawful
              requests from competent authorities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Retention</h2>
            <p className="text-sm leading-relaxed">
              Server logs rotate on a short cycle. Analytics aggregates are stored in anonymised form with no fixed
              retention cap. Email correspondence is deleted once fully resolved unless legal obligations require
              otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Security</h2>
            <p className="text-sm leading-relaxed">
              We use HTTPS in transit, access controls on all dashboards, and work with vendors that maintain
              industry-standard security practices. No online system is risk-free; please report any suspected
              vulnerability promptly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Your rights</h2>
            <p className="text-sm leading-relaxed">
              Under UK GDPR you may request access to, correction of, deletion of, restriction of, or portability of
              personal data we hold about you. You also have the right to object to processing based on legitimate
              interests.
            </p>
            <p className="text-sm mt-2">
              Supervisory authority: the{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noreferrer"
                className="text-amber-600 font-medium hover:underline"
              >
                Information Commissioner&apos;s Office (ICO)
              </a>{" "}
              — ico.org.uk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Children</h2>
            <p className="text-sm leading-relaxed">
              This site is intended solely for adults aged 18 and over. We do not knowingly collect data from minors.
              If you believe a child has submitted information to us, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">International transfers</h2>
            <p className="text-sm leading-relaxed">
              Some of our subprocessors operate outside the UK. Where this occurs we rely on UK Standard Contractual
              Clauses or equivalent approved transfer mechanisms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Changes</h2>
            <p className="text-sm leading-relaxed">
              Updates will appear here with a revised date. Continued use of the site after a material change
              constitutes acceptance unless we are required by law to obtain fresh consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Contact</h2>
            <p className="text-sm leading-relaxed">
              Data-related queries:{" "}
              <a
                href="mailto:info@bestukbettingsiteslist.com"
                className="text-amber-600 font-medium hover:underline"
              >
                info@bestukbettingsiteslist.com
              </a>
              . For cookie-specific questions, see our{" "}
              <Link href="/cookie-policy" className="text-amber-600 font-medium hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
