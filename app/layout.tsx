import type React from "react"
import type { Metadata } from "next"
import { Lato, Outfit } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const mulish = Lato({ subsets: ["latin"], weight: ["400", "700"] })
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-hero-display",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bestukbettingsiteslist.com"),
  title: "Best UK Betting Sites List — Expert Rankings & Top Offers 2025",
  description:
    "bestukbettingsiteslist.com compares the top UK-licensed bookmakers: welcome bonuses, odds quality, features and payment methods — all in one place.",
  openGraph: {
    siteName: "bestukbettingsiteslist",
    url: "https://bestukbettingsiteslist.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${outfit.variable} bg-slate-950`}>
      <body className={mulish.className}>
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg-8.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none bg-black/60"
            aria-hidden
          />
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
