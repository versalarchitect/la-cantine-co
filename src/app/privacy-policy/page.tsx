"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité | La Cantine & Co",
  description: "Notre politique de confidentialité détaille comment nous protégeons vos informations personnelles.",
}

export default function PrivacyPolicyPage() {
  const [openSection, setOpenSection] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<number>(1)

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: "La Cantine & Co s'engage à protéger la confidentialité de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles."
    },
    {
      id: 2,
      title: "Collecte d'informations",
      content: "Nous collectons les informations que vous nous fournissez directement lors de :",
      list: [
        "La création d'un compte",
        "La passation d'une commande",
        "L'inscription à notre newsletter",
        "Le contact avec notre service client"
      ]
    },
    {
      id: 3,
      title: "Utilisation des informations",
      content: "Nous utilisons vos informations pour :",
      list: [
        "Traiter vos commandes et paiements",
        "Communiquer avec vous concernant votre compte ou vos commandes",
        "Vous envoyer des informations marketing (avec votre consentement)",
        "Améliorer nos services"
      ]
    },
    {
      id: 4,
      title: "Protection des données",
      content: "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction."
    },
    {
      id: 5,
      title: "Vos droits",
      content: "Vous avez le droit de :",
      list: [
        "Accéder à vos données personnelles",
        "Corriger vos données personnelles",
        "Supprimer vos données personnelles",
        "Vous opposer au traitement de vos données"
      ]
    },
    {
      id: 6,
      title: "Contact",
      content: "Pour toute question concernant cette politique de confidentialité, veuillez nous contacter au :",
      contact: "514-609-4050"
    }
  ]

  const handleScroll = (id: number) => {
    setActiveSection(id)
    const element = document.getElementById(`section-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-900">
          Politique de confidentialité
        </h1>

        {/* Table of Contents - Fixed on larger screens */}
        <div className="lg:fixed lg:top-32 lg:w-64 mb-8 lg:mb-0">
          <nav className="space-y-1 text-sm">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleScroll(section.id)}
                className={cn(
                  "block w-full text-left px-3 py-2 rounded transition-colors",
                  activeSection === section.id
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-200"
                )}
              >
                {section.id}. {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:ml-72">
          <div className="space-y-6">
            {sections.map((section) => (
              <section
                key={section.id}
                id={`section-${section.id}`}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  className="w-full flex justify-between items-center"
                >
                  <h2 className="text-2xl font-semibold">
                    {section.id}. {section.title}
                  </h2>
                  {openSection === section.id ? (
                    <ChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </button>

                <div
                  className={cn(
                    "mt-4 space-y-4 overflow-hidden transition-all duration-200",
                    openSection === section.id ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="text-gray-700">{section.content}</p>
                  
                  {section.list && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {section.list.map((item) => (
                        <li key={`${section.id}-${item}`} className="hover:text-gray-900">{item}</li>
                      ))}
                    </ul>
                  )}
                  
                  {section.contact && (
                    <a
                      href={`tel:${section.contact}`}
                      className="inline-block mt-2 text-primary hover:underline"
                    >
                      {section.contact}
                    </a>
                  )}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 