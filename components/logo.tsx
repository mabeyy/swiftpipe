import Image from "next/image"
import { cn } from "@/lib/utils"
import aboutImg from "@/assets/logo.png"

type LogoProps = {
  className?: string
  priority?: boolean
  showText?: boolean
}

export function Logo({
  className,
  priority = false,
  showText = true,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src={aboutImg}
        alt="Company logo"
        priority={priority}
        className="h-8 w-auto select-none"
      />

      {showText && (
        <span
          className="
            text-lg
            font-semibold
            tracking-tight
            text-foreground
            leading-none
          "
        >
          Swift Pipe
        </span>
      )}
    </div>
  )
}
