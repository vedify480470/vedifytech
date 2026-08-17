"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import { Button } from "@/components/ui/button";

export function ProcessTimeline() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl px-10 py-20"
            style={{
              backgroundImage:"url(/images/process-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <span className="text-xs font-semibold tracking-widest text-white/70">
              WORKING PROCESS
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
              Our Working Process - How We Work For Our Customers
            </h2>
            <Button
              size="lg"
              className="mt-10 rounded-lg bg-gradient-to-r from-[#03228f] to-[#5b8def] hover:opacity-90"
              render={<Link href="/contact" />}
            >
              Contact Us
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <span className="text-3xl font-extrabold text-primary">
                  {step.step}.
                </span>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
