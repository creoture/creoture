import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/#portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className={`w-full max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-base-border bg-base/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "border-white/5 bg-base/40 backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" aria-label="Creoture home">
            <img src={logo} alt="Creoture" className="h-[56px] w-auto select-none" draggable="false" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 font-mono text-sm text-zinc-400">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="relative px-3 py-2 rounded-lg transition-colors hover:text-white hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-brand-orange px-4 py-2 font-mono text-sm font-medium text-white transition-all hover:bg-brand-orange-light hover:shadow-[0_0_20px_rgba(241,112,28,0.4)]"
            >
              <span className="text-white/70">$</span> connect
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-base-border p-2 text-zinc-300 hover:text-white hover:border-brand-orange/50 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            menuOpen ? "max-h-96 border-t border-base-border" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-1 p-4 font-mono text-sm text-zinc-400">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg transition-colors hover:text-white hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-2.5 font-medium text-white"
              >
                <span className="text-white/70">$</span> connect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
