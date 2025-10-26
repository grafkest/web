import Link from "next/link";

export function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3">
      <Link href="#calculator" className="button-ghost shadow-soft">
        Оценить экономию
      </Link>
      <Link href="/contacts" className="button-primary shadow-soft">
        Оставить заявку
      </Link>
    </div>
  );
}
