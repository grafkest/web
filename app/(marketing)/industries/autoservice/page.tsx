import type { Metadata } from "next";

const pains = [
  "Операторы тратят время на подбор деталей",
  "Очереди звонков в сезон",
  "Нет актуального статуса по заказам",
  "Ручные расчеты стоимости"
];

const scenarios = [
  "Голосовой ассистент определяет детали по VIN",
  "RAG по каталогу запчастей",
  "Автоответы о статусе заказа и доставке",
  "Отправка смет и актов автоматически"
];

const kpis = ["Время ответа", "Конверсия в заказ", "Нагрузка операторов", "Повторные визиты"];

export const metadata: Metadata = {
  title: "Автосервисы и автозапчасти",
  description: "ИИ для автосервисов: подбор деталей, автоматические ответы и аналитика загрузки боксов."
};

export default function AutoservicePage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Автосервисы / Автозапчасти</h1>
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
