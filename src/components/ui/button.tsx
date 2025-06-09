import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-red-500/25",
        outline:
          "border border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 shadow-md hover:shadow-lg",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-md hover:shadow-lg",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-gray-900 underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-blue-800 to-sky-500 text-white hover:from-blue-900 hover:to-sky-600 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
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
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Background shine effect for gradient buttons */}
        {variant === "gradient" && (
          <span 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none" 
            style={{ width: "200%" }} 
          />
        )}
        
        {/* Button content */}
        <span className="relative z-10">
          {children}
        </span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 