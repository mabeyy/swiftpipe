"use client"

import Link from "next/link"
import Image from "next/image"
import type { Variants } from "motion/react"
import { Button } from "@/components/ui/button"
import { TextEffect } from "@/components/ui/text-effect"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { HeroHeader } from "@/components/header"
import { HeroBgAnimation } from "@/components/hero-bg"


const backgroundImageVariants: {
  container: Variants
  item: Variants
} = {
  container: {
    visible: {
      transition: {
        delayChildren: 1,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 2,
      },
    },
  },
}

const buttonGroupVariants: {
  container: Variants
  item: Variants
} = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.75,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden">
        {/* Decorative background blobs */}
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="absolute left-0 top-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute left-0 top-0 h-320 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="absolute left-0 top-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section>
          <div className="relative py-24 md:py-36 overflow-hidden">
            <HeroBgAnimation />

            <AnimatedGroup
                variants={backgroundImageVariants}
                className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
            >
                <Image
                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                alt="Plumbing service background"
                className="hidden size-full dark:block"
                width={3276}
                height={4095}
                priority
                />
            </AnimatedGroup>


            {/* Radial fade overlay */}
            <div
              aria-hidden
                  className="absolute inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            {/* Content */}
            <div className="relative py-8 mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="
                    mx-auto
                    mt-8
                    max-w-4xl
                    text-balance
                    text-5xl
                    font-semibold
                    leading-[1.05]
                    tracking-tight
                    md:text-7xl
                    lg:mt-16
                    xl:text-[5.25rem]
                    "
                >
                  Fast & Reliable Plumbing Services You Can Trust
                </TextEffect>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg font-semibold"
                >
                  24/7 Emergency • Licensed • Affordable
                </TextEffect>

                {/* CTA Buttons */}
                <AnimatedGroup
                  variants={buttonGroupVariants}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >

                  <Button
                    size="lg"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <Link href="#pricing">
                      <span className="text-nowrap">Call Now</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
