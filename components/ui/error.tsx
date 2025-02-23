import { AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ErrorMessageProps {
  className?: string
  title?: string
  message: string
}

export function ErrorMessage({ className, title = "Erreur", message }: ErrorMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-lg border border-destructive/50 bg-destructive/10 p-4",
        className
      )}
    >
      <div className="flex items-center space-x-2">
        <AlertCircle className="h-5 w-5 text-destructive" />
        <h3 className="font-medium text-destructive">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-destructive/90">{message}</p>
    </motion.div>
  )
} 