type Menu = {
  title: string;
  href: string;
  description: string;
};

export const products: Menu[] = [
  {
    title: "ADC",
    href: "/adc",
    description:
      "Our most advanced AI for complex analytics and deep insights.",
  },
];

export const resources: Menu[] = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Learn how to get started with our products.",
  },
  {
    title: "API Reference",
    href: "/api",
    description: "Explore our API documentation.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read the latest news and stories.",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Discover how our customers use our products.",
  },
];

export const company: Menu[] = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about our company.",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join our team and help us build the future.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with our team.",
  },
];
