import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/types";
import { CTA } from "@/components/sections/CTA";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
              <service.icon className="size-7 text-primary" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-4 text-muted-foreground">{service.description}</p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-border p-4"
              >
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
