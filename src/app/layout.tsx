import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'White House Business Solutions — Enterprise Learning & ERP',
  description:
    'WHBS delivers end-to-end LMS, ERP, eLearning content, and digital transformation services to organizations across 14 countries. 26+ years of enterprise excellence.',
  keywords: [
    'LMS',
    'Moodle Customization',
    'eLearning Solutions',
    'ERP Solutions',
    'Corporate Training',
    'Digital Transformation',
    'SCORM',
    'MOOC',
    'Enterprise Learning',
    'White House Business Solutions',
  ],
  authors: [{ name: 'White House Business Solutions Pvt Ltd' }],
  openGraph: {
    title: 'White House Business Solutions — Enterprise Learning & ERP',
    description:
      'WHBS delivers end-to-end LMS, ERP, eLearning content, and digital transformation services to organizations across 14 countries.',
    type: 'website',
    url: 'https://www.whitehouseit.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-[64px] lg:pt-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
