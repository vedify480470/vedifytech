"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  { image: "/images/1.jpg", title: "Analytic Solutions", category: "IT Technology" },
  { image: "/images/2.jpg", title: "Growth Strategies", category: "IT Technology" },
  { image: "/images/3.jpg", title: "Platform Integration", category: "IT Technology" },
  { image: "/images/4.jpg", title: "Cloud Enablement", category: "IT Technology" },
  { image: "/images/5.jpg", title: "Digital Transformation", category: "IT Technology" },
];

export function Projects() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        backgroundImage: "url(/images/project-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#4141d1",
      }}
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-white/70">
            Project
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We Are Offering All Kinds of
            <br />
            IT Solutions Services
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-6">
              {projects.map((project) => (
                <CarouselItem
                  key={project.title}
                  className="pl-6 sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="overflow-hidden rounded-xl bg-white shadow-xl">
                    <div className="relative h-64 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-neutral-900">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-primary">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-10 flex justify-center gap-4">
              <CarouselPrevious className="static translate-y-0 border-0 bg-white text-primary hover:bg-white/90" />
              <CarouselNext className="static translate-y-0 border-0 bg-white text-primary hover:bg-white/90" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
