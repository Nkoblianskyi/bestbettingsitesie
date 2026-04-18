import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
          Website Terms of Use — bestukbettingsiteslist.com
        </h1>
        <p className="text-slate-400 text-sm mb-8 border-b border-slate-100 pb-4">
          Updated:{" "}
          {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="space-y-6 text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Agreement to terms</h2>
            <p className="text-sm leading-relaxed">
              By accessing or using bestukbettingsiteslist.com you accept these terms in full. If you disagree with any
              part of this document, please discontinue use of the site immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Nature of the service</h2>
            <p className="text-sm leading-relaxed">
              We publish independent editorial comparisons and rankings of third-party bookmaking services. We are not a
              bookmaker, betting exchange, or gambling operator. We do not place bets, accept deposits, or hold player
              funds on behalf of any individual.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Age restriction</h2>
            <p className="text-sm leading-relaxed">
              This website is strictly for adults aged 18 years or older residing in Great Britain. By using the site you
              confirm you meet this requirement. Gambling under 18 is illegal under UK law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Accuracy of information</h2>
            <p className="text-sm leading-relaxed">
              Bonus figures, odds information, and product descriptions are editorial snapshots that may not reflect
              current live terms. Offers change without notice. Always verify promotions and rules directly on the
              bookmaker&apos;s official website before depositing or placing any bet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. External links</h2>
            <p className="text-sm leading-relaxed">
              Links leaving this site take you to third-party environments governed by their own terms and privacy
              policies. We are not responsible for the conduct, content, or practices of linked operators. Some links
              carry affiliate identifiers — see the Advertiser Disclosure on the homepage.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. Responsible gambling</h2>
            <p className="text-sm leading-relaxed">
              Gambling carries financial risk. Only stake money you can afford to lose. Use the deposit limits,
              self-exclusion tools, and reality checks offered by all UKGC-licensed operators. The National Gambling
              Helpline is available free 24/7 on 0808 8020 133. Support organisations are listed in our footer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">7. Intellectual property</h2>
            <p className="text-sm leading-relaxed">
              Original copy, layout, and design elements created by bestukbettingsiteslist.com remain our intellectual
              property. Bookmaker logos are the property of their respective owners and are reproduced nominatively for
              identification purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">8. Limitation of liability</h2>
            <p className="text-sm leading-relaxed">
              To the maximum extent permitted by English and Welsh law, we exclude all liability for any loss or damage
              arising from reliance on the content of this site, including financial loss resulting from betting
              decisions. Jurisdiction-specific statutory rights are unaffected.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">9. Privacy</h2>
            <p className="text-sm leading-relaxed">
              Please read our{" "}
              <Link href="/privacy-policy" className="text-amber-600 font-medium hover:underline">
                Privacy Policy
              </Link>{" "}
              for information on how we handle personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">10. Amendments</h2>
            <p className="text-sm leading-relaxed">
              We reserve the right to amend these terms at any time. Continued use of the site following any update
              constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">11. Governing law</h2>
            <p className="text-sm leading-relaxed">
              These terms are governed by the laws of England and Wales. Any dispute shall be subject to the
              non-exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
