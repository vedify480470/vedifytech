"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            We Are Offering All Kinds of
            <br />
            IT Solutions Services
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-1.5">
            <span className="h-0.5 w-10 rounded-full bg-primary" />
            <span className="size-2 rounded-full bg-primary" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="block h-full rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="flex size-20 items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={96}
                    height={96}
                    className="size-full object-contain"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-muted-foreground">
                  {service.shortDescription}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
