export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  featured?: boolean;
  imageUrl?: string;
  inventory?: number;
  category?: string;
  features?: string[];
  benefits?: string[];
} 