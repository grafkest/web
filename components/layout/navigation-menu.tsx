"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
}

interface NavigationMenuProps {
  menu: NavItem[];
}

export function NavigationMenu({ menu }: NavigationMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      <button
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Меню"
      >
        <Menu className="h-5 w-5" />
      </button>
      <ul className="hidden items-center gap-6 text-sm text-white/80 md:flex">
        {menu.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-white">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {open ? (
        <div className="absolute right-0 mt-2 flex w-52 flex-col gap-2 rounded-xl border border-white/10 bg-neutral-900/95 p-4 text-sm shadow-card md:hidden">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white">
              {item.title}
            </Link>
          ))}
          <Link href="/contacts?type=audit" className="button-primary text-center">
            Получить аудит
          </Link>
          <Link href="/contacts?type=demo" className="button-ghost text-center">
            Запросить демо
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
