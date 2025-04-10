import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora, Inter, Cormorant } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";
import { Toaster } from "@/components/ui/toaster";
import { JsonLd } from "@/components/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
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
    'https://facebook.com/cantineco',
    'https://instagram.com/cantineco',
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.la-cantine-co.charlesjackson.dev'),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "La Cantine & Co",
    title: "La Cantine & Co | Huile d'Olive Premium des Pouilles",
    description: "Découvrez notre huile d'olive exceptionnelle pressée à froid dans les Pouilles, Italie. Une acidité moyenne de 0,25% pour un équilibre parfait de saveurs fruitées aux notes d'amande.",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
    creator: "@cantineco",
    site: "@cantineco",
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
    <html lang="fr" className="h-full">
      <head>
        <JsonLd data={organizationJsonLd} />
      </head>
      <body className={`${playfair.variable} ${lora.variable} ${inter.variable} ${cormorant.variable} font-sans`}>
        <MainLayout>
          {children}
        </MainLayout>
        <Toaster />
      </body>
    </html>
  );
}
