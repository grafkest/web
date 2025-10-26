import Link from "next/link";
import type { Metadata } from "next";

const cases = [
  {
    slug: "autoparts-voice",
    industry: "Автозапчасти",
    goal: "Снизить нагрузку операторов",
    solution: "Голосовой ассистент + RAG",
    stack: "ASR, TTS, OpenAI, Bitrix24",
    result: "−45% нагрузка, +18% конверсия"
  },
  {
    slug: "internal-rag",
    industry: "Производство",
    goal: "Ускорить ответы сотрудников",
    solution: "RAG по техдокам",
    stack: "OpenAI, pgvector, 1С",
    result: "Ответы < 10 сек"
  },
  {
    slug: "rpa-llm",
    industry: "Сервис",
    goal: "Автоматизировать почтовые заявки",
    solution: "RPA + LLM",
    stack: "n8n, OpenAI, Gmail",
    result: "До 70% автоответов"
  }
];

export const metadata: Metadata = {
  title: "Кейсы",
  description: "Реальные внедрения ИИ для малого и среднего бизнеса: голосовые ассистенты, RAG и автоматизация."
};

export default function CasesPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Кейсы</h1>
      <p className="section-subtitle">Проблема → Решение → Внедрение → Результат.</p>
      <div className="grid gap-6 pt-12 md:grid-cols-3">
        {cases.map((item) => (
          <Link key={item.slug} href={`/cases/${item.slug}`} className="card">
            <span className="text-xs uppercase tracking-wide text-secondary">{item.industry}</span>
            <h3 className="text-lg font-semibold text-white">{item.solution}</h3>
            <p className="text-sm text-white/70">{item.goal}</p>
            <p className="text-sm text-secondary">{item.result}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
