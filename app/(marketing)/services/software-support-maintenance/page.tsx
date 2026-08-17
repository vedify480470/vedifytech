import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

const SLUG = "software-support-maintenance";

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(SLUG);
  return {
    title: service?.title ?? "Service",
    description: service?.shortDescription,
  };
}

export default function ServicePage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
