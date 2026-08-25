import { Link } from "react-router-dom";
import { Globe, ShoppingCart, LayoutDashboard, PenTool, Search, LayoutTemplate, LifeBuoy } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const SERVICES = [
  {
    icon: Globe,
    file: "WebsiteDevelopment.js",
    title: "Website Design & Development",
    stack: "React + Laravel + Tailwind",
    slug: "website-design-development",
  },
  {
    icon: LayoutDashboard,
    file: "CustomWebApps.js",
    title: "Custom Web Applications",
    stack: "CRM / ERP / SaaS",
    slug: "custom-web-applications",
  },
  {
    icon: ShoppingCart,
    file: "EcommerceDevelopment.js",
    title: "eCommerce Development",
    stack: "WooCommerce + Payments",
    slug: "ecommerce-development",
  },
  {
    icon: LayoutTemplate,
    file: "WordPressDevelopment.js",
    title: "WordPress Website Development",
    stack: "Custom Themes + Plugins",
    slug: "wordpress-website-development",
  },
  {
    icon: LifeBuoy,
    file: "MaintenanceHosting.js",
    title: "Website Maintenance & Hosting",
    stack: "Monitoring + Backups",
    slug: "website-maintenance-hosting",
  },
  {
    icon: Search,
    file: "SeoServices.js",
    title: "SEO Services",
    stack: "Technical + On-Page SEO",
    slug: "seo-services",
  },
];

function ServiceCard({ icon: Icon, file, title, stack, slug }) {
  return (
    <div className="rounded-xl border border-base-border bg-base-card overflow-hidden transition-colors hover:border-brand-blue-light/50">
      <div className="flex items-center gap-2 border-b border-base-border bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-term-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-green/70" />
        <span className="ml-2 font-mono text-xs text-zinc-500 truncate">{file}</span>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue-light">
          <Icon size={20} />
        </span>
        <h3 className="font-display text-base font-semibold text-white leading-snug">{title}</h3>
        <div className="space-y-1.5 font-mono text-xs text-zinc-500">
          <p>
            <span className="text-zinc-600">status:</span>{" "}
            <span className="text-term-green">compiled successfully</span>
          </p>
          <p>
            <span className="text-zinc-600">stack:</span> <span className="text-zinc-400">{stack}</span>
          </p>
        </div>
        <Link
          to={`/services`}
          className="mt-1 self-start inline-flex items-center gap-2 rounded-md border border-base-border px-3 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:border-brand-orange/50 hover:text-brand-orange"
        >
          <span className="text-zinc-500">$</span> learn --more
        </Link>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        <SectionHeading
          eyebrow="Modules"
          title="Complete Digital Solutions for Your Business"
          description="Design, development, functionality, maintenance, and search visibility - everything you need to build and manage a stronger online presence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.file} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
