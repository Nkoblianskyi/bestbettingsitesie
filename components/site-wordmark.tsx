import { cn } from "@/lib/utils"

type WordmarkVariant = "header-compact" | "header-hero" | "footer"

const baseWord = "font-hero-display tracking-tight"

export function SiteWordmark({ variant, className }: { variant: WordmarkVariant; className?: string }) {
  if (variant === "header-compact") {
    return (
      <span className={cn(baseWord, "inline-flex flex-wrap items-baseline gap-x-0", className)}>
        <span className="text-white font-extrabold">bestbetting</span>
        <span className="text-slate-400 font-semibold">sites</span>
        <span className="inline-flex items-center rounded-md bg-emerald-950/90 border border-emerald-800/60 text-emerald-200 text-[0.62em] font-bold px-1.5 py-px leading-none translate-y-[-0.05em]">
          .ie
        </span>
      </span>
    )
  }

  if (variant === "header-hero") {
    return (
      <div className={cn("space-y-0.5", className)}>
        <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500 font-semibold">Ireland</p>
        <h1 className={cn(baseWord, "text-2xl sm:text-3xl lg:text-[2.15rem] leading-[1.05]")}>
          <span className="text-white font-extrabold">bestbetting</span>
          <span className="text-slate-400 font-semibold">sites</span>
          <span className="inline-flex items-center rounded-lg bg-emerald-950/90 border border-emerald-700/50 text-emerald-100 text-[0.45em] font-bold px-2 py-1 ml-1 align-baseline translate-y-[-0.12em] shadow-sm">
            .ie
          </span>
        </h1>
      </div>
    )
  }

  /* footer — centred on mobile, left-aligned beside logo on sm+ */
  return (
    <div className={cn("text-center sm:text-left", className)}>
      <div
        className={cn(
          baseWord,
          "text-xl sm:text-2xl flex flex-wrap items-baseline gap-x-0 justify-center sm:justify-start",
        )}
      >
        <span className="text-white font-extrabold">bestbetting</span>
        <span className="text-slate-400 font-semibold">sites</span>
        <span className="inline-flex items-center rounded-lg bg-emerald-950/90 border border-emerald-800/50 text-emerald-200 text-[0.55em] font-bold px-2 py-0.5 ml-1 translate-y-[-0.08em]">
          .ie
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-500 tracking-wide font-medium text-center sm:text-left">
        bestbettingsitesie.com
      </p>
    </div>
  )
}
