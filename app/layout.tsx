import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aashwin Ranjan',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className = '!scroll-smooth'>
      <body style = {{width: '100vw', height: '500vh', backgroundColor:'#010101'}} className = 'absolute'>
      <div style = {{width: '100vw', height: '100vh'}} className='absolute w-full h-full bg-black'>
        <video autoPlay muted loop className = 'absolute fixed w-full h-full object-cover'>
            <source src = '/v.webm' type = 'video/webm'/>
        </video>
        </div>
        <Header/>
        <div className= 'relative flex-row align-center items-center justify-center object-cover'>
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
