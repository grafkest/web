import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/lead-form";
import { BookingWidget } from "@/components/forms/booking-widget";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Заполните бриф, запишитесь на демо или свяжитесь с нами любым удобным способом."
};

export default function ContactsPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Связаться с нами</h1>
      <p className="section-subtitle">Оставьте заявку или сразу забронируйте демо-встречу.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <LeadForm />
        <BookingWidget />
      </div>
      <div className="card text-sm text-white/70">
        <p>Email: hello@aissistent.ru</p>
        <p>Телефон: +7 800 000-00-00</p>
        <p>Telegram: @aissistent</p>
      </div>
    </section>
  );
}
