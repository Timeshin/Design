import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Design',
  description: 'Design'
}

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode
}>) => (
  <html lang='en'>
    <body className={`${roboto.className}`}>{children}</body>
  </html>
)

export default RootLayout
