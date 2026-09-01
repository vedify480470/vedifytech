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
  title: "Vedify Tech — Technology, Digital Marketing & Event Management",
  description:
    "Vedify Tech is a Varanasi-based technology, digital marketing, and event management company helping businesses build, grow, and connect. A brand of Vedify Solutions.",
  openGraph: {
    title: "Vedify Tech — Technology, Digital Marketing & Event Management",
    description:
      "Vedify Tech is a Varanasi-based technology, digital marketing, and event management company helping businesses build, grow, and connect. A brand of Vedify Solutions.",
    url: "https://www.vedifytech.com",
    siteName: "Vedify Tech",
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
