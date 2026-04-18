import Link from "next/link"
import { ArrowLeft, ShieldCheck, AlertTriangle, Phone, Globe, Clock, Ban } from "lucide-react"

export default function ResponsibleGamingPage() {
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
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
            <ShieldCheck className="w-8 h-8 text-emerald-700" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
            Safer Gambling
          </h1>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            bestukbettingsiteslist.com is committed to promoting responsible gambling for all UK users.
          </p>
        </div>

        {/* Emergency strip */}
        <div className="rounded-xl bg-red-50 border border-red-200 p-5 mb-8 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-red-800 mb-1 text-sm">If gambling is causing you harm right now</p>
            <p className="text-red-700 text-sm leading-relaxed">
              Call the <strong>National Gambling Helpline: 0808 8020 133</strong> — free, confidential, and open 24
              hours a day, 7 days a week. You are never alone.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">What responsible gambling means</h2>
            <p className="text-sm leading-relaxed">
              Responsible gambling means treating betting as a paid form of entertainment — like a cinema trip or a
              round of golf — with a fixed budget and a clear limit. It means understanding that the house edge ensures
              losses over the long run, and that short-term wins do not change that mathematical reality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Core principles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: <Clock className="w-4 h-4 text-blue-600" />, title: "Set time limits", body: "Decide how long you will spend before you open a site. Use session timers on the bookmaker's settings page." },
                { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, title: "Set deposit limits", body: "Use daily, weekly, and monthly deposit caps available on every UKGC-licensed site — they take effect immediately." },
                { icon: <Ban className="w-4 h-4 text-red-500" />, title: "Never chase losses", body: "Accept that a losing session is the cost of entertainment. Increasing stakes to recover losses leads to larger losses." },
                { icon: <Globe className="w-4 h-4 text-amber-600" />, title: "Gamble only with spare funds", body: "Never use money earmarked for rent, bills, food, or other essentials. Never borrow to bet." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-slate-50 border border-slate-100 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    {item.icon}
                    <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Warning signs</h2>
            <p className="text-sm leading-relaxed mb-3">
              It is worth periodically asking yourself whether any of the following apply:
            </p>
            <ul className="space-y-1.5 text-sm pl-4 list-disc">
              {[
                "You are spending more time or money on gambling than you intended",
                "You feel anxious, irritable, or depressed when not gambling",
                "You hide your gambling activity from family or friends",
                "You have borrowed money or sold possessions to fund gambling",
                "Gambling is affecting your work, relationships, or daily responsibilities",
                "You find it difficult or impossible to stop when you decide to",
                "You are gambling to escape problems, stress, or negative emotions",
                "You need to bet larger amounts to feel the same excitement",
              ].map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 mt-3">
              If you recognise two or more of these patterns, please speak to a professional as soon as possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Tools available on licensed UK sites</h2>
            <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5">
              <ul className="space-y-2 text-sm text-emerald-900">
                <li><strong>Deposit limits</strong> — daily, weekly, or monthly caps you set yourself</li>
                <li><strong>Loss limits</strong> — caps on how much you can lose in a given period</li>
                <li><strong>Session time reminders</strong> — pop-ups after a set amount of time logged in</li>
                <li><strong>Reality checks</strong> — periodic summaries of net win/loss during a session</li>
                <li><strong>Self-exclusion</strong> — temporary or permanent blocks on your account</li>
                <li><strong>GamStop</strong> — a national self-exclusion scheme covering all UKGC-licensed operators simultaneously</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Support organisations</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Globe className="w-5 h-5 text-blue-600" />,
                  name: "GambleAware",
                  desc: "The leading UK safer-gambling charity — information, advice, and referrals to specialist treatment.",
                  web: "www.gambleaware.org",
                  phone: "0808 8020 133",
                },
                {
                  icon: <Phone className="w-5 h-5 text-green-600" />,
                  name: "GamCare",
                  desc: "Free support, advice, and counselling for anyone affected by gambling harm.",
                  web: "www.gamcare.org.uk",
                  phone: "0808 8020 133",
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
                  name: "Gamblers Anonymous",
                  desc: "Peer-support fellowship meetings across the UK for people with gambling problems.",
                  web: "www.gamblersanonymous.org.uk",
                  phone: "020 7384 3040",
                },
                {
                  icon: <Clock className="w-5 h-5 text-orange-600" />,
                  name: "Gordon Moody",
                  desc: "Residential treatment programmes and online therapy for severe gambling addiction.",
                  web: "www.gordonmoody.org.uk",
                  phone: "01384 241 292",
                },
              ].map((org) => (
                <div key={org.name} className="rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    {org.icon}
                    <h3 className="font-semibold text-slate-900">{org.name}</h3>
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">{org.desc}</p>
                  <p className="text-xs"><strong className="text-slate-800">Web:</strong> {org.web}</p>
                  <p className="text-xs"><strong className="text-slate-800">Phone:</strong> {org.phone}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Support for families and friends</h2>
            <p className="text-sm leading-relaxed">
              Gambling harm affects more than the individual. If someone close to you has a gambling problem: do not
              lend them money; encourage them to seek professional help; look after your own wellbeing; and consider
              contacting GamCare, which also supports affected family members.
            </p>
          </section>

          <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50 p-5">
            <p className="font-semibold text-amber-900 mb-1 text-sm">A note from the editorial team</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              Gambling disorder is a recognised medical condition, not a character flaw. Recovery is possible with the
              right support. The hardest step is acknowledging there is a problem — and you have already taken it by
              reading this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
