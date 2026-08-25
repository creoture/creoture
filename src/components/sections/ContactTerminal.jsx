import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import { FacebookIcon, InstagramIcon, LinkedinIcon, ThreadsIcon } from "../ui/SocialIcons.jsx";

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/creoture.pk" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/creoture.pk" },
  { icon: ThreadsIcon, label: "Threads", href: "https://www.threads.net/@creoture.pk" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/creoture/" },
];

const FIELDS = [
  { id: "name", label: "name", type: "text", placeholder: "Jane Doe" },
  { id: "email", label: "email", type: "email", placeholder: "jane@company.com" },
  { id: "project", label: "project", type: "text", placeholder: "e.g. eCommerce website" },
  { id: "budget", label: "budget", type: "text", placeholder: "e.g. $2,000 - $5,000" },
];

function ContactTerminal({ showHeading = true }) {
  const [values, setValues] = useState({ name: "", email: "", project: "", budget: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (id) => (e) => setValues((v) => ({ ...v, [id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <section
      id="contact"
      className={`px-4 sm:px-6 pb-20 sm:pb-28 ${showHeading ? "pt-20 sm:pt-28" : "pt-4 sm:pt-6"}`}
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        {showHeading && (
          <SectionHeading
            eyebrow="Connect"
            title="Let's Build Something Exceptional"
            description="Ready to transform your ideas into digital solutions? Send a request below and we'll get back to you."
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* CLI form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-xl border border-base-border bg-base-card overflow-hidden"
          >
            <div className="flex items-center gap-2 border-b border-base-border bg-white/[0.02] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-term-red/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-term-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-term-green/70" />
              <span className="ml-2 font-mono text-xs text-zinc-500">creoture - contact.sh</span>
            </div>

            <div className="p-5 sm:p-6 font-mono text-sm space-y-5">
              <p className="text-zinc-500">
                <span className="text-brand-orange">$</span> connect --company Creoture
              </p>

              {FIELDS.map((field) => (
                <label key={field.id} className="block">
                  <span className="text-brand-blue-light">{field.label}:</span>
                  <input
                    type={field.type}
                    value={values[field.id]}
                    onChange={handleChange(field.id)}
                    placeholder={field.placeholder}
                    required={field.id === "name" || field.id === "email"}
                    className="mt-1.5 w-full rounded-md border border-base-border bg-base px-3 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-brand-orange"
                  />
                </label>
              ))}

              <label className="block">
                <span className="text-brand-blue-light">message:</span>
                <textarea
                  value={values.message}
                  onChange={handleChange("message")}
                  placeholder="Tell us about your project..."
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-md border border-base-border bg-base px-3 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-brand-orange"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-5 py-3 font-medium text-white transition-all hover:bg-brand-orange-light disabled:opacity-60"
              >
                <span className="text-white/70">$</span>{" "}
                {status === "idle" && "Press Enter to Send"}
                {status === "sending" && "sending..."}
                {status === "sent" && "message sent"}
              </button>

              {status === "sending" && (
                <p className="text-zinc-500 animate-fade-in">Sending request to Creoture...</p>
              )}
              {status === "sent" && (
                <p className="text-term-green animate-fade-in">
                  ✓ Message delivered - we'll respond within 1 business day.
                </p>
              )}
            </div>
          </form>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-xl border border-base-border bg-base-card p-6 flex flex-col gap-5 flex-1">
              <h3 className="font-display font-semibold text-white">Contact Info</h3>

              <a
                href="mailto:info.creoture@gmail.com"
                className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-brand-orange"
              >
                <Mail size={16} className="text-brand-orange shrink-0" />
                info.creoture@gmail.com
              </a>
              <a
                href="tel:+923269243547"
                className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-brand-orange"
              >
                <Phone size={16} className="text-brand-orange shrink-0" />
                +92 324 5856347
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <MapPin size={16} className="text-brand-orange shrink-0" />
                Drigh Road, Karachi
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <Clock size={16} className="text-brand-orange shrink-0" />
                Mon – Sat, 9AM – 9PM
              </div>
              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4331.057833045637!2d67.12644942595294!3d24.883449644336086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3396dee382bbf%3A0x8b4effbb883a765f!2sDrigh%20Road%20Drigh%20Colony%20Shah%20Faisal%20Colony%2C%20Karachi%2C%20Pakistan!5e1!3m2!1sen!2s!4v1786283473438!5m2!1sen!2s" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
              </div>
            </div>

            <div className="rounded-xl border border-base-border bg-base-card p-6 flex flex-col gap-4">
              <h3 className="font-display font-semibold text-white">Follow Us</h3>
              <p className="text-sm text-zinc-500">Stay connected on social media</p>
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-base-border text-zinc-400 transition-colors hover:border-brand-orange/50 hover:text-brand-orange"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactTerminal;
