import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-900/90">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-semibold">АИ Ассистент</span>
          <p className="text-sm text-white/70">
            Студия прикладного ИИ для малого и среднего бизнеса: от аудита до внедрения и поддержки.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">Меню</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            <li>
              <Link href="/solutions">Решения</Link>
            </li>
            <li>
              <Link href="/industries">Отрасли</Link>
            </li>
            <li>
              <Link href="/cases">Кейсы</Link>
            </li>
            <li>
              <Link href="/pricing">Цены</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">Контакты</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            <li>
              <a href="mailto:hello@aissistent.ru">hello@aissistent.ru</a>
            </li>
            <li>
              <a href="tel:+78000000000">+7 800 000-00-00</a>
            </li>
            <li>
              <a href="https://t.me/aissistent" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-sm text-white/70">
          <Link href="/legal/privacy">Политика конфиденциальности</Link>
          <Link href="/legal/terms">Пользовательское соглашение</Link>
          <Link href="/legal/dpa">DPA</Link>
          <p>© {new Date().getFullYear()} АИ Ассистент</p>
        </div>
      </div>
    </footer>
  );
}
