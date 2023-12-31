

import './globals.css'
import Navbar from './components/Navbar/Navbar'
import { Nunito } from 'next/font/google'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import ToastProvider from './providers/ToasterProviders'


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* <Modal
            isOpen
            title='Hello word'
            actionLabel='Submit'

          /> */}
          <ToastProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}

      </body>
    </html>
  )
}
