import { Repeat, ShoppingCart, Search, Rocket, BarChart3 } from "lucide-react";

const features = [
  { icon: Repeat, title: "Меньше рутины", description: "Автоматизируем повторяющиеся операции." },
  { icon: ShoppingCart, title: "Больше продаж", description: "Ответы 24/7 повышают конверсию." },
  { icon: Search, title: "Знания под рукой", description: "Поиск по документам и базам." },
  { icon: Rocket, title: "Честные сроки", description: "MVP за 1–3 недели." },
  { icon: BarChart3, title: "Измеримый результат", description: "Смотрим только на KPI." }
];

export function FeatureGrid() {
  return (
    <section className="section">
      <div className="grid gap-6 text-sm md:grid-cols-5">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="card animate-fadeUp">
              <Icon className="h-6 w-6 text-secondary" />
              <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
