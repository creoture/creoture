import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-light hover:shadow-[0_0_24px_rgba(241,112,28,0.4)]",
  secondary:
    "bg-transparent text-white border border-base-border hover:border-brand-blue-light hover:bg-brand-blue/10",
  ghost: "bg-transparent text-zinc-300 hover:text-white hover:bg-white/5",
};

function Button({ children, variant = "primary", href, onClick, type = "button", className = "" }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-mono text-sm font-medium transition-all duration-200 ${VARIANTS[variant]} ${className}`;

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
