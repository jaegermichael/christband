import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const fraunces = Fraunces({
  variable: '--font-fraunces-serif',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ChristBand | Zimbabwe’s Christian Community',
  description: 'ChristBand brings Zimbabwe’s churches, believers, pastors, ministries, and Christian businesses together on one platform.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${geistMono.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}