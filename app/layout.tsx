import { Footer, Navbar } from '@/components'
import './globals.css'



export const metadata = {
  title: 'Flexxible',
  description: 'ShowCase and Discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
       <Navbar />
       <main>
        {children}
        </main>
        <Footer />
      </body>
      
    </html>
  )
}
