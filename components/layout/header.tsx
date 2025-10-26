import Link from "next/link";
import { NavigationMenu } from "./navigation-menu";

const menu = [
  { title: "Решения", href: "/solutions" },
  { title: "Отрасли", href: "/industries" },
  { title: "Кейсы", href: "/cases" },
  { title: "Цены", href: "/pricing" },
  { title: "Технологии", href: "/tech" },
  { title: "Блог", href: "/blog" },
  { title: "О нас", href: "/about" },
  { title: "Контакты", href: "/contacts" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-900/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-wide">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold">
            AISS
          </span>
          <span>АИ Ассистент</span>
        </Link>
        <NavigationMenu menu={menu} />
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contacts?type=audit" className="button-primary">
            Получить аудит
          </Link>
          <Link href="/contacts?type=demo" className="button-ghost">
            Запросить демо
          </Link>
        </div>
      </div>
    </header>
  );
}
