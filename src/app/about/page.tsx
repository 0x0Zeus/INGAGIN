import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how INGAGIN empowers founders, enterprises, and investors with blockchain incubation, advisory, and growth services.",
};

const philosophy = [
  {
    title: "Innovation",
    body: "Bold ideas that solve real problems.",
  },
  {
    title: "Integrity",
    body: "Bold ideas that solve real problems.",
  },
  {
    title: "Integration",
    body: "Strategic alignment between technologies.",
  },
];

const ecosystem = [
  {
    title: "Startup Incubation",
    description:
      "Guiding early-stage founders with mentorship, tokenomics, and launch support.",
  },
  {
    title: "Corporate Blockchain Integration",
    description:
      "Helping enterprises tokenize assets, automate operations, and modernize systems.",
  },
  {
    title: "Investment Network",
    description:
      "Connecting promising blockchain projects with strategic investors.",
  },
  {
    title: "Community Acceleration",
    description:
      "Growing user bases through social campaigns, influencer networks, and community rewards.",
  },
];

const differentiators = [
  "Deep blockchain market expertise",
  "Access to strategic funding partners",
  "End-to-end advisory, launch, and marketing solutions",
  "Focus on compliance, scalability, and sustainability",
  "Transparent partnership models and measurable outcomes",
];

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <p className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary w-fit">
          INGAGIN
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold text-foreground sm:text-5xl">
          INGAGIN: Building the Future of Digital Assets
        </h1>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Who We Are
        </h2>
        <p className="max-w-3xl text-lg text-foreground">
          INGAGIN, is a global blockchain incubator and advisory network dedicated to building the future of digital assets and blockchain technologies.
        </p>
        <p className="max-w-3xl text-lg text-foreground">
          We connect innovators, investors, and industries to accelerate blockchain adoption through strategy, funding, and real-world integration.
        </p>
        <p className="max-w-3xl text-lg text-foreground">
          Founded by veterans of fintech, DeFi, and venture capital, INGAGIN operates as a <b>bridge between traditional business models and the digital economy</b>.
        </p>
        <p className="max-w-3xl text-lg text-foreground">
          Our mission is simple — to empower visionary founders, launch scalable digital assets and blockchain projects, and shape the future of Web3 innovation.
        </p>
      </section>

      <section className="rounded-4xl border border-white/10 bg-white/[0.04] p-10">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Our Core Philosophy
        </h2>
        <p className="mt-4 text-base text-foreground/70">
          Blockchain isn’t just technology — it’s infrastructure for the new economy.
          At INGAGIN, we believe success in this ecosystem requires three essential pillars:
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
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            What We Do
          </h2>
          <p className="text-base text-foreground/70">
            INGAGIN specializes in <b>digital assets and blockchain business development</b>, offering a full lifecycle approach — from concept creation and technical advisory to funding, marketing, and scaling.
          </p>
          <p className="text-base text-foreground/70">
            We act as both a <b>strategic advisor and venture partner</b>, helping founders navigate token design, investor relations, legal compliance, and community growth.
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
      </section>
      <section className="rounded-4xl border border-white/10 bg-white/[0.04] p-10">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Our Global Reach
        </h2>
        <p className="mt-4 text-base text-foreground/70">
          INGAGIN’s network spans <b>North America, Europe, and Asia</b> with
          partnerships throughout the <b>Solana, Ethereum, and Polygon ecosystems</b> as well as other advanced networks.
          <br /><br />Through collaboration with developers, exchanges, and venture funds, INGAGIN delivers end-to-end blockchain growth solutions on a global scale.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.1fr,1fr]">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
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
      </section>
      <section className="rounded-4xl border border-white/10 bg-secondary/60 p-8 space-y-10">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Why Choose INGAGIN?
        </h2>
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
      </section>

      <section className="rounded-4xl border border-white/10 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 p-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Join the Future
          </h2>
          <p className="text-base text-foreground/70">
            At INGAGIN, we don’t just build blockchain projects — we build
            ecosystems. Whether you’re an entrepreneur, developer, or investor,
            joining us means becoming part of a forward-thinking network that is
            redefining what’s possible through decentralized innovation.
          </p>
        </div>
      </section>
    </div>
  );
}

