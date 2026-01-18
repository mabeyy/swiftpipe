import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Rating } from '@/components/ui/rating'

export type TestimonialItem = {
  name: string
  role: string
  avatar: string
  rating: number
  content: string
}

type TestimonialsComponentProps = {
  testimonials: TestimonialItem[]
}

const getInitials = (name: string) =>
  name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase()

const TestimonialsComponent = ({ testimonials }: TestimonialsComponentProps) => {
  return (
    <section id="testimonials" className="scroll-mt-100">
      <Carousel
        className='mx-auto flex max-w-7xl gap-12 px-4 max-sm:flex-col sm:items-center sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'
        opts={{ align: 'start', slidesToScroll: 1 }}
      >
        {/* Left Content */}
        <div className='space-y-4 sm:w-1/2 lg:w-1/3'>
          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
            Customer Reviews
          </h2>
          <p className='text-muted-foreground'>
            Real experiences from people we’ve helped with their plumbing needs.
          </p>

          <div className='flex items-center gap-4'>
            <CarouselPrevious className='static translate-y-0 rounded-md' />
            <CarouselNext className='static translate-y-0 rounded-md' />
          </div>
        </div>

        {/* Right Carousel */}
        <div className='relative max-w-196 sm:w-1/2 lg:w-2/3'>
          <CarouselContent className='sm:-ml-6 pt-1'>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className='sm:pl-6 lg:basis-1/2'>
                <Card className='h-full transition hover:border-black-500'>
                  <CardContent className='space-y-5'>
                    {/* Profile */}
                    <div className='flex items-center gap-3'>
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className='h-10 w-10 rounded-full object-cover'
                        />
                      ) : (
                        <div className='flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold'>
                          {getInitials(testimonial.name)}
                        </div>
                      )}

                      <div>
                        <h4 className='text-sm font-medium'>
                          {testimonial.name}
                        </h4>
                        <p className='text-xs text-muted-foreground'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <Rating
                      readOnly
                      variant='yellow'
                      value={testimonial.rating}
                      size={18}
                    />

                    <p className='text-sm leading-relaxed'>
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  )
}

export default TestimonialsComponent
