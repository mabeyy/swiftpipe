import type { ComponentType, SVGProps } from "react"

import {
    Clock8Icon,
    MapPinIcon,
    BriefcaseBusinessIcon,
    PhoneIcon,
} from "lucide-react"

export type ContactInfoItem = {
    title: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
    description: string
}

export const contactInfo: ContactInfoItem[] = [
     {
        title: "Office Hours",
        icon: Clock8Icon,
        description: "Monday – Friday\n8:00 AM – 5:00 PM",
    },
    {
        title: "Main Office",
        icon: MapPinIcon,
        description: "Cagayan de Oro City\nMisamis Oriental, PH",
    },
    {
        title: "Service Area",
        icon: BriefcaseBusinessIcon,
        description: "Cagayan de Oro & Nearby Areas",
    },
    {
        title: "Contact Numbers",
        icon: PhoneIcon,
        description: "+63 917 123 4567\n(088) 856-1234",
    },
]
