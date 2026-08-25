import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

const PHONE = "923245856347"; // +92 324 5856347, no + or spaces, matches wa.me format
const MESSAGE = "Hi Creoture, I'd like to talk about a project.";
const GREETING = "Hi! Need help with your project? We usually reply within a few minutes.";

function WhatsAppIcon({ size = 20, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.87 9.87 0 0 0 4.62 1.15h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.86 14.02c-.25.7-1.45 1.34-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.69-.63-2.97-1.29-4.9-4.28-5.05-4.48-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.48.13.66-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.13.07.75-.18 1.45Z" />
    </svg>
  );
}

// Minimal geometric robot face — matches the coding/terminal aesthetic
// without being a cartoon mascot.
function RobotIcon({ size = 22, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
      <rect x="4" y="8" width="16" height="12" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <line x1="12" y1="8" x2="12" y2="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1.4" fill="currentColor" />
      <circle cx="9" cy="14" r="1.4" fill="currentColor" />
      <circle cx="15" cy="14" r="1.4" fill="currentColor" />
      <line x1="8.5" y1="18" x2="15.5" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce" />
    </span>
  );
}

function WhatsAppWidget() {
  const [showCard, setShowCard] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const openTimer = setTimeout(() => setShowCard(true), 2200);
    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!showCard) return;
    const typingTimer = setTimeout(() => setTyping(false), 1300);
    return () => clearTimeout(typingTimer);
  }, [showCard]);

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat card */}
      {showCard && !dismissed && (
        <div className="w-72 sm:w-80 rounded-2xl border border-base-border bg-base-card shadow-[0_25px_60px_rgba(0,0,0,0.55)] overflow-hidden animate-fade-up">
          {/* Gradient header */}
          <div className="relative bg-brand-gradient px-4 py-4 flex items-center gap-3 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_top_right,white,transparent_60%)]" />

            {/* Rotating gradient ring around avatar */}
            <div className="relative h-11 w-11 shrink-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,white,rgba(255,255,255,0.2),white)] animate-[spin_4s_linear_infinite]">
              <div className="h-full w-full rounded-full bg-base flex items-center justify-center">
                <RobotIcon size={20} className="text-white" />
              </div>
            </div>

            <div className="relative min-w-0">
              <p className="font-display font-semibold text-white text-sm leading-tight">Creo</p>
              <p className="flex items-center gap-1.5 font-mono text-[11px] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-term-green animate-pulse" />
                Online now
              </p>
            </div>

            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="relative ml-auto text-white/70 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Message body */}
          <div className="p-4">
            <div className="rounded-xl rounded-tl-sm bg-white/[0.04] border border-base-border px-3.5 py-3 min-h-[3.25rem] flex items-center">
              {typing ? (
                <TypingDots />
              ) : (
                <p className="text-sm text-zinc-300 leading-relaxed animate-fade-in">{GREETING}</p>
              )}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-term-green px-4 py-3 text-sm font-medium text-base transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon size={17} />
              Chat on WhatsApp
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}

      {/* Floating launcher */}
      {!showCard || dismissed ? (
        <button
          type="button"
          onClick={() => {
            setDismissed(false);
            setShowCard(true);
            setTyping(true);
          }}
          aria-label="Open WhatsApp chat"
          className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient shadow-[0_10px_35px_rgba(241,112,28,0.45)] transition-transform hover:scale-105 animate-float"
        >
          <span className="absolute -inset-1.5 rounded-full bg-brand-gradient opacity-30 blur-md animate-pulse" />
          <RobotIcon size={26} className="relative text-white" />
          <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-term-green border-2 border-base" />
        </button>
      ) : null}
    </div>
  );
}

export default WhatsAppWidget;
