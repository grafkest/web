import Link from "next/link";

export function Hero() {
  return (
    <section className="section pt-24">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="flex flex-col gap-6 animate-fadeUp">
          <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-secondary">
            ИИ для МСБ
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Искусственный интеллект для малого и среднего бизнеса: голос, автоматизация, знания
          </h1>
          <p className="text-lg text-white/70 md:text-xl">
            Запускаем ИИ-решения, которые экономят время и деньги. От аудита до внедрения за 1–3 недели.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contacts?type=audit" className="button-primary">
              Получить аудит
            </Link>
            <Link href="/contacts?type=demo" className="button-ghost">
              Демо-встреча 30 мин
            </Link>
          </div>
        </div>
        <div className="card animate-fadeUp">
          <h3 className="mb-4 text-xl font-semibold">Что внутри экспресс-аудита</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li>Разбор клиентского пути и точек контакта</li>
            <li>Карточка процессов с приоритетами автоматизации</li>
            <li>Расчёт быстрого эффекта и стоимости MVP</li>
            <li>План внедрения на 1–3 недели</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
