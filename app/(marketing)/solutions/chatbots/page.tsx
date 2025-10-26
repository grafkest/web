import type { Metadata } from "next";
import Link from "next/link";

const scenarios = [
  "Telegram и WhatsApp боты",
  "Боты для сайта и виджеты в CRM",
  "Роботы-операторы для обработки заявок",
  "Согласование, оплаты и уведомления",
  "Встроенный RAG для ответов из базы знаний"
];

const kpis = [
  "Скорость первого ответа",
  "Количество обработанных обращений",
  "Конверсия в оплату",
  "Уровень удовлетворенности"
];

export const metadata: Metadata = {
  title: "Чат-боты и роботы-операторы",
  description: "Автоматические ответы в мессенджерах и на сайте, интегрированные с CRM и процессами."
};

export default function ChatbotsPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Чат-боты и роботы-операторы</h1>
      <p className="section-subtitle">
        ИИ-боты, которые отвечают на вопросы, собирают лиды и запускают автоматические процессы.
      </p>
      <div className="card">
        <h2 className="text-xl font-semibold text-white">Готовые сценарии</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
          {scenarios.map((scenario) => (
            <li key={scenario}>• {scenario}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold text-white">KPI и результаты</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
          {kpis.map((item) => (
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
