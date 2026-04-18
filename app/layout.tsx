import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://elitebettingsiteslistuk.com"),
  title: "Elite Betting Sites UK — Premier Bookmaker Rankings 2025",
  description:
    "elitebettingsiteslistuk.com compares the finest UK-licensed bookmakers: exclusive welcome offers, odds quality, and expert ratings curated for discerning punters.",
  openGraph: {
    siteName: "elitebettingsiteslistuk",
    url: "https://elitebettingsiteslistuk.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-[#0D1B2A]`}>
      <body className="font-sans bg-[#0D1B2A] text-[#F5F0E8] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
