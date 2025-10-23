import type { LucideIcon } from "lucide-astro";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  company: string;
};
