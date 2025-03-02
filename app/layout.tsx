import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";
import { Toaster } from "@/components/ui/toaster";
import { JsonLd } from "@/components/JsonLd";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ProgressBar } from "@/components/ui/progress-bar";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'La Cantine & Co',
  url: 'https://www.cantineco.com/',
  logo: 'https://www.cantineco.com/images/logo.png',
  description: "Importateur d'huile d'olive premium des Pouilles, Italie",
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
  },
  sameAs: [
    'https://facebook.com/lacantineco',
    'https://instagram.com/lacantineco',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@cantineco.com',
    availableLanguage: ['French', 'English', 'Italian']
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  themeColor: '#4A5D4F',
  colorScheme: 'light'
};

export const metadata: Metadata = {
  title: {
    default: "La Cantine & Co | Huile d'Olive Premium des Pouilles",
    template: "%s | La Cantine & Co"
  },
  description: "Découvrez notre huile d'olive exceptionnelle pressée à froid dans les Pouilles, Italie. Une acidité moyenne de 0,25 pour un équilibre parfait de saveurs.",
  keywords: ["huile d'olive", "Pouilles", "Italie", "extra vierge", "premium", "bio", "pressée à froid"],
  authors: [{ name: "La Cantine & Co" }],
  creator: "La Cantine & Co",
  publisher: "La Cantine & Co",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.la-cansine-co.charlesjackson.dev'),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "La Cantine & Co",
    title: "La Cantine & Co | Huile d'Olive Premium des Pouilles",
    description: "Découvrez notre huile d'olive exceptionnelle pressée à froid dans les Pouilles, Italie. Une acidité moyenne de 0,25% pour un équilibre parfait de saveurs fruitées aux notes d'amande.",
    images: [
      {
        url: "/images/bouteille-social.jpg",
        width: 1200,
        height: 630,
        alt: "La Cantine & Co - Huile d'Olive Premium des Pouilles"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "La Cantine & Co | Huile d'Olive Premium des Pouilles",
    description: "Découvrez notre huile d'olive exceptionnelle pressée à froid dans les Pouilles, Italie. Une acidité moyenne de 0,25% pour un équilibre parfait de saveurs fruitées aux notes d'amande.",
    images: ["/images/bouteille-social.jpg"],
    creator: "@lacantineco",
    site: "@lacantineco",
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-site-verification',
    other: {
      'facebook-domain-verification': 'your-facebook-domain-verification'
    }
  },
  category: 'ecommerce',
  classification: 'business',
  referrer: 'origin-when-cross-origin',
  applicationName: 'La Cantine & Co',
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${sans.variable} ${heading.variable} ${body.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <JsonLd data={organizationJsonLd} />
      </head>
      <body>
        <ProgressBar />
        <MainLayout>
          {children}
        </MainLayout>
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  );
}
