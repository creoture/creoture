function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-glow-orange blur-3xl" />
      <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-glow-blue blur-3xl" />

      <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center gap-5">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-card px-4 py-1.5 font-mono text-xs text-brand-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}

export default PageHeader;
