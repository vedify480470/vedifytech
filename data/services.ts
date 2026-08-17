import { Code2, Smartphone, Layers, Cloud, LifeBuoy, PenTool } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "web-development",
    title: "Web Development",
    shortDescription: "Fast, scalable websites and web apps built for growth.",
    description:
      "We design and build custom websites, ecommerce storefronts, and web applications using modern frameworks, tuned for performance, SEO, and conversion.",
    icon: Code2,
    image: "/images/2.png",
    features: [
      "Custom Websites",
      "Ecommerce",
      "CMS",
      "Admin Panels",
      "API Development",
    ],
  },
  {
    id: "2",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform apps your users will love.",
    description:
      "From native Android and iOS apps to cross-platform builds with Flutter and React Native, we ship mobile experiences that are fast, reliable, and easy to maintain.",
    icon: Smartphone,
    image: "/images/5.png",
    features: ["Android", "iOS", "Flutter", "React Native"],
  },
  {
    id: "3",
    slug: "software-development",
    title: "Custom Software Development",
    shortDescription: "Bespoke software that fits the way your business runs.",
    description:
      "We architect and build custom software systems tailored to your operations, from internal tools to full-scale platforms.",
    icon: Layers,
    image: "/images/1.png",
    features: ["ERP", "CRM", "SaaS", "HRMS", "POS", "Inventory Systems"],
  },
  {
    id: "4",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription: "Migrate, scale, and secure your infrastructure in the cloud.",
    description:
      "Our cloud experts help you move to the cloud, automate deployments, and keep costs under control across AWS, Azure, and GCP.",
    icon: Cloud,
    image: "/images/4.png",
    features: [
      "Cloud Migration",
      "AWS/Azure/GCP Setup",
      "Serverless Architecture",
      "DevOps & CI/CD",
      "Cloud Security",
      "Cost Optimization",
    ],
  },
  {
    id: "5",
    slug: "software-support-maintenance",
    title: "Software Maintenance & Support",
    shortDescription: "Keep your systems fast, secure, and always online.",
    description:
      "We provide ongoing support and maintenance for existing applications, from bug fixes and updates to full-time monitoring.",
    icon: LifeBuoy,
    image: "/images/6.png",
    features: [
      "Bug Fixes",
      "Performance Optimization",
      "Security Updates",
      "Database Optimization",
      "Server Monitoring",
      "Version Upgrades",
      "Feature Enhancements",
      "24/7 Technical Support",
    ],
  },
  {
    id: "6",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Interfaces that are intuitive, accessible, and on-brand.",
    description:
      "Our design team crafts research-backed, user-centered experiences from wireframe to polished visual design system.",
    icon: PenTool,
    image: "/images/3.png",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing",
      "Design Systems",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
