'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type PricingPlan = {
  id: string
  title: string
  description: string
  monthly: number
}[]

const PricingSection = ({ pricingData }: { pricingData: PricingPlan }) => {
  const [api, setApi] = React.useState<any>(null)
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section>
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            Choose the Best Plumbing Solution for You
          </h2>
          <p className="text-muted-foreground text-xl">
            Compare our services and get the reliable plumbing help you need—fast and hassle-free.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{ align: "center", loop: true }}
          className="relative mx-auto max-w-4xl"
        >
          <CarouselContent className="-ml-6">
            {pricingData.map((plan) => (
              <CarouselItem
                key={plan.id}
                className="pl-6 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col justify-between p-8">
                    <div className="space-y-5">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {plan.title}
                      </h3>

                      <div className="flex items-end gap-1">
                        <span className="text-muted-foreground text-lg">₱</span>
                        <span className="text-primary text-5xl font-bold leading-none">
                          {plan.monthly}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {plan.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex justify-center gap-4">
            <CarouselPrevious className="disabled:bg-primary/10 disabled:text-primary rounded-md disabled:opacity-100 " />
            <CarouselNext className="disabled:bg-primary/10 disabled:text-primary rounded-md disabled:opacity-100" />
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {pricingData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  current === index
                    ? "w-6 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default PricingSection
