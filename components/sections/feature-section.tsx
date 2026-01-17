import type { ComponentType } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardRow, CardTitle } from '@/components/ui/card'

import { cn } from '@/lib/utils'

type Features = {
  icon: ComponentType
  title: string
  description: string
  cardBorderColor: string
  avatarTextColor: string
  avatarBgColor: string
}[]

const Features = ({ featuresList }: { featuresList: Features }) => {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Plumbing Emergency? We’re Available 24/7</h2>
          <p className='text-muted-foreground text-xl'>
            Fast, reliable plumbing services when you need them most. From sudden leaks to major pipe issues, our skilled plumbers respond quickly to restore safety and comfort to your home or business.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((features, index) => (
            <Card
              key={index}
              className={cn(
                "group shadow-none transition-colors duration-300",
                features.cardBorderColor
              )}
            >
              <CardRow>
                <Avatar
                  className={cn(
                    "mt-1 size-10 shrink-0 rounded- mx-2",
                    features.avatarTextColor
                  )}
                >
                  <AvatarFallback
                    className={cn(
                      `
                      rounded-md
                      [&>svg]:size-6
                      [&>svg]:transition-transform
                      group-hover:[&>svg]:scale-125
                      group-hover:[&>svg]:animate-[wiggle_1.0s_ease-in-out_infinite]
                      `,
                      features.avatarBgColor
                    )}
                  >
                    <features.icon />
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col gap-1">
                  <CardTitle>{features.title}</CardTitle>
                  <CardDescription>{features.description}</CardDescription>
                </div>
              </CardRow>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
