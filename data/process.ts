import { Search, ClipboardList, Code2, Rocket } from "lucide-react";
import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description: "We dig into your goals, users, and constraints to define what success looks like.",
    icon: Search,
  },
  {
    step: 2,
    title: "Planning",
    description: "We map scope, timeline, and architecture into a clear, actionable roadmap.",
    icon: ClipboardList,
  },
  {
    step: 3,
    title: "Execute",
    description: "Our team designs, builds, and tests in focused, transparent sprints.",
    icon: Code2,
  },
  {
    step: 4,
    title: "Deliver",
    description: "We handle launch, deployment, and stay on for ongoing support.",
    icon: Rocket,
  },
];
