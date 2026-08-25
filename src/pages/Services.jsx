import {
  Globe,
  PenTool,
  LayoutDashboard,
  ShoppingCart,
  LayoutTemplate,
  LifeBuoy,
  Search,
  Code2,
  Database,
  FileCode2,
  Stethoscope,
  GraduationCap,
  Home as HomeIcon,
  ShoppingBag,
  Briefcase,
  Factory,
  Rocket,
  Landmark,
  Paintbrush,
  GitBranch,
  Zap,
} from "lucide-react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import CTASection from "../components/ui/CTASection.jsx";

const SERVICES = [
  {
    slug: "website-design-development",
    icon: Globe,
    title: "Website Design And Development",
    description:
      "Develop a professional, responsive website that embodies your brand and provides a smooth user experience. We work on user-friendly layouts, responsive design, performance, and scalable development.",
  },
  {
    slug: "custom-web-applications",
    icon: LayoutDashboard,
    title: "Custom Web Applications",
    description:
      "Build web applications based on your particular business processes and functionality requirements. We develop scalable solutions that can accommodate complex workflows and grow with your business.",
  },
  {
    slug: "ecommerce-development",
    icon: ShoppingCart,
    title: "eCommerce Development",
    description:
      "Create an online store with a seamless customer purchasing experience. We build eCommerce solutions with user-friendly interfaces, essential functionality, and scalable architecture.",
  },
  {
    slug: "wordpress-website-development",
    icon: LayoutTemplate,
    title: "WordPress Website Development",
    description:
      "Build a flexible WordPress site to suit your brand and content needs. We work on responsive design, usability, performance, and a manageable content experience.",
  },
  {
    slug: "website-maintenance-hosting",
    icon: LifeBuoy,
    title: "Website Maintenance & Hosting",
    description:
      "Ensure the security, regular updates, and stability of your website through continuous maintenance and hosting services - including updates, backups, technical monitoring, and performance needs.",
  },
  {
    slug: "seo-services",
    icon: Search,
    title: "SEO Services",
    description:
      "Improve search visibility through strategic, technical, and on-page SEO, content relevance, and long-term organic growth.",
  },
];

const TECHNOLOGIES = [
  // Frontend
  {
    icon: Code2,
    name: "HTML5 & CSS3",
    description:
      "The foundation of modern web interfaces, providing structured content, responsive layouts, styling, and consistent experiences across devices.",
  },
  {
    icon: FileCode2,
    name: "JavaScript",
    description:
      "A versatile programming language used to build interactive interfaces, dynamic functionality, and responsive web application experiences.",
  },
  {
    icon: Paintbrush,
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for creating responsive, modern interfaces with reusable styling patterns and consistent design systems.",
  },
  {
    icon: LayoutDashboard,
    name: "Bootstrap",
    description:
      "A popular front-end framework for developing responsive websites and application interfaces with reusable components and grid layouts.",
  },
  {
    icon: Code2,
    name: "jQuery",
    description:
      "A JavaScript library used to simplify DOM manipulation, events, AJAX requests, and interactive functionality in web applications.",
  },
  {
    icon: FileCode2,
    name: "React",
    description:
      "A modern JavaScript library for building interactive, responsive user interfaces with reusable components and flexible application architecture.",
  },

  // Frontend Development
  {
    icon: Zap,
    name: "Vite",
    description:
      "A modern frontend development tool providing fast development builds, efficient asset handling, and optimized production workflows.",
  },

  // Backend
  {
    icon: Code2,
    name: "PHP",
    description:
      "A widely used server-side programming language for building dynamic websites, backend systems, APIs, and database-driven applications.",
  },
  {
    icon: Code2,
    name: "Laravel",
    description:
      "A powerful PHP framework for building secure, scalable custom web applications around business processes, workflows, and integrations.",
  },
  {
    icon: Code2,
    name: "Livewire",
    description:
      "A Laravel framework for building dynamic, reactive interfaces using PHP and Laravel with minimal JavaScript.",
  },

  // API & Integrations
  {
    icon: Globe,
    name: "REST API",
    description:
      "Secure and scalable APIs for connecting web applications, mobile apps, third-party services, and business systems through structured data exchange.",
  },

  // Database
  {
    icon: Database,
    name: "MySQL",
    description:
      "A reliable relational database system used to store, organize, query, and manage application data for websites and business applications.",
  },

  // CMS
  {
    icon: LayoutTemplate,
    name: "WordPress",
    description:
      "A flexible content management platform for business websites, custom themes, content management, responsive design, and performance-focused solutions.",
  },

  // Version Control & Collaboration
  {
    icon: GitBranch,
    name: "Git & GitHub",
    description:
      "Version control and collaboration tools used to manage source code, track changes, work with branches, and maintain project history.",
  },
];

const INDUSTRIES = [
  { icon: Stethoscope, name: "Healthcare", description: "Accessible, user-centered solutions for healthcare organizations and providers." },
  { icon: GraduationCap, name: "Education", description: "Websites and platforms for easy access to information, resources, and services." },
  { icon: HomeIcon, name: "Real Estate", description: "Property-focused websites to promote listings and present property information clearly." },
  { icon: ShoppingBag, name: "Retail & eCommerce", description: "Online experiences that make discovering and buying products simple." },
  { icon: Briefcase, name: "Professional Services", description: "Professional websites that build credibility and make you easy to reach." },
  { icon: Factory, name: "Manufacturing", description: "Structured digital experiences for products, expertise, and business data." },
  { icon: Rocket, name: "Startups", description: "Digital foundations that scale to support growth and brand development." },
  { icon: Landmark, name: "Corporate Businesses", description: "Professional platforms for communication, branding, and customer engagement." },
];

function Services() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Our Digital Solutions"
          title="Complete Digital Solutions for Your Business"
          description="Business design and development, functionality, maintenance, and search visibility - everything you need to build and manage a stronger online presence."
        />

        {/* Services list */}
        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4">
            {SERVICES.map(({ slug, icon: Icon, title, description }) => (
              <div
                key={slug}
                id={slug}
                className="scroll-mt-28 rounded-xl border border-base-border bg-base-card p-6 sm:p-8 flex flex-col gap-4 transition-colors hover:border-brand-orange/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm flex-1">{description}</p>
                <a
                  href="/contact"
                  className="self-start font-mono text-xs text-brand-blue-light hover:text-brand-orange transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>

        <CTASection
          title="Not Sure Which Service You Need?"
          description="Get a free consultation and we'll help you figure out the right starting point."
        />

        {/* Technologies */}
        <section className="px-4 sm:px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-12">
            <SectionHeading
              eyebrow="Tech Stack"
              title="Modern Technology for Reliable Digital Solutions"
              description="We choose technologies based on the needs of each project - giving your business the functionality, performance, flexibility, and scalability it needs."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TECHNOLOGIES.map(({ icon: Icon, name, description }) => (
                <div
                  key={name}
                  className="rounded-xl border border-base-border bg-base-card p-6 flex flex-col gap-3"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue-light font-mono text-xs">
                    <Icon size={18} />
                  </span>
                  <h4 className="font-mono text-sm font-semibold text-white">{name}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-12">
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Digital Solutions for Various Business Needs"
              description="Each industry has its own customers, processes, and digital needs. Creoture offers flexible solutions customized for different business environments and objectives."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {INDUSTRIES.map(({ icon: Icon, name, description }) => (
                <div
                  key={name}
                  className="rounded-xl border border-base-border bg-base-card p-5 flex flex-col gap-3"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Icon size={17} />
                  </span>
                  <h4 className="font-display text-sm font-semibold text-white">{name}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Services;
