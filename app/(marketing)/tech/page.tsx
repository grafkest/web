import type { Metadata } from "next";

const tech = {
  llm: ["OpenAI", "Anthropic", "Local LLM"],
  vector: ["pgvector", "FAISS"],
  voice: ["ASR", "TTS", "Телефония", "Мессенджеры"],
  integrations: ["n8n", "Bitrix24", "amoCRM", "HubSpot", "1С", "Google Sheets"],
  security: ["Разделение сред", "Шифрование", "Контроль доступа", "Логирование"],
  reliability: ["Мониторинг", "Алерты", "Откаты", "Canary-релизы"]
};

export const metadata: Metadata = {
  title: "Технологии",
  description: "Стек, безопасность и интеграции АИ Ассистент: LLM, RAG, голос, n8n, CRM и мониторинг."
};

export default function TechPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Технологии и безопасность</h1>
      <p className="section-subtitle">Прозрачно показываем стек, подход к безопасности и интеграции.</p>
      <div className="grid gap-6 pt-12 md:grid-cols-2">
        <Card title="LLM" items={tech.llm} />
        <Card title="Векторные базы" items={tech.vector} />
        <Card title="Голос и коммуникации" items={tech.voice} />
        <Card title="Интеграции" items={tech.integrations} />
        <Card title="Безопасность" items={tech.security} />
        <Card title="Надёжность" items={tech.reliability} />
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
