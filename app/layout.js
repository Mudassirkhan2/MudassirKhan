import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const siteUrl = 'https://mudassir-khan.vercel.app'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohammed Mudassir Ullah Khan',
  alternateName: 'Mudassir Khan',
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: 'Frontend Developer',
  description: 'Frontend Developer specializing in React, Next.js, Angular, FastAPI and MongoDB. 2.5+ years of experience building fast, scalable web applications.',
  email: 'mudassir222001@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressCountry: 'IN' },
  sameAs: [
    'https://github.com/Mudassirkhan2',
    'https://www.linkedin.com/in/mudassir-khan-522303233/',
    'https://twitter.com/Mudassir_222',
  ],
  knowsAbout: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'FastAPI', 'MongoDB', 'Tailwind CSS', 'Node.js'],
}

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Mudassir Khan — Frontend Developer',
    template: '%s | Mudassir Khan',
  },
  description: 'Portfolio of Mudassir Khan — Frontend Developer with 2.5+ years building fast, scalable web apps using React, Next.js, Angular, FastAPI and MongoDB.',
  keywords: [
    'Mudassir Khan', 'Frontend Developer', 'React Developer',
    'Next.js Developer', 'Angular Developer', 'FastAPI', 'MongoDB', 'TypeScript',
    'Tailwind CSS', 'Web Developer India', 'Hyderabad Developer', 'Portfolio',
  ],
  authors: [{ name: 'Mudassir Khan', url: siteUrl }],
  creator: 'Mudassir Khan',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Mudassir Khan — Frontend Developer',
    title: 'Mudassir Khan — Frontend Developer',
    description: 'Portfolio of Mudassir Khan — Frontend Developer from Hyderabad with 2.5+ years building fast, scalable web apps using React, Next.js, Angular, FastAPI and MongoDB.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mudassir Khan — Frontend Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Mudassir_222',
    creator: '@Mudassir_222',
    title: 'Mudassir Khan — Frontend Developer',
    description: 'Portfolio of Mudassir Khan — Frontend Developer with 2.5+ years of experience.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: siteUrl },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0b14" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js" />
        <noscript>
          <Image src="https://queue.simpleanalyticscdn.com/noscript.gif" alt=""
            width="0" height="0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </noscript>
      </head>
      <body className={spaceGrotesk.className}>
        {/* Teal glow orb */}
        <div style={{
          position: 'fixed', top: '-180px', left: '50%',
          width: '760px', height: '520px', marginLeft: '-380px',
          zIndex: 0, pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(62,232,164,0.14), transparent 65%)',
          filter: 'blur(20px)',
          animation: 'floaty 14s ease-in-out infinite',
        }} />
        {/* Line grid overlay */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.024) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(90% 60% at 50% 0%, rgb(0,0,0) 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(90% 60% at 50% 0%, rgb(0,0,0) 30%, transparent 75%)',
        }} />
        {children}
      </body>
    </html>
  )
}
