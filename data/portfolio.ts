import type { PortfolioItem } from "@/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "crm-software",
    title: "CRM Software",
    category: "Web Application",
    industry: "Sales & Marketing",
    description:
      "A full-featured customer relationship management platform with pipeline tracking, automation, and analytics.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/images/crm-software.webp",
  },
  {
    id: "2",
    slug: "hospital-management-system",
    title: "Hospital Management System",
    category: "Enterprise Software",
    industry: "Healthcare",
    description:
      "An integrated system for patient records, appointment scheduling, billing, and staff coordination.",
    tags: ["Next.js", "Django", "MySQL"],
    image: "/images/Hospital-Management.jpeg",
  },
  {
    id: "3",
    slug: "food-delivery-app",
    title: "Food Delivery App",
    category: "Mobile App",
    industry: "Food & Beverage",
    description:
      "A cross-platform delivery app with live order tracking, in-app payments, and rider dispatch.",
    tags: ["Flutter", "Node.js", "Redis"],
    image: "/images/Online-Food-Delivery.webp",
  },
  {
    id: "4",
    slug: "fintech-dashboard",
    title: "FinTech Dashboard",
    category: "Web Application",
    industry: "Finance",
    description:
      "A real-time analytics dashboard for tracking transactions, portfolios, and compliance metrics.",
    tags: ["React", "Spring Boot", "AWS"],
    image: "/images/FinTech-Dashboard.png",
  },
  {
    id: "5",
    slug: "ecommerce-platform",
    title: "Ecommerce Platform",
    category: "Web Application",
    industry: "Retail",
    description:
      "A headless ecommerce storefront with custom checkout, inventory sync, and CMS-driven merchandising.",
    tags: ["Next.js", "Laravel", "MongoDB"],
    image: "/images/Ecommerce-Platform.webp",
  },
  {
    id: "6",
    slug: "school-erp",
    title: "School ERP",
    category: "Enterprise Software",
    industry: "Education",
    description:
      "An end-to-end ERP for admissions, attendance, grading, and parent communication.",
    tags: [".NET", "React", "SQL Server"],
    image: "/images/School-ERP.png",
  },
];
