import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        `
        group
        relative
        flex flex-col gap-6
        rounded-xl border
        bg-card text-card-foreground
        py-6

        /* base */
        shadow-sm
        transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]

        /* hover */
        hover:-translate-y-1
        hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]
        hover:border-foreground/20
        hover:bg-card/95

        /* subtle highlight */
        before:pointer-events-none
        before:absolute before:inset-0
        before:rounded-xl
        before:bg-gradient-to-br
        before:from-white/5 before:to-transparent
        before:opacity-0
        before:transition-opacity before:duration-300
        hover:before:opacity-100
        `,
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        `
        @container/card-header
        grid auto-rows-min grid-rows-[auto_auto]
        items-start gap-2
        px-6
        has-data-[slot=card-action]:grid-cols-[1fr_auto]
        [.border-b]:pb-6
        `,
        className
      )}
      {...props}
    />
  )
}

function CardRow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-row"
      className={cn(
        `
        flex items-center gap-4
        px-6
        `,
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        `
        text-base font-semibold leading-tight
        tracking-tight
        transition-colors
        group-hover:text-foreground
        `,
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        `
        text-sm text-muted-foreground
        leading-relaxed
        transition-colors
        group-hover:text-foreground/80
        `,
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        `
        col-start-2 row-span-2 row-start-1
        self-start justify-self-end
        `,
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        `
        px-6
        text-sm leading-relaxed
        `,
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        `
        flex items-center justify-between
        px-6
        [.border-t]:pt-6
        `,
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardRow,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
