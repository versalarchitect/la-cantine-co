import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"

interface CommandButtonProps extends Omit<ButtonProps, 'asChild'> {
  href?: string
  className?: string
}

export function CommandButton({ className, ...props }: CommandButtonProps) {
  const buttonContent = (
    <Button 
      size="lg" 
      className={cn("gap-2 hover:translate-y-[-1px] transition-transform", className)} 
      {...props}
    >
      Commander <ShoppingBag className="h-4 w-4" />
    </Button>
  )

  return <Link href="/produits/huile-olive-1l">{buttonContent}</Link>
} 