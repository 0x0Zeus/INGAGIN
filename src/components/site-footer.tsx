import Link from "next/link";

const footerLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-foreground/70 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} INGAGIN. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

