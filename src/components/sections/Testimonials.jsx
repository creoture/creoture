import { Star } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import TerminalWindow from "../ui/TerminalWindow.jsx";

const TESTIMONIALS = [
  {
    name: "Yousuf Razzak",
    role: "CEO, Sehet.pk",
    quote:
      "I had a great experience working with Creoture for my website. Their team was very professional, responsive, and supportive throughout the whole process. They understood my requirements clearly and delivered exactly what I was looking for. The quality of their work and attention to detail really impressed me. I would definitely recommend Creoture to anyone looking for reliable and efficient website services.",
  },
  {
    name: "Saqib Khan",
    role: "AKC Digitizing",
    quote:
      "Creoture did an amazing job helping us with our website. The entire process was smooth, fast, and incredibly efficient. They delivered everything in a short time without compromising on quality. Truly a professional team that makes complex tasks seem effortless.",
  },
  {
    name: "Anas Ali",
    role: "Co-Founder, AutoVinCops",
    quote:
      "I had a great experience with Creoture for developing my AutoVinCops website. The entire process was smooth, and they delivered the website on time with a clean and professional design. Ahmed ensured every requirement was implemented perfectly.",
  },
];

function TestimonialLog({ name, role, quote }) {
  return (
    <TerminalWindow title={`review — ${name.toLowerCase().replace(/\s+/g, "-")}.log`} className="h-full">
      <div className="font-mono text-sm flex flex-col gap-3 min-h-[320px] justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-term-green">[SUCCESS] Client review loaded</p>
          <p className="text-zinc-400 leading-relaxed text-[13px] font-body">"{quote}"</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-end justify-between gap-3 pt-3 border-t border-base-border">
            <div>
              <p className="text-white font-display font-semibold text-sm">{name}</p>
              <p className="text-zinc-500 text-xs">{role}</p>
            </div>
            <div className="flex items-center gap-0.5 text-term-amber shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" />
              ))}
            </div>
          </div>
          <p className="text-term-green text-xs">✓ UI delivered successfully</p>
        </div>
      </div>
    </TerminalWindow>
  );
}

function Testimonials() {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        <SectionHeading
          eyebrow="Client Logs"
          title="What Clients Say"
          description="Real feedback from teams we've shipped with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <TestimonialLog key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
