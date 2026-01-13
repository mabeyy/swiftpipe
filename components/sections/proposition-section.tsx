import { Card } from '@/components/ui/card'
import type { StaticImageData } from "next/image"
import Image from "next/image"

export default function PropositionSection({ images, }: { images: StaticImageData[]}) {
  return (
    <section    >
      <div className="mx-auto max-w-6xl space-y-12 px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-x3 text-center space-y-5">
          <h2
            className="
              text-4xl
              font-semibold
              tracking-tight
              leading-tight
              lg:text-5xl
            "
          >
            Why Choose Us
          </h2>
          <p
            className="
              mx-auto
              text-muted-foreground
              text-base
              leading-relaxed
              md:text-lg
              opacity-90
            "
          >
            We are committed to providing top-notch plumbing services with a focus 
            on quality, reliability, and customer satisfaction. Our team of experienced 
            professionals is dedicated to solving your plumbing issues efficiently and 
            effectively.
          </p>
        </div>

       {/* Image Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[420px]">
          
          {/* img 1 - BIG LEFT */}
          <Card className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
            <Image
              src={images[0]}
              alt="Plumbing service"
              fill
              className="object-cover"
              priority
            />
          </Card>

          {/* img 2 - TOP MIDDLE */}
          <Card className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
            <Image
              src={images[1]}
              alt="Plumbing service"
              fill
              className="object-cover"
              priority
            />
          </Card>

          {/* img 4 - BIG RIGHT */}
          <Card className="col-span-1 row-span-2 overflow-hidden rounded-2xl">
            <Image
              src={images[3]}
              alt="Plumbing service"
              fill
              className="object-cover"
              priority
            />
          </Card>

          {/* img 3 - SMALL UNDER img2 */}
          <Card className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
            <Image
              src={images[2]}
              alt="Plumbing service"
              fill
              className="object-cover"
              priority
            />
          </Card>

        </div>


      </div>
    </section>
  )
}
