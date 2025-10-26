import type { Metadata } from "next";

const pains = [
  "Распределение заявок вручную",
  "Несогласованные расписания мастеров",
  "Пропущенные звонки в пике",
  "Отсутствие аналитики по загрузке"
];

const scenarios = [
  "Голосовой ассистент для записи и напоминаний",
  "Чат-бот с выбором услуг и оплатой",
  "RAG для операторов по услугам и акциям",
  "Автоматические отчеты по загрузке и LTV"
];

const kpis = ["Доля заполненных слотов", "Количество пропущенных", "Конверсия в запись", "Повторные обращения"];

export const metadata: Metadata = {
  title: "Услуги и сервис",
  description: "ИИ для сервисных компаний: запись клиентов, автоматические ответы и аналитика загрузки."
};

export default function ServicesPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Услуги и сервис</h1>
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
