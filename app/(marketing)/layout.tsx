import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCTA } from "@/components/layout/sticky-cta";
import { CookieBanner } from "@/components/layout/cookie-banner";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-900 text-surface-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCTA />
      <CookieBanner />
    </div>
  );
}
