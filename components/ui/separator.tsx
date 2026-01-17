"use client"

import React from "react"
import { cn } from "@/lib/utils"

type SeparatorProps = {
  direction?: "horizontal" | "vertical"
  muted?: boolean
  className?: string
}

export function Separator({
  direction = "horizontal",
  muted = true,
  className,
}: SeparatorProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "shrink-0 bg-foreground",
        direction === "horizontal"
          ? "h-px w-full"
          : "w-px h-full",
        muted && "opacity-5",
        className
      )}
    />
  )
}
