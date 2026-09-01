"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { Button } from "@/components/ui/button";

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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 max-w-2xl leading-tight"
          >
            <span className="block text-2xl text-white/70 sm:text-3xl">We build</span>
            <span className="block text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Business Websites
            </span>
            <span className="block text-xl font-bold text-primary sm:text-2xl lg:text-3xl">
              &amp; Custom Software (ERP, CRM)
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-base font-bold text-white sm:text-lg"
          >
            <span>Designing</span>
            <span className="size-1.5 rounded-full bg-primary" />
            <span>Development</span>
            <span className="size-1.5 rounded-full bg-primary" />
            <span>Branding</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-md text-lg text-white/70"
          >
            Vedify Solutions is a leading software development company
            serving businesses worldwide since 2024. We provide dynamic and
            customized digital solutions backed by a skilled team of expert
            developers, creative designers, and experienced internet
            marketers, helping businesses accelerate growth through
            innovative, scalable, and result-driven technology solutions.
          </motion.p>

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
