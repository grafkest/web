import type { Metadata } from "next";

const pains = [
  "Несвоевременные ответы на заявки",
  "Ручные расчёты смет",
  "Отсутствие прозрачности по статусам объектов",
  "Много бумажных документов"
];

const scenarios = [
  "Голосовой ассистент для первичной квалификации",
  "Автоматическое формирование КП",
  "RAG по проектной документации",
  "Уведомления по этапам и отгрузкам"
];

const kpis = ["Скорость реакции", "Конверсия в договор", "Время подготовки КП", "Количество ошибок"];

export const metadata: Metadata = {
  title: "Строительство и ремонтные бригады",
  description: "ИИ для строительных компаний: квалификация лидов, автоматизация КП и контроль проекта."
};

export default function ConstructionPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Строительство и ремонтные бригады</h1>
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
