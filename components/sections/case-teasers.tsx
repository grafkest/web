import Link from "next/link";

const cases = [
  {
    title: "Голосовой ассистент для автозапчастей",
    description: "Определение детали по диалогу, расчёт стоимости и запись на установку.",
    kpi: ["−45% нагрузка", "+18% конверсия"],
    href: "/cases/autoparts-voice"
  },
  {
    title: "RAG по вашим документам",
    description: "Ответы из внутренних файлов и баз знаний за секунды.",
    kpi: ["ответы за секунды"],
    href: "/cases/internal-rag"
  },
  {
    title: "RPA + LLM для заявок",
    description: "Автоматические ответы на почтовые и мессенджерные запросы клиентов.",
    kpi: ["до 70% автоматизации"],
    href: "/cases/rpa-llm"
  }
];

export function CaseTeasers() {
  return (
    <section className="section">
      <div className="flex flex-col gap-6">
        <h2 className="section-title">Примеры внедрений</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <Link key={item.title} href={item.href} className="card">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-secondary">
                  {item.kpi.map((kpi) => (
                    <span key={kpi} className="rounded-pill bg-secondary/10 px-3 py-1 text-secondary">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
