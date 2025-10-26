"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  company: z.string().min(2, "Укажите компанию"),
  size: z.enum(["1-10", "11-50", "51-250"]),
  role: z.string().min(2, "Укажите роль"),
  email: z.string().email("Некорректный email"),
  phone: z.string().min(6, "Укажите телефон"),
  industry: z.string().min(2, "Выберите отрасль"),
  goal: z.string().min(2, "Укажите цель"),
  message: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Необходимо согласие" })
  }),
  token: z.string().optional()
});

export type LeadFormValues = z.infer<typeof formSchema>;

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LeadFormValues>({ resolver: zodResolver(formSchema) });

  async function onSubmit(values: LeadFormValues) {
    setStatus("loading");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }
      reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form className="card flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Имя" error={errors.name?.message}>
          <input
            type="text"
            {...register("name")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          />
        </Field>
        <Field label="Компания" error={errors.company?.message}>
          <input
            type="text"
            {...register("company")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          />
        </Field>
        <Field label="Размер команды" error={errors.size?.message}>
          <select
            {...register("size")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          >
            <option value="">Выберите</option>
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-250">51–250</option>
          </select>
        </Field>
        <Field label="Роль" error={errors.role?.message}>
          <input
            type="text"
            {...register("role")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          />
        </Field>
        <Field label="Телефон" error={errors.phone?.message}>
          <input
            type="tel"
            {...register("phone")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          />
        </Field>
        <Field label="Отрасль" error={errors.industry?.message}>
          <select
            {...register("industry")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          >
            <option value="">Выберите</option>
            <option value="retail">Розница и eCom</option>
            <option value="services">Услуги и сервис</option>
            <option value="autoservice">Автосервисы</option>
            <option value="construction">Строительство и ремонт</option>
            <option value="logistics">Логистика и доставка</option>
            <option value="education">Образование и курсы</option>
          </select>
        </Field>
        <Field label="Цель" error={errors.goal?.message}>
          <select
            {...register("goal")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
          >
            <option value="">Выберите</option>
            <option value="voice">Голосовой ассистент</option>
            <option value="chat">Чат-бот</option>
            <option value="rag">Поиск по знаниям</option>
            <option value="automation">Автоматизация процессов</option>
            <option value="analytics">Аналитика</option>
          </select>
        </Field>
      </div>
      <Field label="Комментарий" error={errors.message?.message}>
        <textarea
          {...register("message")}
          className="h-28 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
        />
      </Field>
      <div className="flex items-start gap-2 text-xs text-white/70">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-secondary focus:ring-secondary"
        />
        <span>
          Соглашаюсь на обработку персональных данных и условия <a href="/legal/privacy" className="underline">политики конфиденциальности</a>.
        </span>
      </div>
      <button type="submit" className="button-primary" disabled={status === "loading"}>
        {status === "loading" ? "Отправляем..." : "Отправить"}
      </button>
      {status === "success" && <p className="text-sm text-accent">Спасибо! Свяжемся в течение рабочего дня.</p>}
      {status === "error" && <p className="text-sm text-red-400">Не удалось отправить форму. Попробуйте позже.</p>}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm text-white/70">
      <span className="text-xs uppercase tracking-wide text-white/60">{label}</span>
      {children}
      {error ? <span className="text-xs text-red-400">{error}</span> : null}
    </label>
  );
}
