import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"

interface OrderButtonProps extends Omit<ButtonProps, 'asChild'> {
  href?: string
  className?: string
  label?: string
  icon?: React.ReactNode
}

export function OrderButton({ 
  className, 
  href = "https://buy.stripe.com/00g9DsgP9d4H76M007", 
  label = "Commander maintenant",
  icon = <ShoppingBag className="h-6 w-6 ml-2" />,
  ...props 
}: OrderButtonProps) {
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
        {label} {icon}
      </Link>
    </Button>
  )
}

// Export the CommandButton as an alias for backward compatibility
export const CommandButton = OrderButton; 