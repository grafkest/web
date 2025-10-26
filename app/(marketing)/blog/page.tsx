import Link from "next/link";
import type { Metadata } from "next";

const posts = [
  { slug: "roi-ai-smb", title: "Как посчитать ROI ИИ в малом бизнесе", excerpt: "Формулы расчёта, какие метрики учитывать и как быстро показать эффект." },
  { slug: "voice-assistant-3-weeks", title: "Голосовой ассистент за 1–3 недели", excerpt: "План внедрения голосового ИИ: от аудита до запуска." },
  { slug: "rag-without-pain", title: "RAG без боли", excerpt: "Как подготовить данные и не утонуть в интеграциях." }
];

export const metadata: Metadata = {
  title: "Блог",
  description: "Статьи, гайды и кейсы по внедрению ИИ для малого и среднего бизнеса."
};

export default function BlogPage() {
  return (
    <section className="section pt-24 pb-24">
      <h1 className="section-title">Блог</h1>
      <div className="grid gap-6 pt-12 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card">
            <h3 className="text-lg font-semibold text-white">{post.title}</h3>
            <p className="text-sm text-white/70">{post.excerpt}</p>
            <span className="mt-4 text-sm text-secondary">Читать →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
