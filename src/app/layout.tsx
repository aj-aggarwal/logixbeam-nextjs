import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { companyInfo, jsonLdData } from "@/data/company";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
}

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
  alternates: {
    canonical: '/',
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable} ${poppins.variable}`}>
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
      <body className={`${poppins.className} antialiased text-gray-900 bg-white`}>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${companyInfo.analytics.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${companyInfo.analytics.googleAnalyticsId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
