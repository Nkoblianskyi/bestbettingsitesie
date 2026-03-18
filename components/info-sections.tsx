"use client"

export function InfoSections() {
  return (
    <div className="mt-16">
      <section className="relative rounded-2xl overflow-hidden border border-slate-600/60 shadow-2xl">
        {/* Непрозорий шар — текст не лежить на фото стадіону */}
        <div className="absolute inset-0 bg-slate-950" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-95" aria-hidden />
        <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-center text-white mb-2 tracking-tight">
              How bestbettingsitesie helps you choose
            </h2>
            <p className="text-center text-emerald-200/90 text-sm font-semibold mb-8">
              Independent picks for Irish players
            </p>

            <div className="rounded-xl bg-slate-900/90 border border-slate-700/80 p-4 sm:p-5 mb-6 shadow-inner">
              <p className="text-slate-100 leading-relaxed text-sm sm:text-base">
                Picking a bookmaker is not about one headline offer—it is about whether the site fits how you bet. Some
                users live in in-play; others want GAA depth, early racing prices, or frictionless withdrawals. Our
                table is built to spotlight operators that consistently perform for Irish-facing customers.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "What we look at",
                  body: (
                    <>
                      We weigh pricing on mainstream markets, depth of live coverage, app stability, KYC and payout
                      smoothness, and how clearly bonuses are explained. Affiliate relationships never reorder the
                      list—you still see the same ranking logic regardless of who pays for clicks.
                    </>
                  ),
                },
                {
                  title: "Match the product to your habits",
                  body: (
                    <>
                      Start with the sports you actually stake on weekly. If streaming matters, filter for brands that
                      carry your leagues. If you build multis, favour books with strong acca tools and transparent
                      settlement rules. Odds move constantly; a fractional edge repeated over hundreds of bets adds up.
                      Use our scores as a compass, then line-shop on the events you care about.
                    </>
                  ),
                },
                {
                  title: "Welcome deals without surprises",
                  body: (
                    <>
                      Introductory free bets and boosts change often. The snippets under each logo summarise the
                      mechanic, but the operator’s live page is the contract. Read minimum stakes, excluded wallets,
                      expiry windows, and whether free-bet stakes are returned.
                    </>
                  ),
                },
                {
                  title: "Regulation & player safety",
                  body: (
                    <>
                      We only discuss firms that hold appropriate licensing for customers in Ireland. Licensed operators
                      must meet standards on funds segregation, fairness testing, and responsible-gambling tooling.
                      That does not remove risk—it means there is an overseer if something goes wrong.
                    </>
                  ),
                },
                {
                  title: "Tech that keeps pace",
                  body: (
                    <>
                      Modern books compete on cash-out logic, partials, bet builders, and low-latency apps. We factor how
                      polished those flows feel on both phone and desktop, because a slow slip in live time costs real
                      money.
                    </>
                  ),
                },
                {
                  title: "Long-term discipline",
                  body: (
                    <>
                      Sustainable punting is boring on purpose: fixed stakes, written limits, and no chasing. Treat
                      offers as optional extras, not income. If betting stops feeling optional, use the helplines in
                      our footer immediately.
                    </>
                  ),
                },
              ].map((block) => (
                <article
                  key={block.title}
                  className="rounded-xl bg-slate-800/95 border border-slate-600/70 px-4 py-4 sm:px-5 sm:py-4 shadow-md"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">{block.title}</h3>
                  <p className="text-slate-100/95 leading-relaxed text-sm sm:text-[0.9375rem]">{block.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-slate-800 border border-slate-600 px-4 py-4 sm:px-5">
              <p className="text-[11px] sm:text-xs leading-relaxed text-slate-200 font-medium text-center uppercase tracking-wide">
                Content © bestbettingsitesie. Promotions are for adults 18+ in Ireland. Identity and location checks
                apply. Additional restrictions may apply—see each operator.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
