import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Home
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-100">
        <h1 className="text-3xl font-bold mb-2 text-slate-900">Website terms — bestbettingsitesie.com</h1>
        <p className="text-gray-500 mb-8 text-sm">
          Updated {new Date().toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="prose prose-slate max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-slate-900">1. Agreement</h2>
            <p>
              Accessing bestbettingsitesie means you accept this document. If you disagree, please stop using the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">2. Nature of the service</h2>
            <p>
              We publish information and opinions about third-party betting brands. We are not a bookmaker and never
              hold customer stakes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">3. Age</h2>
            <p>You must be 18 or older. Content is aimed at adults in Ireland who can legally view gambling ads.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. Accuracy</h2>
            <p>
              Offers, odds, and rules change without notice. Screens and copy may lag reality. Confirm everything on the
              operator’s official site before depositing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">5. External sites</h2>
            <p>
              Links leave our environment. Each destination has its own terms, privacy policy, and licence. We are not
              responsible for their conduct.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">6. Responsible gambling</h2>
            <p>
              Use limits, take breaks, and never borrow to bet. Help: GambleAware, GamCare, Gambling Therapy—see footer
              badges.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">7. Intellectual property</h2>
            <p>
              Layout, text, and graphics created by bestbettingsitesie remain our copyright. Logos belong to their
              respective owners and are used nominatively.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">8. Liability cap</h2>
            <p>
              To the fullest extent permitted by Irish law, we exclude liability for loss arising from reliance on this
              site. Some jurisdictions do not allow certain exclusions—those limits apply to you only as required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">9. Privacy</h2>
            <p>
              See our{" "}
              <Link href="/privacy-policy" className="text-emerald-600 font-medium hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">10. Changes</h2>
            <p>We may amend these terms anytime. Continued use after posting constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">11. Law</h2>
            <p>Irish law governs these terms; courts in Ireland have non-exclusive jurisdiction.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
