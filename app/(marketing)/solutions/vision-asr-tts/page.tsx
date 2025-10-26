import type { Metadata } from "next";
import Link from "next/link";

const useCases = [
  "Контроль качества по видео",
  "Инвентаризация и распознавание товаров",
  "Распознавание речи и автоматические протоколы",
  "TTS-озвучка и дикторские голоса",
  "Диалоговые ассистенты на витринах"
];

export const metadata: Metadata = {
  title: "Компьютерное зрение / ASR-TTS",
  description: "Компьютерное зрение, распознавание и синтез речи для контроля качества и новых каналов продаж."
};

export default function VisionPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Компьютерное зрение / ASR-TTS</h1>
      <p className="section-subtitle">
        Используем зрение и голос для контроля качества, автоматизации продаж и нового клиентского опыта.
      </p>
      <div className="card">
        <h2 className="text-xl font-semibold text-white">Кейсы применения</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
          {useCases.map((item) => (
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
    </section>
  );
}
