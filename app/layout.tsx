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
  title: 'Christbrand - Body of Christ Christian Networking Platform',
  description: 'Zimbabwe\'s premier Christian networking platform connecting churches, pastors, businesses, and believers across the nation.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#551839] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#FFFDF7] focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}