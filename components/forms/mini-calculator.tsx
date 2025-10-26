"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { z } from "zod";

const calcSchema = z.object({
  volume_per_day: z.number().min(1),
  avg_handle_time: z.number().min(1),
  cost_per_hour: z.number().min(1),
  automation_rate: z.number().min(0).max(100)
});

export function MiniCalculator() {
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = {
      volume_per_day: Number(formData.get("volume_per_day")),
      avg_handle_time: Number(formData.get("avg_handle_time")),
      cost_per_hour: Number(formData.get("cost_per_hour")),
      automation_rate: Number(formData.get("automation_rate"))
    };

    const parse = calcSchema.safeParse(values);

    if (!parse.success) {
      setError("Заполните все поля корректно");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/calc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parse.data)
      });
      if (!response.ok) {
        throw new Error("Ошибка расчета");
      }
      const data = await response.json();
      setResult(data.monthlyBenefit ?? null);
    } catch (err) {
      console.error(err);
      setError("Не удалось выполнить расчет");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="card flex flex-col gap-4" onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold text-white">Калькулятор экономии</h3>
      <p className="text-sm text-white/70">Узнайте, сколько экономите за месяц с автоматизацией.</p>
      <div className="grid gap-3 md:grid-cols-2">
        <Input label="Обращений в день" name="volume_per_day" placeholder="50" />
        <Input label="Среднее время (мин)" name="avg_handle_time" placeholder="6" />
        <Input label="Стоимость часа (₽)" name="cost_per_hour" placeholder="600" />
        <Input label="% автоматизации" name="automation_rate" placeholder="60" />
      </div>
      <button type="submit" className="button-ghost" disabled={loading}>
        {loading ? "Считаем..." : "Оценить экономию"}
      </button>
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      {result !== null ? (
        <div className="rounded-xl bg-secondary/10 p-4 text-sm text-white">
          Потенциальная экономия: <span className="font-semibold text-secondary">≈ {result.toLocaleString()} ₽ / месяц</span>
        </div>
      ) : null}
    </form>
  );
}

function Input({ label, name, placeholder }: { label: string; name: string; placeholder: string }) {
  return (
    <label className="flex flex-col gap-2 text-sm text-white/70">
      <span className="text-xs uppercase tracking-wide text-white/60">{label}</span>
      <input
        type="number"
        name={name}
        placeholder={placeholder}
        step="any"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
      />
    </label>
  );
}
