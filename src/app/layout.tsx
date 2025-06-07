import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { companyInfo, jsonLdData } from "@/data/company";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.name} - ${companyInfo.tagline}`,
    template: `%s | ${companyInfo.name}`,
  },
  description: companyInfo.description,
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'ecommerce solutions',
    'AI integrations',
    'SaaS applications',
    'third-party integrations',
    'LogixBeam',
    'Ludhiana',
    'Punjab',
    'India'
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  metadataBase: new URL('https://logixbeam.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://logixbeam.com',
    title: `${companyInfo.name} - ${companyInfo.tagline}`,
    description: companyInfo.description,
    siteName: companyInfo.name,
    images: [
      {
        url: '/images/hero-banner.jpg',
        width: 1200,
        height: 630,
        alt: `${companyInfo.name} - Modern Software Solutions`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyInfo.name} - ${companyInfo.tagline}`,
    description: companyInfo.description,
    images: ['/images/hero-banner.jpg'],
    creator: '@logixbeam',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo-32x32.png',
    shortcut: '/images/logo-16x16.png',
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
