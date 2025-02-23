import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CartList } from "./CartList"
import { CartSummary } from "./CartSummary"

export function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Panier</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col gap-6">
          <CartList />
          <CartSummary />
        </div>
      </SheetContent>
    </Sheet>
  )
} 