import { Users, Clock, TrendingUp, LifeBuoy, Zap, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const reasons = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Senior engineers and designers with years of production experience across industries.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Predictable sprints and transparent timelines so you always know what ships when.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Pricing",
    description: "Clear quotes with no hidden fees, scoped up front before any work begins.",
  },
  {
    icon: LifeBuoy,
    title: "Post-Launch Support",
    description: "We don't disappear after launch — ongoing maintenance and support included.",
  },
  {
    icon: Zap,
    title: "Agile Process",
    description: "Iterative development with regular demos so you can course-correct early.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous testing across every build to keep bugs out of production.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Vedify"
          title="Why teams choose to build with us"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <reason.icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{reason.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
