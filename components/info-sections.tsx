"use client"

export function InfoSections() {
  const sections = [
    {
      title: "How we rank UK betting sites",
      body: "Our editorial team opens real accounts, tests deposits and withdrawals, places bets, and contacts support on every bookmaker we review. Rankings are updated regularly and reflect current product quality — not just headline bonus sizes. Affiliate partnerships fund this site but never alter the order of merit.",
    },
    {
      title: "What our scores measure",
      body: "Each bookmaker is scored on five pillars: odds competitiveness across mainstream markets, live-betting depth and streaming coverage, mobile app stability and speed, KYC and withdrawal experience, and transparency of promotional terms. Weighted averages produce the final score shown beside each listing.",
    },
    {
      title: "Choosing the right bookmaker for you",
      body: "The top-ranked site is not always the best fit for every punter. If you follow Premier League football daily, prioritise in-play depth and an acca builder. If horse racing is your game, look for Best Odds Guaranteed and early-morning markets. Use our feature tags on each card to match the product to how you actually bet.",
    },
    {
      title: "Welcome bonuses — what to check",
      body: "Free-bet and deposit-match offers change without notice. The figures on our cards are snapshots; the live terms on the operator's site are the legal document. Key things to verify: minimum qualifying bet, odds restrictions, number of days to use the credit, and whether free-bet stake is returned on winning.",
    },
    {
      title: "UKGC licensing and player safety",
      body: "Every bookmaker listed here holds a licence from the UK Gambling Commission, which mandates segregated player funds, independent RNG auditing, and accessible responsible-gambling tooling. A licence is a minimum standard — it means there is a regulator with teeth if something goes wrong.",
    },
    {
      title: "Responsible gambling",
      body: "Set a fixed stake budget before you start and treat any return as a bonus. Deposit limits, session timers, and self-exclusion are free tools available on every UKGC-licensed site. If gambling starts to feel compulsive rather than recreational, use the National Gambling Helpline (0808 8020 133, free, 24/7) or the links in our footer immediately.",
    },
  ]

  return (
    <div className="mt-12">
      <section className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
        <div className="absolute inset-0 bg-slate-950" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-95" aria-hidden />

        <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-amber-400/80 text-xs font-bold uppercase tracking-[0.25em] mb-2">Expert Analysis</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight text-balance">
                How bestukbettingsiteslist reviews bookmakers
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Independent, methodology-driven comparisons for UK punters
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/80 border border-amber-500/20 p-4 sm:p-5 mb-6 shadow-inner">
              <p className="text-slate-100 leading-relaxed text-sm sm:text-base">
                Finding the right bookmaker is not about chasing the biggest welcome bonus — it is about locating an
                operator whose product matches the markets you bet on, the device you use, and the speed at which you
                expect to access winnings. Our table is built to surface those differences clearly.
              </p>
            </div>

            <div className="space-y-3">
              {sections.map((block) => (
                <article
                  key={block.title}
                  className="rounded-xl bg-slate-800/90 border border-slate-600/60 px-4 py-4 sm:px-5 sm:py-4 shadow-md"
                >
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">{block.title}</h3>
                  <p className="text-slate-300/90 leading-relaxed text-sm">{block.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-slate-800 border border-slate-600 px-4 py-4 sm:px-5">
              <p className="text-[11px] sm:text-xs leading-relaxed text-slate-300 font-medium text-center uppercase tracking-wide">
                Content &copy; bestukbettingsiteslist.com. Promotions are for adults 18+ in Great Britain only. Identity
                verification and location checks apply. Additional restrictions may apply — see each operator.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
