import "../styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Inter } from "next/font/google";
import { GoogleTagManager } from "@/components/analytics/google-tag-manager";
import { Analytics } from "@/components/analytics/analytics";
import { DefaultSeoConfig } from "@/components/seo/default-seo";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aissistent.ru"),
  title: {
    default: "АИ Ассистент — голосовые помощники и ИИ-автоматизация для малого и среднего бизнеса",
    template: "%s | АИ Ассистент"
  },
  description:
    "Внедряем ИИ для малого и среднего бизнеса: голосовые ассистенты, чат-боты, RAG и автоматизацию. Экспресс-аудит, MVP за 1–3 недели, окупаемость с первого квартала.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "АИ Ассистент",
    title: "АИ Ассистент — голосовые помощники и ИИ-автоматизация для малого и среднего бизнеса",
    description:
      "Внедряем ИИ для малого и среднего бизнеса: голосовые ассистенты, чат-боты, RAG и автоматизацию. Экспресс-аудит, MVP за 1–3 недели, окупаемость с первого квартала.",
    images: [{ url: "/images/og.svg", width: 1200, height: 630, alt: "АИ Ассистент" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "АИ Ассистент",
    description:
      "Внедряем ИИ для малого и среднего бизнеса: голосовые ассистенты, чат-боты, RAG и автоматизацию.",
    images: ["/images/og.svg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="bg-neutral-900 text-surface-foreground antialiased">
        <DefaultSeoConfig />
        <GoogleTagManager />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
