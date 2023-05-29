import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mudassir Khan - Web Developer',
  description: 'Mudassir Khan Portfolio Frontend developer Based in India. Like Play with Css. Tech Stack are Html, CSS, JS, TS, React, NEXT.JS, Tailwindcss',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
        </link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
