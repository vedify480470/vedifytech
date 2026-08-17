"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const skills = [
  { label: "Software Development", value: 92 },
  { label: "Cyber Security", value: 80 },
  { label: "Artificial Intelligence", value: 95 },
  { label: "Web Development", value: 78 },
];

export function AboutSummary() {
  return (
    <section className="overflow-hidden py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto h-[520px] w-full max-w-lg sm:h-[620px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute left-0 top-0 z-0 h-52 w-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 sm:w-56"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative size-full"
              >
                <Image
                  src="/images/about-part-1.png"
                  alt="Team member reviewing documents"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute left-1/4 top-16 z-10 h-96 w-80 overflow-hidden rounded-2xl shadow-xl sm:h-[28rem] sm:w-96"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="relative size-full"
              >
                <Image
                  src="/images/about-part-2.png"
                  alt="Developers collaborating on a laptop"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-0 left-0 z-0 h-56 w-64 overflow-hidden rounded-2xl shadow-lg sm:h-64 sm:w-72"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="relative size-full"
              >
                <Image
                  src="/images/about-part-3.png"
                  alt="Team working together in the office"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-4 bg-primary" />
              <span className="h-0.5 w-8 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              We Are Increasing Business Success With Technology
            </h2>

            <p className="mt-4 max-w-xl text-muted-foreground">
              Over 25 years working in IT services developing software
              applications and mobile apps for clients all over the world.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.label}</span>
                    <span className="font-semibold">{skill.value}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#03228f] to-[#0e73e4]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-10 rounded-full bg-gradient-to-r from-[#03228f] to-[#0e73e4] hover:opacity-90"
              render={<Link href="/about" />}
            >
              Learn-More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
