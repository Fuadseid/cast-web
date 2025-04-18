import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ThemeProvider } from 'next-themes';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider attribute={'class'} enableSystem={true} defaultTheme='system'>
      <Navigation/>

        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}
