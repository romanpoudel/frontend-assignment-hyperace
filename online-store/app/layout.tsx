import { ReactQueryProvider } from './ReactQueryProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import { ReactProvider } from './redux-toolkit/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Store',
  description: 'Created using Next JS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-100`}>
          <ReactProvider>
            {children}
          </ReactProvider>
        </body>
      </html>
    </ReactQueryProvider>
  )
}
