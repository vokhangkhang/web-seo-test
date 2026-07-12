import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '../constants/site';
import GoogleAnalytics from '@/lib/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  keywords: ['Next.js', 'React', 'TypeScript', 'SEO', 'Blog', 'Web Development'],
  authors: [{ name: 'John Doe' }],
  creator: 'John Doe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-image.jpg`],
    creator: '@johndoe'
  },
  // Add canonical URL for the site root
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${SITE_URL}/site.webmanifest`
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics/>
        {/* Global Person Schema for the site owner */}
        <script
          type="application/ld+json"
          // suppressHydrationWarning prevents React warning during SSR
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'John Doe',
              url: SITE_URL,
              sameAs: [
                'https://github.com/johndoe',
                'https://twitter.com/johndoe',
                'https://linkedin.com/in/johndoe',
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}