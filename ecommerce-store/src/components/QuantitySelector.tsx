import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export function QuantitySelector({ quantity, onChange }: QuantitySelectorProps) {
  const quantityId = "quantity-input";
  
  return (
    <div className="space-y-4">
      <label
        htmlFor={quantityId}
        className="block text-sm uppercase tracking-[0.15em] text-[#766B63]"
      >
        Quantità
      </label>
      <input
        id={quantityId}
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => onChange(Math.max(1, Number.parseInt(e.target.value)))}
        className="w-24 px-3 py-2 bg-transparent border border-[#9C8B7D] text-[#2C2824] focus:outline-none focus:ring-1 focus:ring-[#2C2824]"
      />
    </div>
  );
} 