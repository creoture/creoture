import { Target, Eye, Gem, Lightbulb, ShieldCheck, HeartHandshake, Users } from "lucide-react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import CTASection from "../components/ui/CTASection.jsx";
import TerminalWindow from "../components/ui/TerminalWindow.jsx";

const VALUES = [
  { icon: Gem, label: "Quality" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: ShieldCheck, label: "Transparency" },
  { icon: HeartHandshake, label: "Reliability" },
  { icon: Users, label: "Customer Success" },
];

function About() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="About Creoture"
          title="Creating Digital Experiences with Purpose"
          description="A web development company in Pakistan built on creative design, technical development, and strategic thinking."
        />

        <section className="px-4 sm:px-6 pb-20">
          <div className="mx-auto max-w-4xl flex flex-col gap-6 text-zinc-400 leading-relaxed text-base sm:text-lg">
            <p>
              Creoture is a software solutions company focused on helping startups, small businesses,
              and growing organizations build a strong digital presence. We combine creative design
              with modern development technologies to deliver websites and applications that are fast,
              secure, scalable, and user-friendly.
            </p>
            <p>
              We know that a website should convey more than just a message - it should embody your
              brand, respond to your customers' needs, and provide a solid base for your digital
              efforts. From business websites to web applications, eCommerce, and WordPress solutions,
              we put usability, performance, security, scalability, and your business goals at the
              center of every project.
            </p>
            <p>
              We believe good digital products start with clear understanding and careful planning. If
              we know your needs from the outset, we can design solutions that are easy to manage and
              flexible for whatever comes next.
            </p>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-base-border bg-base-card p-6 sm:p-8 flex flex-col gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                <Target size={22} />
              </span>
              <h3 className="font-display text-xl font-semibold text-white">Mission</h3>
              <p className="text-zinc-400 leading-relaxed">
                To empower businesses with reliable digital solutions that drive growth and long-term
                success.
              </p>
            </div>
            <div className="rounded-xl border border-base-border bg-base-card p-6 sm:p-8 flex flex-col gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue-light">
                <Eye size={22} />
              </span>
              <h3 className="font-display text-xl font-semibold text-white">Vision</h3>
              <p className="text-zinc-400 leading-relaxed">
                To become a trusted technology partner known for delivering innovative software
                solutions with quality, transparency, and lasting value.
              </p>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-10">
            <SectionHeading eyebrow="What Drives Us" title="Core Values" align="center" />
            <TerminalWindow title="creoture - values.json">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 font-mono text-sm">
                {VALUES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-3 text-center">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-brand-orange">
                      <Icon size={20} />
                    </span>
                    <span className="text-zinc-300">{label}</span>
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </div>
        </section>

        <CTASection
          title="Ready to Build Something Great Together?"
          description="Let's talk about your goals and how Creoture can help you reach them."
        />
      </main>
      <Footer />
    </div>
  );
}

export default About;
