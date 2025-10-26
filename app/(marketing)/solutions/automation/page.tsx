import type { Metadata } from "next";
import Link from "next/link";

const automations = [
  "Автоответы на email и мессенджеры",
  "Генерация счетов и актов",
  "Обработка заявок и распределение задач",
  "Обновление CRM и ERP статусов",
  "Интеграция с n8n и RPA сценарии"
];

export const metadata: Metadata = {
  title: "Автоматизация процессов",
  description: "RPA + LLM для рутины: заявки, счета, ответы, интеграции и аналитика."
};

export default function AutomationPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Автоматизация процессов</h1>
      <p className="section-subtitle">
        Снимаем ручные операции и Excel за счет цепочек LLM + RPA и готовых интеграций.
      </p>
      <div className="card">
        <h2 className="text-xl font-semibold text-white">Сценарии автоматизации</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
          {automations.map((item) => (
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
