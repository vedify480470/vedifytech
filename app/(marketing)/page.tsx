import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AboutSummary } from "@/components/sections/AboutSummary";
import { Services } from "@/components/sections/Services";
import { CallUsBanner } from "@/components/sections/CallUsBanner";
import { Projects } from "@/components/sections/Projects";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Vedify — Software Development Agency",
  description:
    "Vedify designs and builds web, mobile, and custom software products for startups and enterprises.",
  openGraph: {
    title: "Vedify — Software Development Agency",
    description:
      "Vedify designs and builds web, mobile, and custom software products for startups and enterprises.",
    url: "https://vedifytech.com",
    siteName: "Vedify",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <Services />
      <CallUsBanner />
      <Projects />
      <ProcessTimeline />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
