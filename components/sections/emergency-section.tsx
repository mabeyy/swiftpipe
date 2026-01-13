import { Button } from '@/components/ui/button'

const EmergencySection = () => {
  return (
    <section className='bg-muted pb-16'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <div className="
          rounded-3xl
          border
          border-border/60
          bg-background
          py-8
          shadow-lg
          lg:py-10
        ">
          <div className='flex flex-wrap items-center justify-between gap-10 px-8 sm:flex-nowrap sm:px-16 lg:px-24'>
            <div className='max-w-xs lg:max-w-lg'>
              <h2 className='text-3xl font-bold tracking-tight leading-none sm:text-4xl'>+63 917 123 4567</h2>
              <p className="
                mt-2
                text-base
                text-muted-foreground
                leading-relaxed
                sm:text-lg
                opacity-90
              ">
                Plumbing Emergency? We’re Available 24/7
              </p>
            </div>
            <div className='flex flex-wrap items-center gap-6 max-md:w-full max-md:flex-col md:justify-end'>
              <Button
                className="
                  flex
                  w-[180px]
                  items-center
                  gap-3
                  rounded-xl
                  px-6
                  py-6
                  text-sm
                  font-medium
                  tracking-wide
                  shadow-sm
                  transition
                  hover:shadow-md
                "
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDAwMDAwIiBzdHlsZT0ib3BhY2l0eToxOyI+PHBhdGggIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNSA0LjVhMyAzIDAgMCAxIDMtM2gxLjM3MmMuODYgMCAxLjYxLjU4NiAxLjgxOSAxLjQybDEuMTA1IDQuNDIzYTEuODggMS44OCAwIDAgMS0uNjk0IDEuOTU1bC0xLjI5My45N2MtLjEzNS4xMDEtLjE2NC4yNDktLjEyNi4zNTJhMTEuMjkgMTEuMjkgMCAwIDAgNi42OTcgNi42OTdjLjEwMy4wMzguMjUuMDA5LjM1Mi0uMTI2bC45Ny0xLjI5M2ExLjg4IDEuODggMCAwIDEgMS45NTUtLjY5NGw0LjQyMyAxLjEwNWMuODM0LjIwOSAxLjQyLjk1OSAxLjQyIDEuODJWMTkuNWEzIDMgMCAwIDEtMyAzaC0yLjI1QzguNTUyIDIyLjUgMS41IDE1LjQ0OCAxLjUgNi43NXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
                  alt=""
                  className="size-5 invert dark:invert-0"
                />
                Call Now  
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmergencySection
