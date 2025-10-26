import type { Metadata } from "next";
import Link from "next/link";

const insights = [
  "KPI-дэшборды и алерты",
  "Анализ звонков и переписок",
  "Прогнозирование загрузки",
  "Мониторинг SLA и качества",
  "Еженедельные AI-отчеты"
];

export const metadata: Metadata = {
  title: "Аналитика и отчётность",
  description: "Автоматические AI-инсайты, отчеты и дэшборды с отклонениями и рекомендациями."
};

export default function AnalyticsPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Аналитика и отчётность</h1>
      <p className="section-subtitle">
        AI-аналитика, которая показывает отклонения, прогнозы и рекомендации в удобных дашбордах.
      </p>
      <div className="card">
        <h2 className="text-xl font-semibold text-white">Что включаем</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
          {insights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="/contacts?type=demo" className="button-primary">
          Запросить демо
        </Link>
        <Link href="/pricing" className="button-ghost">
          Получить расчёт экономии
        </Link>
      </div>
    </section>
  );
}
