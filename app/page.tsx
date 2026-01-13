import HeroSection from "@/components/sections/hero-section"
import Features from "@/components/sections/feature-section"
import PropositionSection from "@/components/sections/proposition-section"
import PricingSection from "@/components/sections/pricing-section"
import EmergencySection from "@/components/sections/emergency-section"
import TestimonialsComponent from "@/components/sections/testimonials-section"
import ContactUs from "@/components/sections/contact-us-section"
import FooterSection from "@/components/sections/footer-section"

import { PageSection } from "@/components/layouts/page-section"
import { Separator } from "@/components/ui/separator"

// data imports
import { featuresList } from "@/components/data/features"
import { images } from "@/components/data/images"
import { pricingData } from "@/components/data/pricing"
import { testimonials } from "@/components/data/testimonials"
import { contactInfo } from "@/components/data/contact"

export default function Home() {
  return (
    <> 
      <PageSection>
        <HeroSection />
      </PageSection>

      <Separator />

      <PageSection>
        <Features featuresList={featuresList} />
      </PageSection>

      <Separator />

      <PageSection>
        <PropositionSection images={images} />
      </PageSection>

      <Separator />

      <PageSection className='bg-muted'>
        <PricingSection pricingData={pricingData} />
      </PageSection>

      <EmergencySection />

      <Separator />

      <PageSection>
        <TestimonialsComponent testimonials={testimonials} />
      </PageSection>

      <Separator />

      <PageSection className='bg-muted'>
        <ContactUs contactInfo={contactInfo} />
      </PageSection>

      <Separator />

      <FooterSection />
    </>
  )
}
