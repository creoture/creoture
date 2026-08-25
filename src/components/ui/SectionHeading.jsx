function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 max-w-4xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-orange">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
        {title}
      </h2>
      {description && <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">{description}</p>}
    </div>
  );
}

export default SectionHeading;
