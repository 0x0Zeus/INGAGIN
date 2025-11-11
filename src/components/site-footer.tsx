import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-foreground/60">
          © {new Date().getFullYear()} INGAGIN. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="rounded-full transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Contact
          </Link>
          <Link
            href="/careers"
            className="rounded-full transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
}

