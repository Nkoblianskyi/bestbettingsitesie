import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Home
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-100">
        <h1 className="text-3xl font-bold mb-2 text-slate-900">Privacy Policy — bestbettingsitesie</h1>
        <p className="text-gray-500 mb-8 text-sm">
          Last reviewed: {new Date().toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="prose prose-slate max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-slate-900">Who we are</h2>
            <p>
              bestbettingsitesie.com publishes editorial comparisons of online bookmakers aimed at users in Ireland.
              This policy explains what personal data might touch our systems and what we do with it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Data we may process</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Technical logs: IP address, browser type, rough location, timestamps.</li>
              <li>Usage signals: pages opened, scroll depth approximations if analytics is on.</li>
              <li>Communications: only if you email us—then we keep the thread as long as needed to reply.</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              We do not run a sportsbook; we do not hold your betting history or bank details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Legal bases (GDPR-style)</h2>
            <p>
              Where EU/UK law applies, we rely on legitimate interest to operate and secure the site, and on consent
              where we ask for it (e.g. non-essential cookies). You may withdraw consent at any time via browser settings
              or our cookie controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Sharing</h2>
            <p>
              Hosting providers, analytics vendors, and affiliate networks may process data on our behalf under
              contracts. We do not sell personal data as a product. Lawful requests from authorities will be answered when
              legally required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Retention</h2>
            <p>
              Server logs rotate on a short cycle. Analytics aggregates are kept in anonymised form. Email
              correspondence is deleted once the conversation is resolved unless law requires otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Security</h2>
            <p>
              We use HTTPS, access controls on dashboards, and vendors with SOC-style practices. No online system is
              perfect; report suspected issues promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Your rights</h2>
            <p>You may request access, correction, deletion, restriction, or portability where applicable.</p>
            <p className="text-sm">
              Supervisory authority: Irish residents may contact the Data Protection Commission (www.dataprotection.ie).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Children</h2>
            <p>
              Services are for adults 18+. We do not knowingly collect data from minors. If you believe a child
              interacted with us, ask for removal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">International transfers</h2>
            <p>
              Some subprocessors sit outside the EEA. Where that happens, we rely on approved transfer tools (e.g. EU
              Standard Contractual Clauses) as updated under GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Changes</h2>
            <p>
              Updates will be posted here with a new review date. Continued use after changes means you accept the
              revised policy unless we need fresh consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Contact</h2>
            <p>
              For data-related queries contact the publisher at{" "}
              <a href="mailto:info@bestbettingsitesie.com" className="text-emerald-600 font-medium hover:underline">
                info@bestbettingsitesie.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Cookies</h2>
            <p>
              Detailed breakdown:{" "}
              <Link href="/cookie-policy" className="text-emerald-600 font-medium hover:underline">
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
