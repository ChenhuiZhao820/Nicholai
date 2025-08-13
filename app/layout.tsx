import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Source_Serif_4 } from "next/font/google"
import "./global.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
})

export const metadata: Metadata = {
  title: "AI Career Consulting - Discover Your Non-Linear Career Path",
  description:
    "AI-driven career consulting platform for professionals with non-linear career paths. Get personalized insights and career planning.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
