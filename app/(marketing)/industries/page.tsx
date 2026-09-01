import type { Metadata } from "next";
import Image from "next/image";
import { HeartPulse, Landmark, ShoppingCart, GraduationCap, Truck, Building2, Clapperboard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industries Vedify serves, from healthcare to logistics.",
};

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Patient portals, EHR integrations, and HIPAA-aware systems built for reliability.",
    image: "/images/industry/healthcare_industry.png",
  },
  {
    icon: Landmark,
    title: "FinTech",
    description: "Secure dashboards, payment flows, and compliance-ready financial platforms.",
    image: "/images/industry/fintech_industry.png",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Ecommerce",
    description: "Storefronts, inventory systems, and checkout experiences that convert.",
    image: "/images/industry/retail_ecommerce.png",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Learning platforms, school ERPs, and tools that scale with enrollment.",
    image: "/images/industry/education_industry.png",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Dispatch, fleet tracking, and route optimization software.",
    image: "/images/industry/logistics_industry.png",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Listing platforms, CRM tools, and property management dashboards.",
    image: "/images/industry/real_estate_industry.png",
  },
  {
    icon: Clapperboard,
    title: "Media & Entertainment",
    description: "Streaming platforms, content management systems, and audience engagement tools.",
    image: "/images/industry/media_entertainment.png",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero title="Industries" image="/images/industry/industry_prohead.png" />

      <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Industries we serve"
          description="We bring domain-aware engineering to every sector we work in."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} direction="up" delay={(i % 3) * 0.1}>
              <Card className="overflow-hidden py-0">
                <div className="relative h-40 w-full">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/0" />
                  <div className="absolute bottom-0 left-0 flex size-12 items-center justify-center rounded-tr-xl bg-primary">
                    <industry.icon className="size-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="pb-6">
                  <h3 className="font-semibold">{industry.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
