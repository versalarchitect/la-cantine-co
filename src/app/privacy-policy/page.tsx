import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité | La Cantine & Co",
  description: "Notre politique de confidentialité détaille comment nous protégeons vos informations personnelles.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Politique de confidentialité</h1>
      
      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            La Cantine & Co s&apos;engage à protéger la confidentialité de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Collecte d&apos;informations</h2>
          <p className="mb-4">
            Nous collectons les informations que vous nous fournissez directement lors de :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>La création d&apos;un compte</li>
            <li>La passation d&apos;une commande</li>
            <li>L&apos;inscription à notre newsletter</li>
            <li>Le contact avec notre service client</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Utilisation des informations</h2>
          <p className="mb-4">
            Nous utilisons vos informations pour :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Traiter vos commandes et paiements</li>
            <li>Communiquer avec vous concernant votre compte ou vos commandes</li>
            <li>Vous envoyer des informations marketing (avec votre consentement)</li>
            <li>Améliorer nos services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Protection des données</h2>
          <p className="mb-4">
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
          <p className="mb-4">
            Vous avez le droit de :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accéder à vos données personnelles</li>
            <li>Corriger vos données personnelles</li>
            <li>Supprimer vos données personnelles</li>
            <li>Vous opposer au traitement de vos données</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
          <p className="mb-4">
            Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à :
            <br />
            <a href="tel:514-609-4050" className="text-primary hover:underline">514-609-4050</a>
          </p>
        </section>

        <section className="pt-8 border-t">
          <p className="text-sm text-gray-500">
            Dernière mise à jour : {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>
    </div>
  )
} 