import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FacebookIcon, InstagramIcon, LinkedinIcon, ThreadsIcon } from "../ui/SocialIcons.jsx";

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/creoture.pk" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/creoture.pk" },
  { icon: ThreadsIcon, label: "Threads", href: "https://www.threads.net/@creoture.pk" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/creoture/" },
];

const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/#portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-conditions" },
];

const BUILD_DATE = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

function Footer() {
  return (
    <footer className="border-t border-base-border px-4 sm:px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Creoture" className="h-[56px] w-auto" />
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-zinc-400">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-base-border text-zinc-500 transition-colors hover:border-brand-orange/50 hover:text-brand-orange"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-base-border pt-6 font-mono text-xs text-zinc-600">
          <p>
            <span className="text-brand-orange">$</span> © {new Date().getFullYear()} Creoture. All
            rights reserved.
          </p>
          <nav className="flex items-center gap-x-4">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-zinc-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>build: {BUILD_DATE}</span>
            <span className="text-zinc-700">|</span>
            <span>stack: React + Tailwind</span>
            <span className="text-zinc-700">|</span>
            <span className="text-term-green">status: online</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
