import { product } from '@/config/product';

export function ProductFeatures() {
  return (
    <div className="pt-12 border-t border-[#9C8B7D]">
      <h3 className="font-serif italic text-3xl mb-4">
        Caratteristiche del Prodotto
      </h3>
      <div className="w-12 h-[1px] bg-[#9C8B7D] mb-8" />
      <ul className="space-y-6">
        {product.details.map((detail) => (
          <li key={detail} className="flex items-start group">
            <span className="mr-4 font-serif text-lg text-[#9C8B7D]">
              •
            </span>
            <span className="text-[#4A443E] font-light group-hover:text-[#2C2824] transition-colors">
              {detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
} 