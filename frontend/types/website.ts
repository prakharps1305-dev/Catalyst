export type GenerateWebsitePayload = {
  business_name: string;
  category: string;
  city: string;
  target_audience: string;
  tone: string;
  phone: string;
  email: string;
  address: string;
  description: string;
  social_links: string[];
};

export type Service = { title: string; description: string };
export type FAQ = { question: string; answer: string };
export type Testimonial = { name: string; review: string };

export type GeneratedWebsite = {
  hero_title: string;
  hero_subtitle: string;
  about: string;
  cta: string;
  primary_color: string;
  meta_title: string;
  meta_description: string;
  services: Service[];
  faq: FAQ[];
  testimonials: Testimonial[];
  why_choose_us: string[];
};
