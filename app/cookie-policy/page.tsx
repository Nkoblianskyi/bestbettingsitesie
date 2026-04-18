import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
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
          Cookie Policy — bestukbettingsiteslist.com
        </h1>
        <p className="text-slate-400 text-sm mb-8 border-b border-slate-100 pb-4">
          Effective:{" "}
          {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="space-y-7 text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. What is a cookie?</h2>
            <p className="leading-relaxed text-sm">
              A cookie is a small text file placed on your device when you visit a webpage. Cookies allow websites to
              remember your preferences, keep sessions active, and help us understand how visitors interact with our
              content in the aggregate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. How bestukbettingsiteslist.com uses cookies</h2>
            <ul className="space-y-2 text-sm pl-4 list-disc">
              <li>
                <strong>Strictly necessary:</strong> Stores your cookie preference choice and basic security tokens
                required to serve the page correctly. These cannot be disabled without breaking core functionality.
              </li>
              <li>
                <strong>Analytics (if accepted):</strong> Anonymous aggregated counts of pages viewed, scroll depth, and
                navigation paths — used to improve the layout and usefulness of our rankings.
              </li>
              <li>
                <strong>Functional:</strong> Remembers UI state such as dismissed modal windows so they do not reappear
                on subsequent page loads during the same session.
              </li>
              <li>
                <strong>Affiliate / referral:</strong> When you click through to a bookmaker, their affiliate network
                may set cookies under their own policy. We do not control those third-party cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Session vs persistent cookies</h2>
            <p className="text-sm leading-relaxed">
              Session cookies expire when you close your browser tab. Persistent cookies remain on your device until
              they reach their expiry date or you clear them manually. We keep persistent cookie lifetimes as short as
              practically necessary.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Third-party cookies</h2>
            <p className="text-sm leading-relaxed">
              Embedded widgets, partner scripts, or analytics providers may set cookies under their own domains and
              policies. We encourage you to review those policies directly if full transparency is important to you.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Your controls</h2>
            <p className="text-sm leading-relaxed mb-2">
              You can manage cookies at any time through the consent banner at the bottom of the page or directly via
              your browser settings. All major browsers allow you to block, delete, or auto-expire cookies.
            </p>
            <p className="text-xs text-slate-500 bg-slate-50 rounded-lg p-3 border border-slate-100">
              Note: Blocking all cookies may prevent some features from working correctly — for example, the consent
              banner may reappear on every visit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. Policy updates</h2>
            <p className="text-sm leading-relaxed">
              We will revise this notice whenever our technical stack changes materially. The effective date at the top
              reflects the most recent revision. Significant changes may be highlighted on our homepage for a short
              period.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">7. Contact</h2>
            <p className="text-sm leading-relaxed">
              For questions about this notice, please email us at{" "}
              <a
                href="mailto:info@bestukbettingsiteslist.com"
                className="text-amber-600 font-medium hover:underline"
              >
                info@bestukbettingsiteslist.com
              </a>
              . For broader data questions, see our{" "}
              <Link href="/privacy-policy" className="text-amber-600 font-medium hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
