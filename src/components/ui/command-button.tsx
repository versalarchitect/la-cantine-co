import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"

interface CommandButtonProps extends Omit<ButtonProps, 'asChild'> {
  href?: string
  className?: string
}

export function CommandButton({ className, href = "https://buy.stripe.com/6oE4j80Qb7Kn4YE28d", ...props }: CommandButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "h-14 gap-3 bg-primary hover:bg-primary/90 text-primary-foreground",
        "font-display text-lg px-8 border-4 border-primary/20",
        "hover:border-primary transition-all duration-300",
        "hover:scale-105 transform",
        className
      )}
      {...props}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center">
        Commander maintenant <ShoppingBag className="h-6 w-6 ml-2" />
      </Link>
    </Button>
  )
} 