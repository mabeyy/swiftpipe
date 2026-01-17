"use client"

import React from "react"
import { cn } from "@/lib/utils"

type CardProps = {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
}

type CardSectionProps = {
  children: React.ReactNode
  className?: string
}

export function Card({
  children,
  className,
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={cn(
        `
        relative
        flex flex-col
        rounded-xl
        border
        bg-card
        text-card-foreground
        `,
        hoverable &&
          `
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]
          `,
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardRow({ children, className }: CardSectionProps) {
  return (
    <div
      className={cn(
        "px-6 pt-6 pb-3 space-y-1",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className }: CardSectionProps) {
  return (
    <div
      className={cn(
        "px-6 py-4 text-sm leading-relaxed",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardFooter({ children, className }: CardSectionProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 pt-3 pb-6",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardTitle({
  children,
  className,
}: CardSectionProps) {
  return (
    <h3
      className={cn(
        "text-base font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  )
}

export function CardDescription({
  children,
  className,
}: CardSectionProps) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  )
}
