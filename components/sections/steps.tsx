const steps = ["Экспресс-аудит", "Проектирование", "MVP", "Замер эффекта", "Масштабирование"];

export function Steps() {
  return (
    <section className="section">
      <div className="flex flex-col gap-8">
        <h2 className="section-title">Как работаем</h2>
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="card animate-fadeUp">
              <span className="text-sm font-semibold text-secondary">Шаг {index + 1}</span>
              <p className="text-lg font-medium text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
