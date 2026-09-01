import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function CTA() {
  return (
    <Reveal direction="up" className="relative bg-primary px-6 py-16 text-center sm:px-16">
      <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
        Ready to Build, Grow &amp; Connect?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
        Whether you need a website, software solution, digital marketing
        strategy, or a professionally managed event, Vedify Solutions is
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
    </Reveal>
  );
}
