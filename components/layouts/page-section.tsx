import * as React from "react"
import { cn } from "@/lib/utils"

interface PageSectionProps {
  children: React.ReactNode
  gap?: "sm" | "md" | "lg"
  className?: string
}

const gapClasses = {
  sm: "gap-12",
  md: "gap-16",
  lg: "gap-24",
}

const paddingClasses = {
  sm: "py-12",
  md: "py-16",
  lg: "py-24",
}

export function PageSection({
  children,
  gap = "md",
  className,
}: PageSectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col",
        gapClasses[gap],
        paddingClasses[gap],
        className
      )}
    >
      {children}
    </section>
  )
}
