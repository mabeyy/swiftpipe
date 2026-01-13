"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                                Separator                                   */
/* -------------------------------------------------------------------------- */

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  direction?: "horizontal" | "vertical"
  muted?: boolean
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      direction = "horizontal",
      muted = true,
      ...props
    },
    ref
  ) => {
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        orientation={direction}
        decorative
        className={cn(
          "shrink-0 bg-foreground/10",
          direction === "horizontal" ? "h-px w-full" : "w-px h-full",
          muted && "opacity-60",
          className
        )}
        {...props}
      />
    )
  }
)

Separator.displayName = "Separator"

export { Separator }
