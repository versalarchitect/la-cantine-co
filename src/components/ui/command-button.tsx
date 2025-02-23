import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"

interface CommandButtonProps extends Omit<ButtonProps, 'asChild'> {
  href?: string
  className?: string
}

export function CommandButton({ className, href = "/huile-olive", ...props }: CommandButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "h-12 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground",
        "font-display text-base px-6 border-2 border-primary/20",
        "hover:border-primary transition-all duration-300",
        className
      )}
      {...props}
    >
      <Link href={href} className="flex items-center">
        Commander <ShoppingBag className="h-5 w-5 ml-2" />
      </Link>
    </Button>
  )
} 