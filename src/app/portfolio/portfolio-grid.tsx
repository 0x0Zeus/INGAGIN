"use client";

import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "B2Bexc",
    description: "A strategic joint venture uniting blockchain innovation and digital asset development. Together, we build scalable Web3 ecosystems, empower startups, and accelerate enterprise growth through technology, strategy, and advisory collaboration.",
    link: "https://www.b2bexc.com",
    linkText: "Visit www.b2bexc.com",
  },
  {
    id: 2,
    title: "CivilClaimLaw",
    description: "INGAGIN delivers marketing and digital brand strategy focused on Civil Claim Law's legal and IP assets, enhancing online visibility, client engagement, and credibility in civil rights, injury, and intellectual property representation.",
    link: "https://www.civilclaimlaw.com",
    linkText: "Visit www.civilclaimlaw.com",
  },
  {
    id: 3,
    title: "NFTPortfolioPartners",
    description: "INGAGIN partners with NFT Portfolio Partners as a strategic advisor, guiding blockchain infrastructure, asset strategy, and platform development to strengthen NFT portfolio management, enhance market positioning, and accelerate digital asset value creation.",
    link: "https://www.nftportfoliopartners.com",
    linkText: "Visit www.nftportfoliopartners.com",
  },
  {
    id: 4,
    title: "Poememe",
    description: "INGAGIN invests in Poememe, funding the expansion of its NFT marketplace for writers and artists, enabling blockchain-secured publishing, creator monetization, and the fusion of poetry with digital art.",
    link: "https://www.poememe.com",
    linkText: "Visit www.poememe.com",
  },
  {
    id: 5,
    title: "DigitalWorldProperty",
    description: "INGAGIN provides digital asset advisory services to Digital World Property, guiding tokenized real-estate development, blockchain infrastructure design, and Web3 market strategy to help the startup build scalable virtual property ecosystems, expand investor access, and strengthen transparent digital ownership models.",
    link: "https://www.digitalworldproperty.com",
    linkText: "Visit www.digitalworldproperty.com",
  },
  {
    id: 6,
    title: "GoalMoonShot",
    description: "INGAGIN invests in Goal Moon Shot, providing strategic capital to develop tokenized sports assets and fan engagement technology that connects global soccer communities through blockchain innovation.",
    link: "https://www.goalmoonshot.com",
    linkText: "Visit www.goalmoonshot.com",
  },
  {
    id: 7,
    title: "MythMemes",
    description: "INGAGIN invests in MythMemes, supporting the expansion of its NFT storytelling platform and blockchain marketplace where mythology, art, and digital collectibles intersect to create a new form of cultural expression.",
    link: "https://www.mythmemes.com",
    linkText: "Visit www.mythmemes.com",
  },
  {
    id: 8,
    title: "GOLDEXCG",
    description: "INGAGIN leads the creative marketing and digital growth strategy for GOLDEXCG, developing its brand identity, blockchain media presence, and investor communications to elevate visibility, credibility, and engagement across Web3 markets and global fintech communities.",
    link: "https://goldexcg.com",
    linkText: "Visit goldexcg.com",
  },
  {
    id: 9,
    title: "3-DWorld.com",
    description: "INGAGIN provides advanced advisory support to 3-DWorld, guiding metaverse architecture, gaming ecosystem development, asset tokenization models, blockchain deployment, and user engagement strategy to help the platform scale immersive virtual experiences, strengthen digital economies, and build a sustainable, interactive Web3 gaming environment.",
    link: "https://www.3-dworld.com",
    linkText: "Visit www.3-dworld.com",
  },
  {
    id: 10,
    title: "VirtualWorldCoins.com",
    description: "INGAGIN advises Virtual World Coins on Solana token design, utility planning, ecosystem expansion, marketplace development, and community-driven economic models, helping strengthen its virtual-world currency framework and accelerate its Web3 growth across interconnected metaverse environments.",
    link: "https://www.virtualworldcoins.com",
    linkText: "Visit www.virtualworldcoins.com",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
      {portfolioItems.map((item, index) => (
        <div
          key={item.id}
          className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {/* Content Section */}
          <div className="p-6 lg:p-7 flex flex-col flex-1 relative">
            {/* Title with accent line */}
            <div className="mb-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h2>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mt-1 text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
              <div className="h-0.5 w-0 bg-primary group-hover:w-12 transition-all duration-500 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-foreground/80 leading-relaxed text-sm lg:text-base flex-1 mb-4">
              {item.description}
            </p>

            {/* Link Section */}
            <div className="mt-auto pt-4 border-t border-border/50">
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300 group/link"
                onClick={(e) => e.stopPropagation()}
              >
                <span>{item.linkText}</span>
                <svg
                  className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
        </div>
      ))}
    </section>
  );
}

