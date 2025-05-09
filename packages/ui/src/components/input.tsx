import * as React from "react"

import { cn } from "@repo/ui/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "outline"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          variant === "outline" &&
            "border border-secondary/50 bg-transparent transition hover:bg-accent hover:text-accent-foreground",
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }
