import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-crystal-gradient text-white shadow-mineral hover:shadow-crystal hover:-translate-y-0.5 active:translate-y-0 border-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-mineral hover:shadow-crystal hover:-translate-y-0.5",
        outline:
          "border-2 border-copper-200 bg-background hover:bg-copper-50 hover:border-copper-400 hover:text-copper-700 shadow-sm hover:shadow-mineral",
        secondary:
          "bg-stone-100 text-stone-700 hover:bg-stone-200 shadow-sm hover:shadow-mineral hover:-translate-y-0.5 border border-stone-200",
        ghost: "hover:bg-copper-50 hover:text-copper-700 shadow-none hover:shadow-sm",
        link: "text-copper-600 underline-offset-4 hover:underline hover:text-copper-700 shadow-none",
        mineral: "bg-crystal-gradient text-white font-bold shadow-crystal hover:shadow-depth hover:-translate-y-1 active:translate-y-0 border-0 text-shadow",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-xl",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-2xl px-8 text-base font-bold",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isMineral = variant === "mineral" || variant === "default"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Shimmer effect for mineral buttons */}
        {isMineral && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transform -translate-x-full hover:translate-x-full transition-all duration-700 ease-out pointer-events-none" />
        )}
        {props.children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }