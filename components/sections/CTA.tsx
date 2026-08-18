import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Build, Grow &amp; Connect?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Whether you need a website, software solution, digital marketing
            strategy, or a professionally managed event, Vedify Tech is
            ready to help.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8"
            render={<Link href="/contact" />}
          >
            Start a Project
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
