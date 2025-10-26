import type { Metadata } from "next";
import Link from "next/link";

const sources = ["Google Drive", "Notion", "1С", "CRM", "Базы знаний", "PDF и DOCX"];

const highlights = [
  "Поиск ответов за секунды",
  "Версионность и контроль доступа",
  "Метки релевантности и цитаты",
  "Отчетность по запросам",
  "Распознавание документов и изображений"
];

export const metadata: Metadata = {
  title: "RAG / Поиск по знаниям",
  description: "Индексация ваших документов и баз для быстрых и точных ответов сотрудникам и клиентам."
};

export default function RagPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">RAG / Поиск по знаниям</h1>
      <p className="section-subtitle">
        Ответы из ваших документов и баз данных с учетом прав доступа и актуальности.
      </p>
      <div className="card">
        <h2 className="text-xl font-semibold text-white">Источники</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-secondary">
          {sources.map((source) => (
            <span key={source} className="rounded-pill bg-secondary/10 px-3 py-1">
              {source}
            </span>
          ))}
        </div>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold text-white">Преимущества</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
          {highlights.map((item) => (
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
