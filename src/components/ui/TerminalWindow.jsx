function TerminalWindow({ title, children, className = "" }) {
  return (
    <div className={`rounded-xl border border-base-border bg-base-card overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 border-b border-base-border bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-term-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-green/70" />
        {title && (
          <span className="ml-2 font-mono text-xs text-zinc-500 truncate">{title}</span>
        )}
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}

export default TerminalWindow;
