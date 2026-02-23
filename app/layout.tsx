import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"
import { Toaster } from "../components/ui/toaster" // Tambahkan import ini

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "M Dian Fauzi - Portfolio",
  description:
    "Informatics Student | Web & AI Enthusiast - Portfolio showcasing web development, data science, and machine learning projects",
  generator: "v0.app",
  keywords: ["portfolio", "web development", "data science", "machine learning", "informatika"],
  authors: [{ name: "M Dian Fauzi" }],
  openGraph: {
    title: "M Dian Fauzi - Portfolio",
    description: "Informatics Student | Web & AI Enthusiast",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster/>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
