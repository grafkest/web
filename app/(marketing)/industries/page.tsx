import Link from "next/link";
import type { Metadata } from "next";

const industries = [
  { title: "Розница и eCom", href: "/industries/retail" },
  { title: "Услуги и сервис", href: "/industries/services" },
  { title: "Автосервисы / автозапчасти", href: "/industries/autoservice" },
  { title: "Строительство и ремонт", href: "/industries/construction" },
  { title: "Логистика и доставка", href: "/industries/logistics" },
  { title: "Образование и курсы", href: "/industries/education" }
];

export const metadata: Metadata = {
  title: "Отрасли",
  description: "Индивидуальные сценарии ИИ для розницы, сервисов, автосервисов, строительства, логистики и образования."
};

export default function IndustriesPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Отрасли</h1>
      <p className="section-subtitle">Выберите отрасль и получите готовые сценарии внедрения ИИ.</p>
      <div className="grid gap-6 pt-12 md:grid-cols-3">
        {industries.map((industry) => (
          <Link key={industry.href} href={industry.href} className="card">
            <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
            <span className="mt-2 text-sm text-secondary">Смотреть сценарии →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
