import { Code2, TrendingUp, PartyPopper } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const pillars = [
  {
    icon: Code2,
    title: "Build with Technology",
    description: "Websites, software, applications and digital infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Grow with Digital Marketing",
    description: "Online visibility, target-audience reach and lead generation.",
  },
  {
    icon: PartyPopper,
    title: "Connect through Events",
    description: "Meaningful experiences that bring brands and audiences together.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Vedify Solutions"
          title="One Partner. Three Powerful Business Solutions."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} direction="up" delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-background p-8 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                  <pillar.icon className="size-7 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
