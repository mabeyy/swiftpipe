import type { ComponentType } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MapWithCircle } from "@/components/cdo-map"

type ContactInfo = {
  title: string
  icon: ComponentType
  description: string
}[]

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-5 max-w-5xl text-center space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            We’re here to answer your questions and help with any plumbing concerns.
          </p>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Map */}
          <div className="
            relative
            overflow-hidden
            rounded-2xl
            border
            bg-background
            shadow-lg
          ">
            {/* Soft gradient overlay */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                bg-gradient-to-t
                from-background/40
                via-transparent
                to-transparent
              "
            />

            {/* Subtle noise / texture (optional, looks premium) */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                opacity-[0.03]
              "
            />

  <MapWithCircle />
</div>

          {/* Content */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="
                    border-none
                    bg-background/60
                    shadow-sm
                    backdrop-blur-sm
                  "
                >
                  <CardContent className="
                    flex
                    flex-col
                    items-center
                    gap-3
                    text-center
                  ">
                    {/* Icon */}
                    <Avatar className="size-8 border">
                      <AvatarFallback className="bg-transparent [&>svg]:size-4">
                        <info.icon />
                      </AvatarFallback>
                    </Avatar>

                    {/* Text */}
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">
                        {info.title}
                      </h4>
                      <div className="text-muted-foreground text-xs leading-snug">
                        {info.description.split("\n").map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
