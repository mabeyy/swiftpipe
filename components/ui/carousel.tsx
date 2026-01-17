"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselProps = {
  opts?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  orientation?: "horizontal" | "vertical"
  className?: string
  children: React.ReactNode
}

type CarouselContextValue = {
  viewportRef: (node: HTMLElement | null) => void
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  orientation: "horizontal" | "vertical"
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const ctx = React.useContext(CarouselContext)
  if (!ctx) {
    throw new Error("Carousel components must be used inside <Carousel />")
  }
  return ctx
}

function Carousel({
  opts,
  plugins,
  orientation = "horizontal",
  className,
  children,
}: CarouselProps) {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const update = React.useCallback(() => {
    if (!embla) return
    setCanScrollPrev(embla.canScrollPrev())
    setCanScrollNext(embla.canScrollNext())
  }, [embla])

  React.useEffect(() => {
    if (!embla) return
    update()
    embla.on("select", update)
    embla.on("reInit", update)
  }, [embla, update])

  return (
    <CarouselContext.Provider
      value={{
        viewportRef,
        scrollPrev: () => embla?.scrollPrev(),
        scrollNext: () => embla?.scrollNext(),
        canScrollPrev,
        canScrollNext,
        orientation,
      }}
    >
      <div
        className={cn("relative", className)}
        role="region"
        aria-label="Carousel"
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { viewportRef, orientation } = useCarousel()

  return (
    <div ref={viewportRef} className="overflow-hidden">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({ className }: { className?: string }) {
  const { scrollPrev, canScrollPrev, orientation } = useCarousel()

  return (
    <Button
      intent="primary"
      size="icon"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={cn(
        "absolute z-10 rounded-full",
        orientation === "horizontal"
          ? "-left-14 top-3/8"
          : "top-4 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      aria-label="Previous slide"
    >
      <ArrowLeft />
    </Button>
  )
}

function CarouselNext({ className }: { className?: string }) {
  const { scrollNext, canScrollNext, orientation } = useCarousel()

  return (
    <Button
      intent="primary"
      size="icon"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={cn(
        "absolute z-10 rounded-full",
        orientation === "horizontal"
          ? "-right-14 top-3/8"
          : "bottom-4 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      aria-label="Next slide"
    >
      <ArrowRight />
    </Button>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
