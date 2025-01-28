import { Metadata } from "next"
import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Notre politique de confidentialité détaillant comment nous traitons vos données personnelles.",
}

export default function PrivacyPolicyPage() {
  return (
    <Shell>
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="prose prose-stone mx-auto dark:prose-invert">
          <h1 className="mb-8 text-4xl font-bold">Politique de confidentialité</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Bienvenue sur notre politique de confidentialité. Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Collecte des données</h2>
            <p>
              Nous collectons uniquement les données nécessaires pour traiter vos commandes et améliorer votre expérience sur notre site.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Informations de contact (nom, email, téléphone)</li>
              <li>Adresse de livraison</li>
              <li>Historique des commandes</li>
              <li>Préférences de navigation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Utilisation des données</h2>
            <p>
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Traiter et livrer vos commandes</li>
              <li>Vous informer sur l&apos;état de vos commandes</li>
              <li>Améliorer nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p>
              Pour toute question concernant notre politique de confidentialité, veuillez nous contacter par email.
            </p>
          </section>
        </div>
      </section>
    </Shell>
  )
} 