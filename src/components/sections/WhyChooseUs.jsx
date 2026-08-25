import { Target, Layers, ShieldCheck, Clock3 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const REASONS = [
  {
    icon: Target,
    title: "Business-First Approach",
    description:
      "We get to know your business, target audience, industry, and objectives first - giving us a solid basis to build a solution that meets your real needs.",
    metric: "1st",
    metricLabel: "discovery, always",
  },
  {
    icon: Layers,
    title: "Tailored Digital Solutions",
    description:
      "Every business is unique. We don't use generic templates - we build websites and apps around your brand, requirements, and future plans.",
    metric: "100%",
    metricLabel: "tailored builds",
  },
  {
    icon: ShieldCheck,
    title: "Modern Development Standards",
    description:
      "We use proven technologies and industry best practices to build responsive, secure, high-performing experiences across desktop, tablet, and mobile.",
    metric: "A+",
    metricLabel: "lighthouse target",
  },
  {
    icon: Clock3,
    title: "Long-Term Support",
    description:
      "The work isn't done at launch. We continuously update and maintain your platform, keeping it secure, current, and ready for growth.",
    metric: "24/7",
    metricLabel: "monitoring mindset",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        <SectionHeading
          eyebrow="System Status"
          title="Your Growth Starts with the Right Digital Partner"
          description="Choosing a web development company in Pakistan isn't just about who builds the website - it's about who understands your goals, audience, and technical needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REASONS.map(({ icon: Icon, title, description, metric, metricLabel }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-base-border bg-base-card p-6 flex flex-col gap-4 transition-colors hover:border-brand-orange/40"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <Icon size={20} />
                </span>
                <div className="text-right">
                  <p className="font-mono text-xl font-semibold text-white">{metric}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-zinc-500">
                    {metricLabel}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
