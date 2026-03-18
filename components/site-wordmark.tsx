import { cn } from "@/lib/utils"

type WordmarkVariant = "header-compact" | "header-hero" | "footer"

/** Назва з нормальною капиталізацією */
export function SiteWordmark({ variant, className }: { variant: WordmarkVariant; className?: string }) {
  const name = (
    <>
      <span className="text-white">Best Betting Sites</span>
      <span className="text-emerald-400 font-semibold"> IE</span>
    </>
  )

  return (
    <span
      className={cn(
        "font-hero-display font-bold tracking-tight text-white",
        variant === "header-compact" && "text-base sm:text-lg",
        variant === "header-hero" && "text-xl sm:text-2xl",
        variant === "footer" && "text-xl sm:text-2xl",
        className,
      )}
    >
      {name}
    </span>
  )
}
