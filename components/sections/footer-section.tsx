import { Logo } from "@/components/logo"
import Link from "next/link"

const links = [
  {
    group: "Company",
    items: ["About Us", "Our Services", "Pricing", "Testimonials", "Contact"],
  },
  {
    group: "Services",
    items: [
      "Leak Repair",
      "Drain Cleaning",
      "Pipe Installation",
      "Water Heater Repair",
      "Emergency Plumbing",
    ],
  },
  {
    group: "Legal",
    items: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
]

export default function FooterSection() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-md space-y-4">
            <Link href="/" aria-label="Home" className="inline-block">
              <Logo />
            </Link>
            <p className="text-muted-foreground">
              Reliable plumbing services in Cagayan de Oro.  
              Fast response, honest pricing, and 24/7 emergency support.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {links.map((section) => (
              <div key={section.group} className="text-muted-foreground">
                <h4 className="mb-3 text-xs font-medium uppercase tracking-widest">
                  {section.group}
                </h4>
                <ul className="space-y-2 text-sm">
                  {section.items.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px" />

        {/* Bottom */}
        <div className="flex flex-col gap-2 text-xs md:flex-row md:justify-between">
          <span>
            © {new Date().getFullYear()} PrimeFlow Plumbing
          </span>
          <span>Serving Cagayan de Oro & nearby areas</span>
        </div>
      </div>
    </footer>
  )
}
