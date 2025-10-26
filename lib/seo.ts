import { DefaultSeoProps } from "next-seo";

export const defaultSeo: DefaultSeoProps = {
  title: "АИ Ассистент — голосовые помощники и ИИ-автоматизация для малого и среднего бизнеса",
  description:
    "Внедряем ИИ для малого и среднего бизнеса: голосовые ассистенты, чат-боты, RAG и автоматизацию. Экспресс-аудит, MVP за 1–3 недели, окупаемость с первого квартала.",
  canonical: "https://aissistent.ru",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://aissistent.ru",
    siteName: "АИ Ассистент",
    images: [
      {
        url: "https://aissistent.ru/images/og.svg",
        width: 1200,
        height: 630,
        alt: "АИ Ассистент"
      }
    ]
  },
  twitter: {
    handle: "@aissistent",
    site: "@aissistent",
    cardType: "summary_large_image"
  }
};
