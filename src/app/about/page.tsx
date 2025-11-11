import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how INGAGIN empowers founders, enterprises, and investors with blockchain incubation, advisory, and growth services.",
};

const philosophy = [
  {
    title: "Innovation",
    body: "Bold ideas that solve real problems and push Web3 infrastructure forward.",
  },
  {
    title: "Integrity",
    body: "Transparent operations, strong governance, and accountable execution.",
  },
  {
    title: "Integration",
    body: "Strategic alignment between technology, markets, and regulatory frameworks.",
  },
];

const ecosystem = [
  {
    title: "Startup Incubation",
    description:
      "Guiding early-stage founders with mentorship, tokenomics, and launch support tailored to sustainable traction.",
  },
  {
    title: "Corporate Blockchain Integration",
    description:
      "Helping enterprises tokenize assets, automate workflows, and modernize systems with measurable ROI.",
  },
  {
    title: "Investment Network",
    description:
      "Connecting high-potential ventures with strategic investors, exchanges, and market-makers.",
  },
  {
    title: "Community Acceleration",
    description:
      "Orchestrating growth through content engines, influencer coalitions, and reward-driven engagement.",
  },
];

const differentiators = [
  "Deep blockchain market expertise across DeFi, NFTs, infrastructure, and enterprise digitization.",
  "Direct access to strategic funding partners and global venture networks.",
  "End-to-end advisory, launch, and marketing solutions under one aligned partner.",
  "Focus on compliance, scalability, and sustainability from day zero.",
  "Transparent partnership models with measurable outcomes and ongoing reporting.",
];

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          INGAGIN
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold text-foreground sm:text-5xl">
          INGAGIN: Building the Future of Digital Assets
        </h1>
        <p className="max-w-3xl text-lg text-foreground/70">
          INGAGIN is a global blockchain incubator and advisory network
          connecting innovators, investors, and industries to accelerate
          blockchain adoption through strategy, funding, and real-world
          integration. Founded by veterans of fintech, DeFi, and venture
          capital, we bridge traditional business models with the digital
          economy.
        </p>
        <p className="max-w-3xl text-lg text-foreground/70">
          Our mission is simple — empower visionary founders, launch scalable
          digital assets and blockchain projects, and shape the future of Web3
          innovation. We believe blockchain is the infrastructure of the new
          economy, and adoption requires alignment between innovation,
          integrity, and integration.
        </p>
      </section>

      <section className="rounded-4xl border border-white/10 bg-white/[0.04] p-10">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Our Core Philosophy
        </h2>
        <p className="mt-4 max-w-3xl text-base text-foreground/70">
          These principles guide every partnership we form, every model we
          design, and every startup we help launch.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {philosophy.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-secondary/60 p-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-foreground/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-16 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            What We Do
          </h2>
          <p className="text-base text-foreground/70">
            INGAGIN specializes in digital assets and blockchain business
            development, offering a full lifecycle approach — from concept
            creation and technical advisory to funding, marketing, and scaling.
          </p>
          <p className="text-base text-foreground/70">
            We act as both a strategic advisor and venture partner, helping
            founders navigate token design, investor relations, legal
            compliance, and community growth.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {ecosystem.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-lg font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-foreground/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-4xl border border-white/10 bg-secondary/60 p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Our Global Reach
          </h3>
          <p className="mt-4 text-sm text-foreground/70">
            INGAGIN’s network spans North America, Europe, and Asia with
            partnerships throughout the Solana, Ethereum, and Polygon ecosystems
            alongside advanced networks and tooling providers. Through
            collaboration with developers, exchanges, and venture funds, we
            deliver end-to-end blockchain growth solutions worldwide.
          </p>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.1fr,1fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Our Vision
          </h2>
          <blockquote className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-lg text-foreground/80">
            “To become the world’s most trusted blockchain growth partner —
            where great ideas become global networks.”
          </blockquote>
          <p className="text-base text-foreground/70">
            INGAGIN builds bridges between innovation and adoption, helping
            blockchain technology evolve from digital potential to global
            practice. Our work supports sustainable token economies, ethical
            innovation, and decentralized systems that create value for both
            users and investors.
          </p>
        </div>
        <div className="rounded-4xl border border-white/10 bg-secondary/60 p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Why Choose INGAGIN?
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-foreground/70">
            {differentiators.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/5 bg-white/5 p-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-4xl border border-white/10 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 p-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Join the Future
          </h2>
          <p className="max-w-3xl text-base text-foreground/70">
            At INGAGIN, we don’t just build blockchain projects — we build
            ecosystems. Whether you’re an entrepreneur, developer, or investor,
            joining us means becoming part of a forward-thinking network that is
            redefining what’s possible through decentralized innovation.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:ring-accent"
            >
              <a href="/apply">Submit Your Project</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-foreground hover:border-accent hover:bg-accent/10 focus-visible:ring-accent"
            >
              <a href="/contact">Speak with an Advisor</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

