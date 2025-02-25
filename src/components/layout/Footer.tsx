import { Instagram, MapPin, Phone, Clock, Mail } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <ScrollAnimation animation="fade" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-stone-900 tracking-wider uppercase mb-4">
                Contact
              </h3>
              <ul className="space-y-4 text-base text-stone-600">
                <li className="flex items-center gap-3 hover:text-stone-900 transition-colors">
                  <MapPin className="h-5 w-5 text-primary/60 flex-shrink-0" />
                  <span>Longueuil, Québec, J4H2T5</span>
                </li>
                <li>
                  <a 
                    href="tel:514-609-4050" 
                    className="flex items-center gap-3 hover:text-stone-900 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary/60 flex-shrink-0" />
                    <span>514-609-4050</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@lacantineco.com"
                    className="flex items-center gap-3 hover:text-stone-900 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary/60 flex-shrink-0" />
                    <span>contact@lacantineco.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-sm font-semibold text-stone-900 tracking-wider uppercase mb-4">
                Heures d&apos;ouverture
              </h3>
              <ul className="space-y-4 text-base text-stone-600">
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary/60 flex-shrink-0" />
                  <div className="space-y-1">
                    <p>Lundi – Vendredi: 7h – 20h</p>
                    <p>Samedi: 8h – 19h</p>
                    <p>Dimanche: Fermé</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social & Company */}
            <div>
              <h3 className="text-sm font-semibold text-stone-900 tracking-wider uppercase mb-4">
                Suivez-nous
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/lacantineco"
                  className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
                  <span>@lacantineco</span>
                </a>
                <p className="text-stone-600 mt-4">
                  Suivez-nous sur Instagram pour découvrir nos dernières actualités, 
                  nos produits et notre passion pour l&apos;huile d&apos;olive.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <p className="text-sm text-stone-500 text-center">
            © {new Date().getFullYear()} La Cantine & Co. Tous droits réservés.
            {" · "}
            <Link href="/privacy-policy" className="hover:text-stone-900 transition-colors">
              Politique de confidentialité
            </Link>
            {" · "}
            <Link href="/terms" className="hover:text-stone-900 transition-colors">
              Conditions d&apos;utilisation
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
