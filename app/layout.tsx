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
  metadataBase: new URL("https://bestbettingsitesie.com"),
  title: "bestbettingsitesie — Irish bookmaker picks & offers",
  description:
    "bestbettingsitesie.com compares licensed Irish-facing bookmakers: welcome deals, odds quality, and platform notes in one place.",
  openGraph: {
    siteName: "bestbettingsitesie",
    url: "https://bestbettingsitesie.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
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
            className="absolute inset-0 z-0 pointer-events-none bg-black/55"
            aria-hidden
          />
          <div className="relative z-10">
            {/* Header in layout - will show on all pages */}
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
