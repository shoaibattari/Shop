import Navbar from '@/Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ss-Book-Shop',
  description: 'Wellcome To Bookshop Market App Create By Shoaib Memon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}  >
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
