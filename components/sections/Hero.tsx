"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { Button } from "@/components/ui/button";
import FoldText from "@/components/FoldText";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
      <Image
        src="/images/banner-1.jpg"
        alt="Team collaborating in a modern office"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-neutral-900/65 via-neutral-900/40 to-neutral-900/10" />

      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-background sm:h-20"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <div className="container relative mx-auto grid grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-10">
        <div className="text-white">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary sm:text-base"
          >
            <span className="h-0.5 w-8 bg-primary" />
            Innovate &middot; Build &middot; Grow
          </motion.span>

          <h1 className="mt-5 max-w-2xl leading-tight">
            <div className="block">
              <FoldText
                text="We build"
                splitBy="word"
                hinge="top"
                trigger="mount"
                fontSize="clamp(24px, 4vw, 30px)"
                fontWeight={600}
                color="rgba(255,255,255,0.7)"
              />
            </div>
            <div className="mt-1 block">
              <FoldText
                text="Business Websites"
                splitBy="word"
                hinge="top"
                trigger="mount"
                stagger={0.05}
                fontSize="clamp(30px, 6vw, 48px)"
                fontWeight={700}
                color="#ffffff"
              />
            </div>
            <div className="mt-1 block">
              <FoldText
                text="& Custom Software (ERP, CRM)"
                splitBy="word"
                hinge="top"
                trigger="mount"
                stagger={0.04}
                fontSize="clamp(20px, 4vw, 30px)"
                fontWeight={700}
                color="var(--primary)"
              />
            </div>
          </h1>

          <div className="mt-6">
            <FoldText
              text="Designing • Development • Branding"
              splitBy="word"
              hinge="top"
              trigger="mount"
              stagger={0.03}
              fontSize="clamp(16px, 2vw, 18px)"
              fontWeight={700}
              color="#ffffff"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 flex max-w-lg flex-col gap-4 text-lg text-white/70"
          >
            <p>
              Vedify Solutions is a professional software and digital
              business marketing organisation delivering integrated
              technology and growth solutions to businesses across
              industries. We operate with a global outlook while maintaining
              strong regional expertise.
            </p>
            <p>
              We provide end-to-end services encompassing custom software
              development, digital transformation, and online business
              marketing. Our solutions are designed to enhance operational
              efficiency, strengthen brand presence, and enable sustainable
              business growth in an increasingly competitive digital
              environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <div className="relative">
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
                className="relative rounded-full bg-primary hover:opacity-90"
                render={<Link href="/contact" />}
              >
                Start your project
                <ArrowRight className="size-4" />
              </Button>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              render={<Link href="/portfolio" />}
            >
              <Briefcase className="size-4" />
              See our work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <AppointmentForm />
        </motion.div>
      </div>
    </section>
  );
}
