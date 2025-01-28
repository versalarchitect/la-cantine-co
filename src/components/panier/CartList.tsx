import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2 } from "lucide-react";

export function CartList() {
  const { items, removeItem } = useCart();
  const total = items.reduce((acc, item) => acc + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-lg font-medium text-gray-900">Your cart is empty</p>
        <p className="mt-2 text-sm text-gray-500">Add items to get started</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <ScrollArea className="h-[400px] pr-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-lg border p-4"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-md">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{formatPrice(item.price)}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex items-center justify-between border-t pt-4">
        <div>
          <p className="text-base font-medium">Total</p>
          <p className="text-sm text-gray-500">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>
        </div>
        <p className="text-lg font-medium">{formatPrice(total)}</p>
      </div>
    </div>
  );
} 