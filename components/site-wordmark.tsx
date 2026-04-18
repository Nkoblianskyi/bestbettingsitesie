import { cn } from "@/lib/utils"

type WordmarkVariant = "header-compact" | "header-hero" | "footer"

export function SiteWordmark({ variant, className }: { variant: WordmarkVariant; className?: string }) {
  return (
    <span
      className={cn(
        "font-display font-bold tracking-tight text-white",
        variant === "header-compact" && "text-base",
        variant === "header-hero" && "text-xl",
        variant === "footer" && "text-xl",
        className,
      )}
    >
      <span className="text-white">Best UK Betting Sites</span>
      <span className="text-[hsl(var(--gold))] font-semibold"> List</span>
    </span>
  )
}
