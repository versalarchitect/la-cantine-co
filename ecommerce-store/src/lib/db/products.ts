export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  featured?: boolean;
  imageUrl?: string;
}

interface GetProductsOptions {
  featured?: boolean;
  limit?: number;
}

// Mock data for now - replace with actual DB call later
const mockProducts: Product[] = [
  {
    id: "huile-olive-1l",
    name: "Huile d'Olive Coratina Extra Vierge 1L",
    description: `Notre huile d'olive Coratina est une huile d'olive extra vierge (EVOO) exceptionnelle, produite dans la région des Pouilles (Puglia) en Italie du Sud. Cette variété prestigieuse est reconnue mondialement pour son profil gustatif robuste et sa qualité supérieure.

Caractéristiques distinctives:
• Un goût intense caractérisé par une amertume prononcée et une belle ardence, signes de sa haute teneur en polyphénols
• Des notes aromatiques vertes évoquant l'herbe fraîchement coupée, la tomate verte, l'artichaut et parfois l'amande
• Une huile parfaitement équilibrée malgré son intensité
• Une robe d'un vert doré brillant, signe de sa fraîcheur et de sa qualité

Bienfaits pour la santé:
• Exceptionnellement riche en polyphénols antioxydants
• Haute teneur en acide oléique (acides gras mono-insaturés)
• Propriétés anti-inflammatoires et cardioprotectrices

Origine et Terroir:
• Produite dans les Pouilles selon des méthodes traditionnelles de pressage à froid
• Cultivée sur un terroir calcaire aux sols riches en minéraux
• Climat méditerranéen idéal avec des hivers doux et des étés chauds
• Certains de nos lots sont certifiés DOP (Denominazione di Origine Protetta)

Suggestions d'utilisation:
• Parfaite en finition sur les grillades et les viandes
• Sublime les salades et les soupes de légumes
• Idéale pour les bruschetta et la cuisine méditerranéenne
• À utiliser crue pour préserver ses qualités nutritionnelles exceptionnelles`,
    price: 2995,
    featured: true,
    imageUrl: "/images/products/olive-oil.jpg"
  },
  // Add more products as needed
];

export async function getProducts(options: GetProductsOptions = {}): Promise<Product[]> {
  let products = [...mockProducts];
  
  if (options.featured !== undefined) {
    products = products.filter(p => p.featured === options.featured);
  }
  
  if (options.limit !== undefined) {
    products = products.slice(0, options.limit);
  }
  
  return products;
}

export async function getProductById(id: string): Promise<Product | null> {
  return mockProducts.find(p => p.id === id) || null;
} 