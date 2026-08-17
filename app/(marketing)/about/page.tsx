import type { Metadata } from "next";
import { Target, Eye, Heart, ShieldCheck, Users, Award } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Vedify, our mission, values, and the team behind the work.",
};

const values = [
  { icon: ShieldCheck, title: "Integrity", description: "We do what we say, and say what we mean." },
  { icon: Users, title: "Collaboration", description: "We build with our clients, not just for them." },
  { icon: Award, title: "Craftsmanship", description: "We sweat the details others skip." },
  { icon: Heart, title: "Empathy", description: "We design for real people, not just requirements." },
];

const team = [
  { name: "Alicia Ramirez", role: "Founder & CEO" },
  { name: "Marcus Lee", role: "Head of Engineering" },
  { name: "Sofia Torres", role: "Lead Product Designer" },
  { name: "Ben Walker", role: "Engineering Manager" },
  { name: "Nina Patel", role: "Head of Delivery" },
  { name: "Omar Farouk", role: "Cloud Architect" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="Building software with purpose since day one"
            description="Vedify started as a two-person studio helping local businesses ship their first web apps. Today we're a full-service software agency partnering with startups and enterprises across healthcare, fintech, retail, and logistics."
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-background p-8">
            <Target className="size-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
            <p className="mt-2 text-muted-foreground">
              To help ambitious teams turn ideas into reliable, well-crafted
              software without the overhead of building an in-house team from
              scratch.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8">
            <Eye className="size-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Our Vision</h3>
            <p className="mt-2 text-muted-foreground">
              To be the long-term technology partner behind the products
              people rely on every day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Values" title="What guides our work" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="size-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Team" title="The people behind Vedify" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
                <Avatar className="size-14">
                  <AvatarFallback>
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
