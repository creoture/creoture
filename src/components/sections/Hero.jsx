import { useEffect, useState } from "react";
import { ArrowRight, FolderGit2 } from "lucide-react";
import Button from "../ui/Button.jsx";

const TYPED_LINE = "npx create-solution --client=creoture";

function useTypewriter(text, speed = 45, startDelay = 400) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return output;
}

function Hero() {
  const typed = useTypewriter(TYPED_LINE);
  const isDone = typed.length === TYPED_LINE.length;

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-glow-orange blur-3xl" />
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-glow-blue blur-3xl" />

      <div className="relative mx-auto max-w-6xl flex flex-col items-center text-center gap-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-card px-4 py-1.5 font-mono text-xs text-term-green animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-term-green animate-blink" />
          build passing &middot; status: available for projects
        </span>

        <h1 className="max-w-4xl font-display  text-4xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-white animate-fade-up">
          Build a Strong Digital Presence with a{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Professional Web Development Company
          </span>{" "}
          in Pakistan
        </h1>

        <p className="max-w-4xl text-base sm:text-lg text-zinc-400 leading-relaxed animate-fade-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
          Your website is more than a mere website - it's where potential customers learn about your
          brand, test your credibility, and make their next move. We develop modern digital solutions
          designed around your business goals: web design and development, UI/UX, custom web
          applications, eCommerce, and WordPress, all built on dependable technology, responsive
          performance, and scalability.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          <Button href="#contact" variant="primary">
            Get a Free Consultation
            <ArrowRight size={16} />
          </Button>
          <Button href="#services" variant="secondary">
            <FolderGit2 size={16} />
            Explore Our Services
          </Button>
        </div>

        {/* Terminal hero visual */}
        <div className="w-full max-w-2xl mt-6 rounded-xl border border-base-border bg-base-card text-left overflow-hidden animate-fade-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 border-b border-base-border bg-white/[0.02] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-term-red/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-term-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-term-green/70" />
            <span className="ml-2 font-mono text-xs text-zinc-500">creoture - zsh</span>
          </div>
          <div className="p-5 font-mono text-sm space-y-2">
            <p className="text-zinc-500">
              <span className="text-brand-orange">creoture</span>
              <span className="text-zinc-600">@</span>
              <span className="text-brand-blue-light">client</span>
              <span className="text-zinc-500"> ~ % </span>
              <span className="text-white">{typed}</span>
              <span className={`inline-block w-2 h-4 bg-white ml-0.5 align-middle ${isDone ? "animate-blink" : ""}`} />
            </p>
            {isDone && (
              <div className="animate-fade-in space-y-1 pt-1">
                <p className="text-zinc-500">Resolving requirements... done</p>
                <p className="text-zinc-500">Compiling design system... done</p>
                <p className="text-term-green">✓ Build successful - ready to deploy</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
