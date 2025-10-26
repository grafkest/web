const faqs = [
  {
    question: "Срок запуска?",
    answer: "Обычно MVP готов за 1–3 недели. Точный план формируем после экспресс-аудита."
  },
  {
    question: "Нужны ли мои разработчики?",
    answer: "Мы берем на себя интеграции и оркестрацию. Подключаем команду заказчика, если требуется доступ к закрытым системам."
  },
  {
    question: "Какой стек используете?",
    answer: "LLM (OpenAI, Anthropic, локальные), RAG, n8n, CRM (Bitrix24, amoCRM, HubSpot), телефония, ASR/TTS."
  },
  {
    question: "Можно ли on-prem?",
    answer: "Да, для чувствительных данных предлагаем частный контур или разворачивание on-prem."
  },
  {
    question: "Как считается стоимость и окупаемость?",
    answer: "Собираем текущие метрики и считаем экономию времени и стоимости контакта. Показываем ROI по кварталам."
  }
];

export function FAQ() {
  return (
    <section className="section pb-24">
      <div className="flex flex-col gap-8">
        <h2 className="section-title">FAQ</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.question} className="card">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-sm text-white/70">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
