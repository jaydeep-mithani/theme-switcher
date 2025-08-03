import {
  BadgeCheck,
  Handshake,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  SlidersVertical,
  Smile,
  SunMedium,
  TrendingUp,
  Zap,
} from "lucide-react";

export const themes = [
  { id: "theme1", class: "theme-1", label: "Theme 1" },
  { id: "theme2", class: "theme-2", label: "Theme 2" },
  { id: "theme3", class: "theme-3", label: "Theme 3" },
];

export const homeContent = {
  title: "Welcome to Our Platform",
  content: [
    "Discover a seamless experience designed with simplicity and elegance in mind. Our platform combines intuitive design with powerful functionality to help you achieve your goals effortlessly. Whether you're here to explore, learn, or connect, we've crafted every detail to ensure your journey is both meaningful and enjoyable.",
  ],
};

export const homeCards = [
  {
    id: 1,
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized infrastructure. Every interaction is smooth and responsive, ensuring you never have to wait.",
  },
  {
    id: 2,
    icon: BadgeCheck,
    title: "Secure & Reliable",
    description:
      "Your data is protected with enterprise-grade security. We maintain 99.9% uptime with robust monitoring and automated backup systems.",
  },
  {
    id: 3,
    icon: Heart,
    title: "User-Centered",
    description:
      "Every feature is designed with you in mind. Our intuitive interface makes complex tasks simple and enjoyable to accomplish.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Analytics Driven",
    description:
      "Make informed decisions with comprehensive analytics and insights. Track your progress and optimize your performance with real-time data.",
  },
  {
    id: 5,
    icon: Handshake,
    title: "Collaborative",
    description:
      "Work seamlessly with your team using our built-in collaboration tools. Share, comment, and coordinate effortlessly across projects.",
  },
  {
    id: 6,
    icon: SlidersVertical,
    title: "Customizable",
    description:
      "Tailor the platform to your specific needs with extensive customization options. Create workflows that match your unique requirements.",
  },
];

export const contactContent = {
  title: "Get In Touch",
  content: [
    "We'd love to hear from you. Whether you have questions, feedback, or just want to say hello, don't hesitate to reach out. Our team is here to help and typically responds within 24 hours.",
  ],
};

export const contactInfo = [
  {
    id: 1,
    icon: Mail,
    title: "Email",
    description: "Send us an email anytime",
    href: "mailto:hello@company.com",
    linkText: "hello@company.com",
    iconClassName: "icon-mail",
    linkClassName: "link-mail",
  },
  {
    id: 2,
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri from 8am to 5pm",
    href: "tel:+1234567890",
    linkText: "+1 (234) 567-890",
    iconClassName: "icon-phone",
    linkClassName: "link-phone",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Office",
    description: "Come say hello",
    href: "",
    linkText: "123 Business Ave\nSuite 100\nNew York, NY 10001",
    iconClassName: "icon-office",
    linkClassName: "link-office",
  },
];

export const aboutContent = {
  title: "About Our Company",
  content: [
    "We're a passionate team dedicated to creating exceptional experiences through innovative design and technology. Our mission is to simplify complexity and bring elegant solutions to everyday challenges.",
  ],
};

export const aboutStoryContent = {
  title: "Our Story",
  content: [
    "Founded in 2020, our journey began with a simple observation: technology should enhance human experiences, not complicate them. We started as a small team of designers and developers who shared a vision of creating products that are both powerful and intuitive.",
    "Today, we've grown into a diverse team of creative professionals, each bringing unique perspectives and expertise to our collective mission. We believe in the power of minimalist design, where every element serves a purpose and every interaction feels natural.",
    "Our approach combines cutting-edge technology with human-centered design principles, ensuring that our solutions not only work flawlessly but also delight users at every touchpoint.",
  ],
};

export const aboutCards = [
  {
    id: 1,
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new possibilities, turning creative ideas into groundbreaking solutions.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "User-Centric",
    description:
      "Every decision we make is guided by deep empathy for our users and their needs, ensuring meaningful experiences.",
    icon: Smile,
  },
  {
    id: 3,
    title: "Simplicity",
    description:
      "We believe that the best solutions are often the simplest ones, removing complexity to reveal true elegance.",
    icon: SunMedium,
  },
];

export const aboutStatistics = [
  { id: 1, stat: "150+", label: "Projects Completed" },
  { id: 2, stat: "50+", label: "Happy Clients" },
  { id: 3, stat: "4", label: "Years Experience" },
  { id: 4, stat: "15+", label: "Team Members" },
];
