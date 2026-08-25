import { ArrowRight } from "lucide-react";
import Button from "./Button.jsx";

function CTASection({
  title = "Ready to Start Your Project?",
  description = "Tell us about your goals and we'll get back to you with next steps.",
  primaryLabel = "Get a Free Consultation",
  primaryHref = "/contact",
}) {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl rounded-2xl border border-base-border bg-base-card px-6 py-10 sm:px-12 sm:py-14 text-center flex flex-col items-center gap-5 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-[0.06]" />
        <h2 className="relative font-display text-2xl sm:text-3xl font-semibold text-white max-w-xl">
          {title}
        </h2>
        <p className="relative text-zinc-400 max-w-lg">{description}</p>
        <Button href={primaryHref} variant="primary" className="relative">
          {primaryLabel}
          <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}

export default CTASection;
