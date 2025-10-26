import type { Metadata } from "next";

const pains = [
  "Много однотипных вопросов от студентов",
  "Нет 24/7 поддержки",
  "Ручное обновление расписаний",
  "Отсутствие аналитики по успеваемости"
];

const scenarios = [
  "Чат-бот для поступления и поддержки",
  "Голосовой ассистент для горячей линии",
  "RAG по программам и учебным материалам",
  "Автоматические отчеты по вовлеченности"
];

const kpis = ["Время первого ответа", "Конверсия в оплату курса", "Удержание студентов", "Удовлетворенность"];

export const metadata: Metadata = {
  title: "Образование и курсы",
  description: "ИИ для школ и курсов: поддержка студентов, автоматизация процессов и аналитика результатов."
};

export default function EducationPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Образование и курсы</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Боли" items={pains} />
        <Card title="Сценарии" items={scenarios} />
        <Card title="KPI" items={kpis} />
      </div>
    </section>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
