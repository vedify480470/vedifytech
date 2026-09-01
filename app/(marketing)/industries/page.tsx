import type { Metadata } from "next";
import { HeartPulse, Landmark, ShoppingCart, GraduationCap, Truck, Building2, Clapperboard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industries Vedify serves, from healthcare to logistics.",
};

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Patient portals, EHR integrations, and HIPAA-aware systems built for reliability.",
  },
  {
    icon: Landmark,
    title: "FinTech",
    description: "Secure dashboards, payment flows, and compliance-ready financial platforms.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Ecommerce",
    description: "Storefronts, inventory systems, and checkout experiences that convert.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Learning platforms, school ERPs, and tools that scale with enrollment.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Dispatch, fleet tracking, and route optimization software.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Listing platforms, CRM tools, and property management dashboards.",
  },
  {
    icon: Clapperboard,
    title: "Media & Entertainment",
    description: "Streaming platforms, content management systems, and audience engagement tools.",
  },
];

export default function IndustriesPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Industries we serve"
          description="We bring domain-aware engineering to every sector we work in."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.title}>
              <CardContent>
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <industry.icon className="size-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{industry.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
