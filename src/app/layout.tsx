import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { LeftSidebar } from '@/layout/LeftSidebar'
import { RightSidebar } from '@/layout/rightSidebar'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard | Recursos Humanos',
  description: 'Dashboard voltado para os recursos humanos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={inter.className}>
        <body className='flex flex-row h-screen'>
          <LeftSidebar />
          <main className='pl-[250px] pr-[280px] w-full'>{children}</main>
          <RightSidebar />
        </body>
    </html>
  )
}
