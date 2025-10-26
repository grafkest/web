import type { Metadata } from "next";
import Link from "next/link";

const capabilities = [
  "ASR и TTS с естественной речью",
  "Сценарии приветствия, квалификации и записи",
  "Интеграция с CRM и телефонией",
  "Извлечение сущностей: товар, дата, адрес",
  "Триаж и эскалации на живых операторов"
];

const integrations = ["Asterisk", "3CX", "Telegram", "WhatsApp", "Bitrix24", "amoCRM", "HubSpot", "Google Sheets", "1С", "n8n"];

const kpis = ["Среднее время ответа", "First Call Resolution", "Количество пропущенных", "Стоимость контакта"];

export const metadata: Metadata = {
  title: "Голосовые ассистенты",
  description:
    "Голосовой ИИ берет до 80% повторяющихся звонков: приветствие, квалификация, запись, интеграции с CRM."
};

export default function VoiceAssistantsPage() {
  return (
    <section className="section pt-24 pb-24">
      <div className="flex flex-col gap-6">
        <h1 className="section-title">Голосовые ассистенты</h1>
        <p className="section-subtitle">
          Голосовой ИИ берет на себя до 80% повторяющихся звонков: от приветствия до записи в календарь.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 className="text-xl font-semibold text-white">Возможности</h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
              {capabilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold text-white">Интеграции</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-secondary">
              {integrations.map((item) => (
                <span key={item} className="rounded-pill bg-secondary/10 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-white">KPI</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
            {kpis.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contacts?type=demo" className="button-primary">
            Запросить демо
          </Link>
          <Link href="/pricing" className="button-ghost">
            Получить расчёт экономии
          </Link>
        </div>
      </div>
    </section>
  );
}
