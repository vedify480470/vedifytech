"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
      <Image
        src="/images/banner-1.jpg"
        alt="Team collaborating in a modern office"
        fill
        priority
        quality={90}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/65 via-neutral-900/40 to-neutral-900/10" />

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
            className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide sm:text-sm"
          >
            Technology &bull; Digital Marketing &bull; Event Management
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block">Build, Grow</span>
            <span className="block">&amp; Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-md text-lg text-white/80"
          >
            Vedify Tech brings IT solutions, digital marketing, and event
            management together under one roof to help your business build,
            grow, and connect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#03228f] to-[#0e73e4] hover:opacity-90"
              render={<Link href="/contact" />}
            >
              Start a Project
              <ArrowRight className="size-4" />
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
