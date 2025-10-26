export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "АИ Ассистент",
  url: "https://aissistent.ru",
  logo: "https://aissistent.ru/images/logo.svg",
  sameAs: [
    "https://t.me/aissistent",
    "https://www.linkedin.com/company/aissistent"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@aissistent.ru"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько времени занимает запуск?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Обычно MVP — 1–3 недели. Точные сроки зависят от интеграций и объёма данных."
      }
    },
    {
      "@type": "Question",
      name: "Как обеспечивается безопасность данных?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Доступы и ключи изолированы, логи анонимизированы, возможен on-prem и SSO."
      }
    }
  ]
};

export const breadcrumbFactory = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});
