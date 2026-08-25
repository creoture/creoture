import SectionHeading from "../ui/SectionHeading.jsx";
import TerminalWindow from "../ui/TerminalWindow.jsx";

const STEPS = [
  {
    command: "discover --consult",
    title: "Discovery & Consultation",
    description:
      "We understand your business, audience, goals, and current digital footprint, and determine project requirements to set a clear direction.",
  },
  {
    command: "plan --roadmap",
    title: "Strategy & Planning",
    description:
      "We define the website structure, functionality, technology requirements, content needs, and project roadmap before development begins.",
  },
  {
    command: "design --iterate",
    title: "UI/UX Design",
    description:
      "We create intuitive interfaces that reflect your brand and provide a clear, consistent experience across different screen sizes.",
  },
  {
    command: "build --deploy-ready",
    title: "Development",
    description:
      "Our developers turn approved designs into functional digital solutions using appropriate technologies and development practices.",
  },
  {
    command: "test --qa",
    title: "Testing & Quality Assurance",
    description:
      "Functionality, responsiveness, compatibility, usability, and performance are all tested to identify and address issues before launch.",
  },
  {
    command: "deploy --production",
    title: "Launch & Deployment",
    description:
      "We finalize the environment and deploy the website or application once the project meets the agreed requirements.",
  },
  {
    command: "support --ongoing",
    title: "Ongoing Support",
    description:
      "After launch, we provide maintenance and technical support to keep your digital solution up-to-date and reliable.",
  },
];

function Process() {
  return (
    <section id="process" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        <SectionHeading
          eyebrow="Workflow"
          title="From Strategy to Launch, Every Step Has a Purpose"
          description="A systematic process where objectives, functionality, quality, and user experience are maintained from first conversation to launch day."
        />

        <TerminalWindow title="creoture - process.sh">
          <div className="font-mono text-sm space-y-6">
            {STEPS.map((step, index) => (
              <div key={step.command} className="flex flex-col lg:flex-row lg:items-start justify-between gap-2 lg:gap-4">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-zinc-600">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <span className="text-brand-orange">$</span>
                  <span className="text-brand-blue-light">{step.command}</span>
                </div>
                <div className="sm:pl-2 border-l-0 sm:border-l border-base-border sm:ml-1">
                  <p className="sm:pl-4 text-white font-display font-semibold text-base mb-1">
                    {step.title}
                  </p>
                  <p className="sm:pl-4 text-zinc-400 leading-relaxed text-[13px] max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
            <p className="text-term-green pt-2">✓ pipeline complete - project shipped</p>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

export default Process;
