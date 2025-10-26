"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "aissistent-cookie";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function accept() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    }
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-white/10 bg-neutral-900/95 p-4 shadow-card">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/70">
          Мы используем cookies для аналитики и улучшения сервиса. Продолжая пользоваться сайтом, вы соглашаетесь с
          <a href="/legal/privacy" className="ml-1 underline">
            политикой конфиденциальности
          </a>
          .
        </p>
        <button onClick={accept} className="button-primary px-5 py-2 text-sm">
          Принять
        </button>
      </div>
    </div>
  );
}
