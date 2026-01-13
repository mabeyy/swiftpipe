import * as React from "react"
import { cn } from "@/lib/utils"

type ButtonIntent = "primary" | "secondary" | "outline" | "danger" | "link"
type ButtonSize = "sm" | "md" | "lg" | "icon"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: ButtonIntent
  size?: ButtonSize
  rounded?: "sm" | "md" | "lg" | "full"
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-50"

const intentStyles: Record<ButtonIntent, string> = {
  primary: `
    bg-black text-white
    hover:bg-gray-900
    hover:-translate-y-0.5
    hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]
    active:translate-y-0
    active:shadow-[0_4px_12px_rgba(0,0,0,0.4)]
  `,
  secondary:
    "bg-gray-200 text-black hover:bg-gray-300",
  outline:
    "border border-black text-black hover:bg-black hover:text-white",
  danger:
    "bg-red-600 text-white hover:bg-red-700",
  link:
    "bg-transparent text-black hover:underline",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10",
}

const roundedStyles = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      intent = "primary",
      size = "md",
      rounded = "md",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          intentStyles[intent],
          sizeStyles[size],
          roundedStyles[rounded],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
