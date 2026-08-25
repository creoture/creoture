import { Star, GitFork, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const PROJECTS = [
  { 
    name: "specialty-septic", 
    label: "Specialty Septic Website", 
    type: "Business Website", 
    link: "https://www.specialtyseptic.com/"
  },
  {
    name: "sehet-pk", 
    label: "Sehet.pk Website", 
    type: "Healthcare Platform", 
    link: "https://sehet.pk/"
  },
  {
    name: "sehet-pk-dashboard", 
    label: "Sehet.pk Business Dashboard", 
    type: "Admin Dashboard", 
    link: "#"
  },
  {
    name: "biocare-innovat", 
    label: "Biocare Innovat Website", 
    type: "Business Website", 
    link: "https://biocareinnovat.wpenginepowered.com/"
  },
  {
    name: "autovincops", 
    label: "AutoVinCops", 
    type: "Automotive Platform", 
    link: "http://autovincops.com/"
  },
  {
    name: "osaka-auto-traders", 
    label: "Osaka Auto Traders Website", 
    type: "Business Website", 
    link: "https://test.osakaautotraders.co.uk/"
  },
  { name: "swyftrevenue", 
    label: "SwyftRevenue Medical Billing", 
    type: "Medical Billing Platform", 
    link: "https://swyftrevenue.com/"
  },
];

function RepositoryCard({ name, label, type, link }) {
  return (
    <div className="rounded-xl border border-base-border bg-base-card p-5 flex flex-col gap-4 transition-colors hover:border-brand-orange/40">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-sm text-brand-blue-light truncate">creoture / {name}</p>
          <h3 className="font-display text-base font-semibold text-white mt-1 leading-snug">{label}</h3>
        </div>
        <span className="shrink-0 rounded-full border border-term-green/30 bg-term-green/10 px-2.5 py-1 font-mono text-[10px] text-term-green">
          deployed
        </span>
      </div>

      <p className="font-mono text-xs text-zinc-500">{type}</p>

      <div className="flex items-center gap-4 font-mono text-xs text-zinc-500">
        <span className="inline-flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
          Web
        </span>
        <span className="inline-flex items-center gap-1">
          <Star size={13} /> UI
        </span>
        <span className="inline-flex items-center gap-1">
          <GitFork size={13} /> UI
        </span>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex items-center gap-2 self-start font-mono text-xs text-zinc-300 transition-colors hover:text-brand-orange"
      >
        View project <ExternalLink size={13} />
      </a>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        <SectionHeading
          eyebrow="Repositories"
          title="Our Work"
          description="Every project reflects our commitment to quality, usability, and business-focused development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <RepositoryCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
