import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Home
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-100">
        <h1 className="text-3xl font-bold mb-2 text-slate-900">Cookie notice — bestbettingsitesie.com</h1>
        <p className="text-gray-500 mb-8 text-sm">
          Effective: {new Date().toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="prose prose-slate max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-slate-900">1. What is a cookie?</h2>
            <p>
              A cookie is a small text file placed on your device when you load a page. It can remember preferences,
              keep a session open, or help us understand aggregate traffic—never to run the site without transparency.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">2. How bestbettingsitesie uses them</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Strictly necessary:</strong> remembers your cookie choice bar and basic security tokens.
              </li>
              <li>
                <strong>Analytics (if enabled):</strong> anonymous counts of pages viewed so we know which sections need
                improvement.
              </li>
              <li>
                <strong>Functional:</strong> stores UI choices such as dismissed modals where we implement them.
              </li>
              <li>
                <strong>Referral / affiliate:</strong> when you tap out to a bookmaker, their network may set its own
                cookies—we do not control those.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">3. Session vs persistent</h2>
            <p>
              Session cookies vanish when you close the browser. Persistent cookies stay until they expire or you wipe
              them; we keep lifetimes as short as practical for each job.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. Third parties</h2>
            <p>
              Embedded odds tickers, partner widgets, or analytics scripts may issue cookies under their own policies.
              Please read those documents on the third-party domain if you want full detail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">5. Your controls</h2>
            <p>Every major browser lets you block, delete, or auto-clear cookies. You can also browse in private mode.</p>
            <p className="text-sm text-gray-600">
              Blocking all cookies may break parts of bestbettingsitesie (for example the consent banner may reappear
              every visit).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">6. Updates</h2>
            <p>
              We will revise this notice when our stack changes. The date at the top shows the latest refresh; material
              changes may also be echoed on the homepage for a short period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">7. Contact</h2>
            <p>
              For questions about this notice, contact us at{" "}
              <a href="mailto:info@bestbettingsitesie.com" className="text-emerald-600 font-medium hover:underline">
                info@bestbettingsitesie.com
              </a>
              . See also the{" "}
              <Link href="/privacy-policy" className="text-emerald-600 font-medium hover:underline">
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
