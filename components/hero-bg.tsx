"use client"

import Lottie from "lottie-react"
import heroBg from "@/assets/hero-bg.json"

export function HeroBgAnimation() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute inset-0 -z-30
        overflow-hidden
        blur-[0.5px]
      "
    >
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-gradient-to-t
          from-background/0
          to-background/60
        "
      />

      <Lottie
        animationData={heroBg}
        autoplay
        loop
        className="
          h-full w-full
          scale-110
          object-cover
          opacity-100
          saturate-90
        "
      />
    </div>
  )
}
