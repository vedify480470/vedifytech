import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";
import type { Service } from "@/types";
import { services } from "@/data/services";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      <PageHero
        title={service.title}
        image={service.image}
        crumbs={[{ label: "Services", href: "/services" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <Reveal direction="up" className="lg:col-span-2">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <service.icon className="size-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {service.title}
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground">{service.description}</p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.features.map((feature, i) => (
                  <Reveal key={feature} direction="up" delay={(i % 4) * 0.05}>
                    <div className="flex items-center gap-3 rounded-xl border border-border p-4">
                      <CheckCircle2 className="size-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <nav className="flex flex-col gap-3">
                {services.map((item) => {
                  const isActive = item.slug === service.slug;
                  return (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className={cn(
                        "flex items-center justify-between rounded-xl border px-6 py-4 font-semibold transition-colors",
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background hover:border-primary/40 hover:text-primary"
                      )}
                    >
                      {item.title}
                      <ChevronRight className="size-4 shrink-0" />
                    </Link>
                  );
                })}
              </nav>
            </Reveal>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
