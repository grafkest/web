"use client";

import type { FormEvent } from "react";
import { useState } from "react";

interface BookingState {
  name: string;
  email: string;
  phone: string;
  preferred_slot: string;
  comment: string;
}

const initialState: BookingState = {
  name: "",
  email: "",
  phone: "",
  preferred_slot: "",
  comment: ""
};

export function BookingWidget() {
  const [state, setState] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          phone: state.phone,
          preferred_slot: state.preferred_slot,
          message: state.comment,
          goal: "demo",
          size: "1-10",
          industry: "demo",
          consent: true
        })
      });
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      setState(initialState);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form className="card flex flex-col gap-4" onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold text-white">Записаться на демо</h3>
      <input
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
        placeholder="Имя"
        value={state.name}
        onChange={(event) => setState((prev) => ({ ...prev, name: event.target.value }))}
        required
      />
      <input
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
        placeholder="Email"
        type="email"
        value={state.email}
        onChange={(event) => setState((prev) => ({ ...prev, email: event.target.value }))}
        required
      />
      <input
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
        placeholder="Телефон"
        value={state.phone}
        onChange={(event) => setState((prev) => ({ ...prev, phone: event.target.value }))}
        required
      />
      <input
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
        placeholder="Предпочтительное время"
        value={state.preferred_slot}
        onChange={(event) => setState((prev) => ({ ...prev, preferred_slot: event.target.value }))}
        required
      />
      <textarea
        className="h-24 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:border-secondary focus:outline-none"
        placeholder="Комментарий"
        value={state.comment}
        onChange={(event) => setState((prev) => ({ ...prev, comment: event.target.value }))}
      />
      <button type="submit" className="button-primary" disabled={status === "loading"}>
        {status === "loading" ? "Бронируем..." : "Забронировать"}
      </button>
      {status === "success" ? <p className="text-sm text-accent">Демо забронировано! Подтвердим по email.</p> : null}
      {status === "error" ? <p className="text-sm text-red-400">Не удалось забронировать. Попробуйте позже.</p> : null}
    </form>
  );
}
