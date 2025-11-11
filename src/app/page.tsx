import Link from "next/link";

import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Innovation",
    description:
      "We help founders shape breakthrough blockchain products with token models and go-to-market strategies built for scale.",
  },
  {
    title: "Integrity",
    description:
      "Transparent governance, compliant frameworks, and trusted partnerships anchor every engagement we accept.",
  },
  {
    title: "Integration",
    description:
      "From enterprise pilots to Layer 1 launches, we connect solutions with capital, communities, and distribution.",
  },
];

const services = [
  {
    heading: "Startup Incubation",
    body: "Mentorship, tokenomics, and launch blueprints to accelerate founders from idea to market-ready ecosystems.",
  },
  {
    heading: "Corporate Blockchain Integration",
    body: "Design tokenized assets, automate operations, and modernize infrastructure with enterprise-ready roadmaps.",
  },
  {
    heading: "Investment Network",
    body: "Align with strategic investors, exchanges, and venture partners across Solana, Ethereum, Polygon, and beyond.",
  },
  {
    heading: "Community Acceleration",
    body: "Activate global communities with market-aware storytelling, influencer alliances, and incentive programs.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-primary/10 px-8 py-24 text-center shadow-[0_0_80px_-20px_rgba(17,191,166,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#69e6d320,transparent_65%)]" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            INGAGIN
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Digital Asset &amp; Blockchain Development Partners
          </h1>
          <p className="text-lg text-foreground/70 sm:text-xl">
            Partners to power growth and development. We transform bold Web3
            ideas into global networks with advisory, funding, and launch
            operations built for traction and trust.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:ring-accent"
            >
              <Link href="/portfolio">Explore Portfolio</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full border-accent/40 bg-white/5 px-6 py-3 text-base font-semibold text-foreground transition hover:border-accent hover:bg-accent/10 focus-visible:ring-accent"
            >
              <Link href="/apply">Start an Application</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            A global incubator crafting the next wave of blockchain adoption.
          </h2>
          <p className="text-base text-foreground/70">
            INGAGIN connects innovators, investors, and enterprises, bridging
            traditional industries with decentralized infrastructure. Our
            network spans North America, Europe, and Asia with deep reach across
            Solana, Ethereum, Polygon, and emerging Layer 1 ecosystems.
          </p>
          <p className="text-base text-foreground/70">
            We co-design ventures from concept to scale—aligning product-market
            fit, regulatory clarity, and community energy to build sustainable
            token economies.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-secondary/50 p-8 backdrop-blur">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Our Pillars
          </h3>
          <ul className="space-y-4 text-left">
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="rounded-2xl border border-white/5 bg-white/5 p-4"
              >
                <p className="text-lg font-semibold text-foreground">
                  {pillar.title}
                </p>
                <p className="text-sm text-foreground/70">{pillar.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-col gap-4 text-left md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              What we deliver
            </h2>
            <p className="max-w-2xl text-base text-foreground/70">
              Strategic advisory and venture partnership for founders, brands,
              and institutions ready to build resilient blockchain products.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-accent hover:border-accent hover:bg-accent/10 focus-visible:ring-accent"
          >
            <Link href="/about">Discover Our Approach</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.heading}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-primary/40 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(17,191,166,0.18),transparent_65%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {service.heading}
                </h3>
                <p className="text-sm text-foreground/70">{service.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-4xl border border-white/10 bg-white/[0.04] p-10 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            From blueprint to breakthrough
          </h2>
          <p className="text-base text-foreground/70">
            Our advisors are veterans of fintech, DeFi, and venture capital. We
            work alongside founders to orchestrate token design, exchange
            readiness, community resonance, and compliance frameworks that pass
            institutional diligence.
          </p>
          <p className="text-base text-foreground/70">
            INGAGIN’s ecosystem of auditors, legal partners, and market-making
            allies ensures each project launches with the confidence of global
            support.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-secondary/60 p-6 text-sm text-foreground/70">
          <div>
            <p className="text-accent font-semibold uppercase tracking-[0.3em]">
              Engagement Snapshot
            </p>
            <ul className="mt-4 space-y-3">
              <li className="rounded-2xl border border-white/5 bg-white/5 p-4 text-foreground/80">
                Venture studios collaborating with INGAGIN accelerate launch
                timelines with integrated token, legal, and community workstreams.
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/5 p-4 text-foreground/80">
                Enterprises decentralize workflows with practical pilot-to-scale
                roadmaps grounded in measurable milestones.
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/5 p-4 text-foreground/80">
                Investors tap a vetted pipeline of founders delivering solutions
                for finance, healthcare, supply chain, and more.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-4xl border border-white/10 bg-gradient-to-br from-accent/20 via-transparent to-primary/30 p-10 text-center shadow-[0_0_60px_-15px_rgba(105,230,211,0.4)]">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Ready to launch the future of digital assets?
          </h2>
          <p className="text-base text-foreground/70">
            Whether you are building a protocol, tokenizing real-world assets,
            or bringing blockchain to your enterprise, INGAGIN is the partner to
            bring vision into adoption.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-foreground hover:border-accent hover:bg-accent/10 focus-visible:ring-accent"
            >
              <Link href="/team">Meet the Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
