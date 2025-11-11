import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind INGAGIN, a global blockchain incubator and advisory network dedicated to building the future of digital assets and blockchain technologies.",
};

export default function Team() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <p className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary w-fit">
          INGAGIN
        </p>
        <h1 className="max-w-4xl text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
          INGAGIN: A Team is About its Players
        </h1>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Our Team
        </h2>
        <p className="max-w-3xl text-lg text-foreground">
          Our leadership team combines expertise from fintech, investment banking, and digital asset development.
          They’ve guided projects that have launched successful tokens, built NFT ecosystems, and integrated blockchain into traditional sectors like healthcare, logistics, and finance.
        </p>
        <p className="max-w-3xl text-lg text-foreground">
          We also work with <b>independent blockchain experts, marketing partners, and smart contract auditors</b>, ensuring every client has access to the best minds and tools in the Web3 world.
        </p>
      </section>
    </div>
  );
}

