import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mudassir Khan - Web Developer',
  description: 'Mudassir Khan Portfolio Frontend developer Based in India. Like to Play with Css.Tech Stack are React.JS, Next.JS, Tailwindcss',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Mudassir_222" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
        </link>
        <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript><Image src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="no script" referrerpolicy="no-referrer-when-downgrade" /></noscript>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
