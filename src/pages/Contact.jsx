import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import ContactTerminal from "../components/sections/ContactTerminal.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

const FAQS = [
  {
    q: "What are the digital services that Creoture offers?",
    a: "Creoture offers website design & development, UI/UX design, custom web applications, eCommerce development, WordPress website development, website maintenance & hosting, and SEO services. All services can be customized to suit the needs of your business and project.",
  },
  {
    q: "Why do you use Creoture to create websites?",
    a: "Our attention is directed towards grasping the needs of your business before proposing a solution. We take a strategic design and development approach to build digital experiences that fit your goals, people, and future needs.",
  },
  {
    q: "How much time does it take to create a website?",
    a: "This depends on the size, functionality, content, and technical needs of the website. After reviewing your project, we can determine an appropriate development plan and timeline.",
  },
  {
    q: "Can my website be accessed on mobile devices?",
    a: "Yes. Responsive development means your website will look great on all devices, from desktop to tablet to smartphone. Usability and performance on various devices is considered throughout development and testing.",
  },
  {
    q: "Are you willing to maintain the website after its launch?",
    a: "Yes. Creoture offers website maintenance and technical support for businesses requiring ongoing maintenance, security-related updates, backups, monitoring, and more.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-base-border bg-base-card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-sm sm:text-base font-medium !text-white">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-brand-orange transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm text-zinc-400 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Get In Touch"
          title="Let's Build Something Exceptional Together"
          description="Have a project in mind? Send us a message and we'll get back to you within one business day."
        />

        <ContactTerminal showHeading={false} />

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-3xl flex flex-col gap-10">
            <SectionHeading eyebrow="FAQs" title="Common Questions" align="center" />
            <div className="flex flex-col gap-3">
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} {...faq} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
