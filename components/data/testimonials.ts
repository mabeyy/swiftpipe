export type TestimonialItem = {
    name: string
    role: string
    avatar: string
    rating: number
    content: string
}

export const testimonials: TestimonialItem[] = [
    {
    name: "Mark Villanueva",
    role: "Homeowner",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "The team responded quickly and fixed our leaking pipes the same day. Very professional and easy to work with. Highly recommended!"
  },
  {
    name: "Anna Reyes",
    role: "Small Business Owner",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "We had an emergency plumbing issue at our shop, and they handled it fast. Clear pricing and excellent service."
  },
  {
    name: "Joseph Lim",
    role: "Property Manager",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto",
    rating: 4,
    content:
      "Reliable and consistent service. They’ve handled multiple repairs across our properties with great attention to detail."
  },
  {
    name: "Maria Santos",
    role: "Homeowner",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "Friendly staff and quality work. They explained everything clearly before starting and finished on time."
  }
]
