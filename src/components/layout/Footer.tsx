import { Instagram, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span>Longueuil, Québec, J4H2T5</span>
              </li>
              <li>
                <a 
                  href="tel:514-609-4050" 
                  className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                >
                  <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span>514-609-4050</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Heures d&apos;ouverture
            </h3>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div>
                  <p>Lundi – Vendredi: 7h – 20h</p>
                  <p>Samedi: 8h – 19h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Suivez-nous
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/lacantineco"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} La Cantine & Co. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
