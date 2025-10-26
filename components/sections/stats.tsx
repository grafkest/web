const stats = [
  { value: "−30–60%", label: "Нагрузка на поддержку за 1–2 месяца" },
  { value: "+10–25%", label: "Конверсия благодаря ответам 24/7" },
  { value: "1–3 недели", label: "До MVP" },
  { value: "≤3–6 мес.", label: "Окупаемость" }
];

export function Stats() {
  return (
    <section className="section">
      <div className="card flex flex-wrap justify-between gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-3xl font-semibold text-white md:text-4xl">{stat.value}</span>
            <span className="text-sm text-white/70">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
