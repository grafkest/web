import type { Metadata } from "next";

const packages = [
  {
    name: "Lite",
    price: "от 90 000 ₽/мес",
    description: "Чат-бот или голос на 1 номер, 1 сценарий, интеграция с 1 CRM, до 5 тыс. обращений/мес, базовая аналитика, поддержка в чате."
  },
  {
    name: "Pro",
    price: "от 190 000 ₽/мес",
    description: "Голос + чат, 2–3 сценария, RAG до 20 тыс. страниц, 3 интеграции, KPI отчеты, поддержка по SLA."
  },
  {
    name: "Business",
    price: "индивидуально",
    description: "Расширенные интеграции, очереди, on-prem по запросу, SSO, расширенная безопасность, выделенная команда."
  }
];

const checklist = [
  "Аудит и проектирование",
  "Запуск MVP",
  "Мониторинг и аналитика",
  "Обучение команды",
  "Поддержка и развитие"
];

const options = ["Сбор данных", "Обучение моделей", "Дополнительные интеграции", "On-prem развёртывание"];

export const metadata: Metadata = {
  title: "Цены",
  description: "Пакеты ИИ-решений для малого и среднего бизнеса: Lite, Pro и Business. Быстрый запуск и понятная подписка."
};

export default function PricingPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Цены и пакеты</h1>
      <p className="section-subtitle">Выбирайте пакет или запросите индивидуальный расчёт.</p>
      <div className="grid gap-6 pt-12 md:grid-cols-3">
        {packages.map((pkg) => (
          <div key={pkg.name} className="card">
            <h2 className="text-xl font-semibold text-white">{pkg.name}</h2>
            <p className="text-2xl font-semibold text-secondary">{pkg.price}</p>
            <p className="text-sm text-white/70">{pkg.description}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-6 pt-12 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-white">Что входит</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
            {checklist.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-white">Доп. опции</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
            {options.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
