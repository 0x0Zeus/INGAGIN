import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the portfolio of projects INGAGIN has worked on, including successful token launches, NFT collections, and blockchain integrations.",
};

export default function Portfolio() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <p className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary w-fit">
          INGAGIN
        </p>
        <h1 className="max-w-4xl text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
          INGAGIN: Portfolio
        </h1>
      </section>
    </div>
  );
}

