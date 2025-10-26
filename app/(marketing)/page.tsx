import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Stats } from "@/components/sections/stats";
import { Steps } from "@/components/sections/steps";
import { CaseTeasers } from "@/components/sections/case-teasers";
import { FAQ } from "@/components/sections/faq";
import { LeadForm } from "@/components/forms/lead-form";
import { MiniCalculator } from "@/components/forms/mini-calculator";
import { BookingWidget } from "@/components/forms/booking-widget";
import { faqSchema, organizationSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <Script id="ld-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script
        id="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <FeatureGrid />
      <Stats />
      <section className="section" id="calculator">
        <div className="grid gap-6 md:grid-cols-2">
          <LeadForm />
          <MiniCalculator />
        </div>
      </section>
      <Steps />
      <CaseTeasers />
      <section className="section">
        <BookingWidget />
      </section>
      <FAQ />
    </>
  );
}
