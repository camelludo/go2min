import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-mineral hover:shadow-crystal hover:-translate-y-0.5 active:translate-y-0 hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-mineral hover:shadow-crystal hover:-translate-y-0.5",
        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-mineral",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-mineral hover:-translate-y-0.5",
        ghost: "hover:bg-accent hover:text-accent-foreground shadow-none hover:shadow-sm",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
        mineral: "bg-primary text-primary-foreground font-bold shadow-crystal hover:shadow-depth hover:-translate-y-1 active:translate-y-0 hover:bg-primary/90",
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
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <span className={cn(buttonVariants({ variant, size, className }))}>
          {children}
        </span>
      )
    }
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }