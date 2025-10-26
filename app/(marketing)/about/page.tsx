import type { Metadata } from "next";

const principles = [
  "Результат-первым: считаем экономику до старта",
  "Прозрачно: показываем план, сроки и стоимость",
  "Без лишней бюрократии: MVP за 1–3 недели",
  "Безопасно: изолируем данные и доступы",
  "Командно: работаем вместе с бизнесом"
];

const team = [
  { role: "Аналитики", focus: "Выявляют процессы и собирают требования" },
  { role: "Архитекторы", focus: "Проектируют интеграции и стек" },
  { role: "ML-инженеры", focus: "Настраивают LLM, RAG и голос" },
  { role: "DevOps", focus: "Обеспечивают поставку и мониторинг" }
];

const vacancies = [
  { role: "ML-инженер", description: "Опыт работы с LLM и RAG, Python, LangChain." },
  { role: "Инженер интеграций", description: "n8n, CRM, API, low-code сценарии." }
];

export const metadata: Metadata = {
  title: "О нас",
  description: "Команда АИ Ассистент: аналитики, архитекторы, ML и DevOps, которые внедряют ИИ для МСБ."
};

export default function AboutPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">О нас</h1>
      <p className="section-subtitle">Студия прикладного ИИ, которая помогает МСБ запускать голосовых ассистентов и автоматизацию.</p>
      <div className="card">
        <h2 className="text-xl font-semibold text-white">Миссия</h2>
        <p className="mt-3 text-sm text-white/70">
          Делаем ИИ практичным и доступным для малого бизнеса: от первого звонка до масштабирования решения.
        </p>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold text-white">Принципы</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
          {principles.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-white">Команда</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
            {team.map((member) => (
              <li key={member.role}>
                <strong className="text-white">{member.role}:</strong> {member.focus}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-white">Вакансии</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
            {vacancies.map((vacancy) => (
              <li key={vacancy.role}>
                <strong className="text-white">{vacancy.role}:</strong> {vacancy.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
