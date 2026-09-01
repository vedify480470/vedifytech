"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  icon?: "arrow" | "briefcase";
};

type HeroSlide = {
  image: string;
  eyebrow: string;
  headingLines: string[];
  description: string[];
  ctas: HeroCta[];
};

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/banner-1.jpg",
    eyebrow: "Innovate · Build · Grow",
    headingLines: [
      "We build Business Websites",
      "& Custom Software (ERP, CRM)",
    ],
    description: [
      "Vedify Solutions is a professional software and digital business marketing organisation delivering integrated technology and growth solutions to businesses across industries. We operate with a global outlook while maintaining strong regional expertise.",
      "We provide end-to-end services encompassing custom software development, digital transformation, and online business marketing. Our solutions are designed to enhance operational efficiency, strengthen brand presence, and enable sustainable business growth in an increasingly competitive digital environment.",
    ],
    ctas: [
      { label: "Start your project", href: "/contact", variant: "primary", icon: "arrow" },
      { label: "See our work", href: "/portfolio", variant: "outline", icon: "briefcase" },
    ],
  },
  {
    image: "/images/slide1-home1.jpg",
    eyebrow: "// Full Cycle Software Development",
    headingLines: ["From Idea", "to Product"],
    description: [
      "We are 10+ professional software engineers with more than 10 years of experience in delivering superior products.",
    ],
    ctas: [
      { label: "Start your project", href: "/contact", variant: "primary", icon: "arrow" },
      { label: "See our work", href: "/portfolio", variant: "outline", icon: "briefcase" },
    ],
  },
  {
    image: "/images/slide2-home1.jpg",
    eyebrow: "// We Create Leading Digital Products",
    headingLines: ["End-to-End", "Development"],
    description: [
      "We are 10+ professional software engineers with more than 10 years of experience in delivering superior products.",
    ],
    ctas: [
      { label: "Start your project", href: "/contact", variant: "primary", icon: "arrow" },
      { label: "See our work", href: "/portfolio", variant: "outline", icon: "briefcase" },
    ],
  },
  {
    image: "/images/slide3-home1.jpg",
    eyebrow: "// Only High-Quality Services",
    headingLines: ["Software IT", "Outsourcing"],
    description: [
      "We are 10+ professional software engineers with more than 10 years of experience in delivering superior products.",
    ],
    ctas: [
      { label: "Start your project", href: "/contact", variant: "primary", icon: "arrow" },
      { label: "See our work", href: "/portfolio", variant: "outline", icon: "briefcase" },
    ],
  },
];

const contentVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <section className="relative overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
      <AnimatePresence>
        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt="Team collaborating in a modern office"
            fill
            priority={activeSlide === 0}
            quality={90}
            sizes="100vw"
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-r from-neutral-900/65 via-neutral-900/40 to-neutral-900/10" />

      <div className="absolute bottom-24 right-6 z-10 flex items-center gap-3 sm:right-10">
        {HERO_SLIDES.map((s, index) => (
          <button
            key={s.image}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeSlide ? "w-6 bg-primary" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-background sm:h-20"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-10">
        <AnimatePresence mode="wait">
          <div key={activeSlide} className="max-w-2xl text-white">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary sm:text-base"
            >
              <span className="h-0.5 w-8 bg-primary" />
              {slide.eyebrow}
            </motion.span>

            <h1 className="mt-5 max-w-2xl leading-tight">
              {slide.headingLines.map((line, index) => (
                <motion.div
                  key={line}
                  custom={0.1 + index * 0.1}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                  className="block text-4xl font-bold sm:text-5xl"
                >
                  {line}
                </motion.div>
              ))}
            </h1>

            <motion.div
              custom={0.1 + slide.headingLines.length * 0.1}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="mt-6 flex max-w-lg flex-col gap-4 text-lg text-white/70"
            >
              {slide.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              custom={0.2 + slide.headingLines.length * 0.1}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {slide.ctas.map((cta) =>
                cta.variant === "outline" ? (
                  <Button
                    key={cta.label}
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-full border-white/30 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white"
                    render={<Link href={cta.href} />}
                  >
                    {cta.icon === "briefcase" && <Briefcase className="size-5" />}
                    {cta.label}
                  </Button>
                ) : (
                  <div key={cta.label} className="relative">
                    {!shouldReduceMotion && (
                      <>
                        <motion.span
                          className="absolute inset-0 rounded-full bg-primary/60"
                          animate={{ scale: [1, 1.4, 1.4], opacity: [0.5, 0, 0] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.span
                          className="absolute inset-0 rounded-full bg-primary/60"
                          animate={{ scale: [1, 1.4, 1.4], opacity: [0.5, 0, 0] }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: 0.7,
                          }}
                        />
                      </>
                    )}
                    <Button
                      size="lg"
                      className="relative h-14 rounded-full bg-primary px-8 text-base hover:opacity-90"
                      render={<Link href={cta.href} />}
                    >
                      {cta.label}
                      <ArrowRight className="size-5" />
                    </Button>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
