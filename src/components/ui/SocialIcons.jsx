// lucide-react does not ship brand icons, so these are hand-drawn to match
// its stroke width (1.75-2), rounded caps, and 24x24 viewBox convention.

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function FacebookIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} className={className} {...common}>
      <path d="M14 9h2.5V6H14c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.4l.6-3H13v-1.5c0-.8.4-1.5 1-1.5Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} className={className} {...common}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} className={className} {...common}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-3.6c0-1.3.9-2.1 2-2.1s2 .8 2 2.1v3.6" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  );
}

export function ThreadsIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} className={className} {...common}>
      <path d="M12 21c4.5 0 7-2.3 7-7.2 0-3.5-1-5.6-2.7-6.9C14.9 5.6 13.5 5 12 5c-3.3 0-5.7 1.9-5.7 5.3 0 1.9.9 3.4 2.8 3.4 1.6 0 2.6-1 2.6-2.4 0-1-.6-1.7-1.5-1.7" />
      <path d="M15.5 12.2c.3.9.3 1.9-.1 2.8-.6 1.3-1.9 2-3.4 2-2 0-3.2-1.1-3.2-2.6 0-1.6 1.4-2.5 3.5-2.5 1 0 1.9.1 2.6.4" />
    </svg>
  );
}
