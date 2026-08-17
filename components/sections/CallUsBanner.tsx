"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "20", label: "Happy Clients" },
  { value: "30+", label: "Companies" },
  { value: "50+", label: "Projects Done" },
];

export function CallUsBanner() {
  return (
    <section className="relative overflow-hidden bg-[#000060] pt-16 sm:pt-20">
      <Image
        src="/images/testimonial-bg.png"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover object-center opacity-40"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-sm lg:mx-0"
          >
            <Image
              src="/images/contact-here.png"
              alt="Vedify representative"
              width={657}
              height={723}
              className="w-full object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pb-12 text-center text-white lg:pb-24 lg:text-right"
          >
            <div className="relative mx-auto flex size-20 items-center justify-center rounded-full bg-white/10 lg:ml-auto lg:mr-0">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-white/40"
                animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-white/40"
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              />
              <div className="relative flex size-14 items-center justify-center rounded-full bg-white">
                <Phone className="size-6 text-primary" />
              </div>
            </div>

            <p className="mt-3 text-sm font-bold tracking-wider text-white/80">
              CALL US 24/7
            </p>
            <p className="mt-1 text-4xl font-bold sm:text-5xl">
              (+123) 456-9989
            </p>

            <p className="mx-auto mt-6 max-w-md text-white/70 lg:ml-auto lg:mr-0">
              Have any idea or project for in your mind call us or schedule
              an appointment. Our representative will reply you shortly.
            </p>

            <Button
              size="lg"
              className="mt-8 rounded-full bg-gradient-to-r from-[#03228f] to-[#0e73e4] hover:opacity-90"
              render={<Link href="/contact" />}
            >
              Let&apos;s Talk
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mx-4 mt-12 translate-y-1/2 overflow-hidden rounded-2xl bg-white px-6 py-10 shadow-2xl sm:mx-8 sm:px-12 lg:mx-16"
      >
        <Image
          src="/images/testimonial-bg.png"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover object-center opacity-70 mix-blend-multiply"
        />
        <div className="relative grid grid-cols-3 divide-x divide-border text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="h-24 sm:h-28" />
    </section>
  );
}
