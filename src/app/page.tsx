export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-white/5 via-white/0 to-primary/10 px-8 py-24 text-center shadow-[0_0_80px_-20px_rgba(17,191,166,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#69e6d320,transparent_65%)]" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            INGAGIN
          </span>
          <h1 className="text-2xl font-semibold text-foreground/70 leading-tight tracking-tight sm:text-3xl">
            Digital Asset — Blockchain Development
          </h1>
          <p className="text-4xl  sm:text-5xl text-foreground sm:leading-16 font-bold leading-12">
            Partners to Power Growth and Development
          </p>
        </div>
      </section>
    </div>
  );
}
