import type { Metadata } from "next";

const pains = [
  "Пропущенные заявки на доставку",
  "Нет актуального статуса рейсов",
  "Ручной расчет маршрутов",
  "Высокая нагрузка на диспетчеров"
];

const scenarios = [
  "Голосовой ассистент принимает заказы 24/7",
  "Чат-бот с отслеживанием статуса",
  "RAG по тарифам и зонам",
  "Автоформирование маршрутных листов"
];

const kpis = ["Время реакции", "Заполненность рейсов", "Количество пропущенных", "Стоимость доставки"];

export const metadata: Metadata = {
  title: "Логистика и доставка",
  description: "ИИ для логистики: автоматическое принятие заявок, статус трекинг и оптимизация маршрутов."
};

export default function LogisticsPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Логистика и доставка</h1>
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
