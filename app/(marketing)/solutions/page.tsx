import Link from "next/link";
import type { Metadata } from "next";

const solutions = [
  {
    title: "Голосовые ассистенты",
    description: "Телефония и мессенджеры с ИИ-оператором 24/7.",
    href: "/solutions/voice-assistants"
  },
  {
    title: "Чат-боты и роботы-операторы",
    description: "Автоматические ответы в Telegram, WhatsApp и на сайте.",
    href: "/solutions/chatbots"
  },
  {
    title: "RAG / Поиск по знаниям",
    description: "Ответы из ваших документов и баз данных.",
    href: "/solutions/rag"
  },
  {
    title: "Автоматизация процессов",
    description: "RPA + LLM для счетов, заявок, отчетов.",
    href: "/solutions/automation"
  },
  {
    title: "Аналитика и отчётность",
    description: "AI-инсайты и дашборды с отклонениями.",
    href: "/solutions/analytics"
  },
  {
    title: "Компьютерное зрение / ASR-TTS",
    description: "Контроль качества, распознавание речи и озвучка.",
    href: "/solutions/vision-asr-tts"
  }
];

export const metadata: Metadata = {
  title: "Решения под задачи малого и среднего бизнеса",
  description: "Готовые ИИ-решения: голосовые ассистенты, чат-боты, RAG, автоматизация процессов, аналитика и компьютерное зрение."
};

export default function SolutionsPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Решения под задачи малого и среднего бизнеса</h1>
      <p className="section-subtitle">
        Быстрый запуск MVP за 1–3 недели. Выбирайте готовые сценарии или соберите свой пакет.
      </p>
      <div className="grid gap-6 pt-12 md:grid-cols-2">
        {solutions.map((solution) => (
          <Link key={solution.href} href={solution.href} className="card">
            <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
            <p className="mt-2 text-sm text-white/70">{solution.description}</p>
            <span className="mt-4 inline-flex items-center text-sm text-secondary">Подробнее →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
