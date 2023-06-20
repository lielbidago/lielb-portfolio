import Header from './_components/Header'
import './globals.scss'
import { Cormorant } from 'next/font/google'
import { Assistant } from 'next/font/google'

const appFont = Assistant({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: "liel's portfolio",
  description: 'developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={appFont.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
