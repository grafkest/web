# АИ Ассистент — маркетинговый сайт студии прикладного ИИ

Маркетинговый сайт на Next.js (App Router) для студии, внедряющей ИИ-решения и голосовых ассистентов для малого и среднего бизнеса.

## Технологии

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next-seo
- React Hook Form + Zod

## Скрипты

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## Структура

- `app/(marketing)` — страницы сайта (главная, решения, отрасли, кейсы, блог, цены, технологии, контакты, legal).
- `app/api` — API-роуты для лидов (`/api/lead`) и калькулятора (`/api/calc`).
- `components` — UI-библиотека, формы, секции, хедер/футер.
- `lib` — SEO и schema JSON-LD.
- `public` — логотипы, favicon и OG-изображение.
- `styles/globals.css` — Tailwind и глобальные стили.

## Формы и интеграции

- Форма лида (`LeadForm`) отправляет данные в `/api/lead` c валидацией и rate limit.
- Мини-калькулятор (`MiniCalculator`) обращается к `/api/calc` для расчёта экономии.
- Виджет бронирования демо повторно использует `/api/lead`.

## SEO и аналитика

- `next-seo` с дефолтной конфигурацией и OG-метаданными.
- JSON-LD для FAQ и Organization на главной странице.
- Заготовки под Google Tag Manager и Vercel Analytics.

## Деплой

Рекомендуем деплой на Vercel. Для генерации `sitemap.xml` и `robots.txt` используется `next-sitemap` (`npm run postbuild` рекомендуется настроить в CI для генерации файлов).
