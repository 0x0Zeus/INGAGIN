"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Apply", href: "/apply" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
    return undefined;
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={closeMobileMenu}
        >
          <Image
            src="/logo.png"
            alt="INGAGIN logo"
            width={140}
            height={40}
            priority
            className="h-auto w-10"
          />
          <span className="text-2xl font-bold">INGAGIN</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  "rounded-full px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "bg-white/10 text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="lg:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <nav
            className="fixed inset-x-0 top-20 z-50 mx-auto flex max-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col gap-2 overflow-y-auto border-t border-white/5 bg-background/95 px-6 py-6 shadow-[0_35px_120px_-45px_rgba(105,230,211,0.45)]"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "bg-white/10 text-foreground"
                      : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

