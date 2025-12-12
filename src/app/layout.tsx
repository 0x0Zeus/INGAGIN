import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";

import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "INGAGIN | Blockchain Growth Partner",
    template: "%s | INGAGIN",
  },
  description:
    "INGAGIN is a global blockchain incubator and advisory network supporting digital asset ventures from concept to scale.",
  metadataBase: new URL("https://www.ingagin.com"),
  openGraph: {
    title: "INGAGIN | Blockchain Growth Partner",
    description:
      "Partners to power growth and development across the blockchain economy.",
    url: "https://www.ingagin.com",
    siteName: "INGAGIN",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INGAGIN | Blockchain Growth Partner",
    description:
      "Partners to power growth and development across the blockchain economy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T8C57FN0BB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T8C57FN0BB');
          `}
        </Script>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,#11bfa610,transparent_55%),url('/images/blockchain-grid.svg')] bg-cover bg-fixed bg-center">
          <SiteHeader />
          <main className="flex-1 flex flex-col justify-center items-center">
            <div className="mx-auto w-full max-w-6xl px-6 py-16 flex-1">{children}</div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
