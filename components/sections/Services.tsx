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
                className="group block h-full overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/0" />
                  <div className="absolute bottom-0 left-0 flex size-14 items-center justify-center rounded-tr-2xl bg-primary">
                    <service.icon className="size-7 text-primary-foreground" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
