import { HeroSection } from "@/components/home/HeroSection"
import { AboutSection } from "@/components/home/AboutSection"
import { ProductsSection } from "@/components/home/ProductsSection"
import { VideoContainer } from "@/components/home/VideoContainer"
import { ContactSection } from "@/components/home/ContactSection"
import type { Metadata } from "next"
import { JsonLd } from "@/components/JsonLd"

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'D\'où vient votre huile d\'olive ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notre huile d\'olive est produite dans la région des Pouilles en Italie, réputée pour ses oliviers centenaires et son savoir-faire traditionnel.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quelle est la qualité de votre huile d\'olive ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notre huile d\'olive est extra vierge de première pression à froid, avec une acidité très basse de 0,25%. Elle est certifiée par des laboratoires indépendants.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment conserver l\'huile d\'olive ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Conservez l\'huile d\'olive à l\'abri de la lumière et de la chaleur, idéalement entre 15-18°C.'
      }
    }
  ]
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'La Cantine & Co',
  url: 'https://www.cantineco.com/',
  description: "Découvrez notre huile d'olive exceptionnelle pressée à froid dans les Pouilles, Italie.",
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.cantineco.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

export const metadata: Metadata = {
  title: "La Cantine & Co | Huile d'Olive Premium des Pouilles",
  description: "Découvrez notre huile d'olive exceptionnelle pressée à froid dans les Pouilles, Italie. Une acidité moyenne de 0,25% pour un équilibre parfait de saveurs fruitées aux notes d'amande.",
  keywords: [
    "huile d'olive",
    "Pouilles",
    "Italie",
    "extra vierge",
    "premium",
    "bio",
    "pressée à froid",
    "Coratina",
    "La Cantine & Co",
    "huile d'olive premium",
    "huile d'olive italienne",
    "huile d'olive des Pouilles",
    "huile d'olive extra vierge"
  ],
  openGraph: {
    title: "La Cantine & Co | Huile d'Olive Premium des Pouilles",
    description: "Découvrez notre huile d'olive exceptionnelle pressée à froid dans les Pouilles, Italie. Une acidité moyenne de 0,25% pour un équilibre parfait de saveurs fruitées aux notes d'amande.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Cantine & Co - Huile d'Olive Premium des Pouilles"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "La Cantine & Co | Huile d'Olive Premium des Pouilles",
    description: "Découvrez notre huile d'olive exceptionnelle pressée à froid dans les Pouilles, Italie.",
    images: ["/images/og-image.jpg"],
    creator: "@lacantine",
  },
  alternates: {
    canonical: "https://lacantineco.co",
    languages: {
      'fr-FR': 'https://lacantine.co',
    }
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
}

export default async function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={faqJsonLd} />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <VideoContainer />
        <ContactSection />
      </main>
    </>
  )
}
