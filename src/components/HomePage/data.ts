import { Code, Target, TrendingUp, Zap } from "lucide-astro";
import type { ServiceItem, TestimonialItem } from "./types";

export function getServices(): ServiceItem[] {
  return [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom headless WordPress solutions with Astro for lightning-fast performance.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Improve Core Web Vitals and achieve perfect Lighthouse scores.",
    },
    {
      icon: Target,
      title: "SEO Strategy",
      description:
        "Technical SEO implementation for maximum search visibility.",
    },
    {
      icon: TrendingUp,
      title: "Digital Growth",
      description:
        "Conversion-focused design that turns visitors into customers.",
    },
  ];
}

export function getTestimonials(): TestimonialItem[] {
  return [
    {
      quote:
        "The performance improvements were immediate and dramatic. Our bounce rate dropped by 40% in the first month.",
      author: "Sarah Chen",
      role: "Director of Marketing",
      company: "TechStart Inc",
    },
    {
      quote:
        "Finally, a developer who understands both the technical and business sides. The ROI has been exceptional.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "Growth Partners",
    },
    {
      quote:
        "Migrating to a headless architecture seemed daunting, but the process was smooth and the results speak for themselves.",
      author: "Jennifer Walsh",
      role: "Product Manager",
      company: "Content Hub",
    },
  ];
}
