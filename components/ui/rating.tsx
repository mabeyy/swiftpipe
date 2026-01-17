"use client"

import * as React from "react"
import { StarIcon, type LucideProps } from "lucide-react"
import { cn } from "@/lib/utils"

type RatingVariant = "default" | "yellow" | "destructive"

type RatingProps = {
  value?: number
  defaultValue?: number
  max?: number
  size?: number
  precision?: number
  readOnly?: boolean
  disabled?: boolean
  variant?: RatingVariant
  icon?: React.ReactElement<LucideProps>
  className?: string
  onValueChange?: (value: number) => void
  onValueHover?: (value: number) => void
}

const variantColor = (variant: RatingVariant) => {
  switch (variant) {
    case "yellow":
      return "text-amber-500 dark:text-amber-400"
    case "destructive":
      return "text-red-500"
    default:
      return "text-foreground"
  }
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export function Rating({
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  size = 20,
  precision = 1,
  readOnly = false,
  disabled = false,
  variant = "default",
  icon = <StarIcon />,
  className,
  onValueChange,
  onValueHover,
}: RatingProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue
  const isInteractive = !readOnly && !disabled

  const stars = React.useMemo(
    () => Array.from({ length: max }, (_, i) => i + 1),
    [max]
  )

  const updateValue = (v: number) => {
    const next = clamp(v, 0, max)
    if (!isControlled) setInternalValue(next)
    onValueChange?.(next)
  }

  const handleHover = (v: number) => {
    setHoverValue(v)
    onValueHover?.(v)
  }

  const handleLeave = () => {
    setHoverValue(null)
    onValueHover?.(0)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isInteractive) return

    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault()
      updateValue(value + precision)
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault()
      updateValue(value - precision)
    }

    if (e.key === " " || e.key === "Enter") {
      e.preventDefault()
      updateValue(value === 0 ? precision : 0)
    }
  }

  return (
    <div
      role={readOnly ? "img" : "slider"}
      aria-label={`${value} of ${max} stars`}
      tabIndex={isInteractive ? 0 : -1}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {stars.map((star) => {
        const activeValue = hoverValue ?? value

        // How much of THIS star should be filled (0 → 1)
        const fill = clamp(activeValue - (star - 1), 0, 1)

        return (
          <span
            key={star}
            className={cn(
              "relative inline-flex",
              isInteractive && "cursor-pointer"
            )}
            onMouseMove={() =>
              isInteractive &&
              handleHover(star - 1 + precision)
            }
            onMouseLeave={handleLeave}
            onClick={() => isInteractive && updateValue(star)}
          >
            {/* Empty star */}
            {React.cloneElement(icon, {
              size,
              className:
                "fill-muted-foreground/20 stroke-muted-foreground/20",
              "aria-hidden": true,
            })}

            {/* Filled overlay (clipped) */}
            {fill > 0 && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                {React.cloneElement(icon, {
                  size,
                  className: cn(
                    "fill-current",
                    variantColor(variant)
                  ),
                  "aria-hidden": true,
                })}
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}
