import { notFound } from "next/navigation";
import type { Metadata } from "next";

const cases = {
  "autoparts-voice": {
    title: "Голосовой ассистент для продажи автозапчастей",
    industry: "Автозапчасти",
    problem: "Операторы не справлялись с потоком звонков и тратил время на подбор деталей.",
    solution: "Голосовой ассистент + RAG по каталогу + интеграция с CRM.",
    implementation: "Собрали сценарии диалогов, обучили распознавание деталей, подключили к Asterisk и Bitrix24.",
    result: "−45% нагрузки, +18% конверсия, среднее время ответа < 10 секунд.",
    quote: "Теперь клиенты получают ответы моментально, а менеджеры занимаются сложными кейсами.",
    stack: "ASR, TTS, OpenAI, pgvector, Bitrix24"
  },
  "internal-rag": {
    title: "Внутренний RAG по техдокументации",
    industry: "Производство",
    problem: "Инженеры тратили время на поиск инструкций и стандартов.",
    solution: "Индексация файлов, векторная база и чат-бот для сотрудников.",
    implementation: "Подключили Google Drive и 1С, настроили права доступа и логирование запросов.",
    result: "Ответы за секунды и снижение времени на поиск на 60%.",
    quote: "Команда теперь находит нужный регламент за пару секунд.",
    stack: "OpenAI, pgvector, Google Drive, 1С"
  },
  "rpa-llm": {
    title: "RPA + LLM для обработки заявок",
    industry: "Сервис",
    problem: "Менеджеры вручную отвечали на однотипные заявки из почты и мессенджеров.",
    solution: "RPA-пайплайн с генерацией ответов и маршрутизацией.",
    implementation: "Связали почту, CRM и n8n, настроили шаблоны ответов и мониторинг.",
    result: "До 70% автоматизированных ответов и рост NPS на 12 пунктов.",
    quote: "Процессы стали прозрачными, а команда сосредоточилась на задачах роста.",
    stack: "n8n, OpenAI, Gmail, amoCRM"
  }
} as const;

type CaseKey = keyof typeof cases;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const current = cases[params.slug as CaseKey];
  if (!current) {
    return { title: "Кейс не найден" };
  }
  return {
    title: `${current.title} — кейс АИ Ассистент`,
    description: `${current.problem} Решение: ${current.solution} Результат: ${current.result}`
  };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const current = cases[params.slug as CaseKey];
  if (!current) {
    notFound();
  }

  return (
    <section className="section pt-24 pb-24">
      <span className="text-xs uppercase tracking-wide text-secondary">{current.industry}</span>
      <h1 className="section-title">{current.title}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Проблема" text={current.problem} />
        <Card title="Решение" text={current.solution} />
        <Card title="Внедрение" text={current.implementation} />
        <Card title="Результат" text={current.result} />
      </div>
      <blockquote className="card text-lg font-medium text-white/80">“{current.quote}”</blockquote>
      <div className="card text-sm text-white/70">
        <strong className="text-white">Стек:</strong> {current.stack}
      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm text-white/70">{text}</p>
    </div>
  );
}
