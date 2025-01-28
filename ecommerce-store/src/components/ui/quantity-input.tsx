import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

interface QuantityInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onQuantityChange?: (quantity: number) => void
  min?: number
  max?: number
  step?: number
}

const QuantityInput = React.forwardRef<HTMLInputElement, QuantityInputProps>(
  (
    {
      className,
      type,
      min = 1,
      max = 99,
      step = 1,
      value,
      onQuantityChange,
      ...props
    },
    ref
  ) => {
    const [quantity, setQuantity] = React.useState<number>(
      typeof value === "number" ? value : 1
    )

    const handleIncrement = () => {
      const newQuantity = Math.min(quantity + step, max)
      setQuantity(newQuantity)
      onQuantityChange?.(newQuantity)
    }

    const handleDecrement = () => {
      const newQuantity = Math.max(quantity - step, min)
      setQuantity(newQuantity)
      onQuantityChange?.(newQuantity)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseInt(e.target.value, 10)
      if (Number.isNaN(value)) return

      const newQuantity = Math.max(Math.min(value, max), min)
      setQuantity(newQuantity)
      onQuantityChange?.(newQuantity)
    }

    React.useEffect(() => {
      if (typeof value === "number" && value !== quantity) {
        setQuantity(value)
      }
    }, [value, quantity])

    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input",
          className
        )}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-full rounded-r-none px-2"
          onClick={handleDecrement}
          disabled={quantity <= min}
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Decrease quantity</span>
        </Button>
        <input
          type="number"
          ref={ref}
          value={quantity}
          onChange={handleInputChange}
          className="h-full w-14 border-none bg-transparent text-center text-sm focus:outline-none focus:ring-0 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          min={min}
          max={max}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-full rounded-l-none px-2"
          onClick={handleIncrement}
          disabled={quantity >= max}
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Increase quantity</span>
        </Button>
      </div>
    )
  }
)
QuantityInput.displayName = "QuantityInput"

export { QuantityInput } 