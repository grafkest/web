import type { Metadata } from "next";

const pains = [
  "Много повторяющихся запросов о наличии и статусах",
  "Долгая обработка корзин и заказов",
  "Расфокус операторов между каналами",
  "Отсутствие 24/7 поддержки"
];

const scenarios = [
  "Голосовой ассистент для приема заказов",
  "Чат-бот с каталогом и оплатой",
  "RAG по базе продуктов и FAQ",
  "Автоуведомления о доставке и возвратах"
];

const kpis = ["Скорость ответа", "Конверсия в оплату", "Средний чек", "Количество повторных покупок"];

export const metadata: Metadata = {
  title: "Розница и eCom",
  description: "ИИ-сценарии для магазинов и интернет-торговли: голос, чат-боты, RAG и автоматизация."
};

export default function RetailPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Розница и eCom</h1>
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
