import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Lightbulb,
  BadgeCheck,
  MessageSquare,
  Sparkles,
  Users,
  TrendingUp,
  CheckCircle2,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vedify Tech is a growing technology and business solutions brand under Vedify Solutions, offering IT solutions, digital marketing, and event management services.",
};

const missionPoints = [
  "Deliver innovative and reliable IT solutions",
  "Help businesses establish a strong digital presence",
  "Create data-driven digital marketing strategies",
  "Provide creative and professional event solutions",
  "Understand the unique needs of every client",
  "Deliver quality within practical budgets",
  "Build long-term partnerships with clients",
  "Continuously improve through technology and innovation",
];

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Continuously exploring new ideas, technologies and strategies." },
  { icon: BadgeCheck, title: "Quality", description: "Delivering reliable, professional and high-quality solutions." },
  { icon: MessageSquare, title: "Transparency", description: "Clear communication and honest business practices." },
  { icon: Sparkles, title: "Creativity", description: "Bringing creative thinking to digital campaigns, technology and events." },
  { icon: Users, title: "Customer First", description: "Starting every solution by understanding the client's actual requirements." },
  { icon: TrendingUp, title: "Growth", description: "Measuring success by the value and growth created for clients." },
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
      <PageHero title="About" image="/images/aboutus.jpg" />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="up" className="relative mx-auto w-full max-w-md">
              <div
                className="absolute -inset-4 -z-10 rounded-[3rem] bg-primary/10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative aspect-square w-full overflow-hidden rounded-[3rem] rounded-tr-none shadow-xl">
                <Image
                  src="/images/about-3.png"
                  alt="Vedify Tech team collaborating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 -z-10 grid grid-cols-5 gap-2"
                aria-hidden="true"
              >
                {Array.from({ length: 15 }).map((_, i) => (
                  <span key={i} className="size-1.5 rounded-full bg-primary/30" />
                ))}
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <SectionHeading
                align="left"
                eyebrow="About us"
                title="Empowering businesses with intelligent digital solutions."
                description="Vedify Solutions is a professional software and digital business marketing organisation delivering integrated technology and growth solutions to businesses across industries. With its headquarters in Pune, India, and an international office in Dubai, UAE, we operate with a global outlook while maintaining strong regional expertise."
              />
              <p className="mt-4 max-w-xl text-muted-foreground">
                We provide end-to-end services encompassing custom software
                development, digital transformation, and online business
                marketing. Our solutions are designed to enhance operational
                efficiency, strengthen brand presence, and enable sustainable
                business growth in an increasingly competitive digital
                environment.
              </p>
              <Button
                size="lg"
                className="mt-8 rounded-full bg-primary hover:opacity-90"
                render={<Link href="/contact" />}
              >
                Get in Touch
                <ArrowRight className="size-4" />
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-background p-8">
            <Eye className="size-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Our Vision</h3>
            <p className="mt-2 text-muted-foreground">
              To become a trusted and innovative business solutions brand
              that empowers businesses through technology, digital growth
              and impactful experiences. We envision a future where
              businesses can access the right combination of technology,
              digital marketing and event solutions from one trusted
              partner.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8">
            <Target className="size-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
            <p className="mt-2 text-muted-foreground">
              Our mission is to help businesses build stronger brands, adopt
              smarter technology and create meaningful connections with
              their customers.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {missionPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Core Values" title="What guides our work" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
          <SectionHeading eyebrow="Team" title="The people behind Vedify Tech" />
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

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl bg-primary p-10 text-center text-white">
            <Quote className="mx-auto size-8 text-white/70" />
            <h3 className="mt-4 text-xl font-bold">Our Promise</h3>
            <p className="mt-3 text-white/80">
              At Vedify Tech, we believe every business deserves solutions
              that are smart, practical and scalable. We listen to your
              requirements, understand your challenges and create solutions
              designed around your business goals.
            </p>
            <p className="mt-4 font-semibold">
              Your business goals become our project goals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
