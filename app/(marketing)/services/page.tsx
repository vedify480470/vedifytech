import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the full range of software development services Vedify offers.",
};

export default function ServicesPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to ship software"
          description="From design to development to long-term support, we cover the full product lifecycle."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="h-full transition-colors hover:border-primary/40">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="size-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more <ArrowRight className="size-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
