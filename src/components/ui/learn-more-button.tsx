import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"

interface LearnMoreButtonProps extends Omit<ButtonProps, 'asChild'> {
  className?: string
}

export function LearnMoreButton({ className, ...props }: LearnMoreButtonProps) {
  return (
    <Button
      asChild
      variant="outline" 
      size="lg"
      className={cn(
        "h-12 gap-2 border-2 border-foreground/20",
        "font-display text-base px-6",
        "hover:border-foreground/40 transition-all duration-300",
        className
      )}
      {...props}
    >
      <Link href="/#histoire" className="flex items-center">
        En savoir plus
      </Link>
    </Button>
  )
}