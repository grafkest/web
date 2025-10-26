import { notFound } from "next/navigation";
import type { Metadata } from "next";

const posts = {
  "roi-ai-smb": {
    title: "Как посчитать ROI ИИ в малом бизнесе",
    intro: "С чего начать оценку ROI ИИ-проекта и какие метрики учитывать, чтобы показать результат в первом квартале.",
    sections: [
      {
        title: "Соберите базовые метрики",
        body: "Определите текущие показатели: количество обращений, стоимость часа специалиста, конверсию в продажу, средний чек."
      },
      {
        title: "Считайте экономию времени",
        body: "Сравните ручное время обработки и время с ИИ. Полученную разницу умножьте на стоимость часа и рабочие дни."
      },
      {
        title: "Добавьте эффект от конверсии",
        body: "Быстрые ответы и 24/7 поддержка увеличивают конверсию. Умножьте прирост % на средний чек и количество лидов."
      }
    ]
  },
  "voice-assistant-3-weeks": {
    title: "Голосовой ассистент за 1–3 недели",
    intro: "Поэтапный план запуска голосового ассистента: аудит, сценарии, интеграции, тестирование и масштаб.",
    sections: [
      {
        title: "Неделя 1",
        body: "Экспресс-аудит, выбор сценариев, подготовка данных и интеграций."
      },
      {
        title: "Неделя 2",
        body: "Сбор диалогов, настройка ASR/TTS, интеграция с CRM и телефонией."
      },
      {
        title: "Неделя 3",
        body: "Тестирование на реальных звонках, обучение команды, запуск и мониторинг KPI."
      }
    ]
  },
  "rag-without-pain": {
    title: "RAG без боли",
    intro: "Как подготовить данные, настроить права и избежать сюрпризов при запуске RAG.",
    sections: [
      {
        title: "Подготовьте данные",
        body: "Стандартизируйте форматы, удалите дубликаты, разбейте документы на смысловые блоки."
      },
      {
        title: "Продумайте доступ",
        body: "Сегментируйте пользователей и примените правила доступа по отделам и ролям."
      },
      {
        title: "Настройте контроль",
        body: "Логируйте запросы, добавьте обратную связь пользователей и регулярные обновления индекса."
      }
    ]
  }
} as const;

type PostKey = keyof typeof posts;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts[params.slug as PostKey];
  if (!post) {
    return { title: "Статья не найдена" };
  }
  return {
    title: `${post.title} — блог АИ Ассистент`,
    description: post.intro
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as PostKey];
  if (!post) {
    notFound();
  }

  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">{post.title}</h1>
      <p className="section-subtitle">{post.intro}</p>
      <div className="flex flex-col gap-6 text-white/80">
        {post.sections.map((section) => (
          <article key={section.title} className="card text-sm leading-relaxed">
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <p className="mt-2">{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
