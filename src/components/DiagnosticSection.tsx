import { Activity, TrendingUp, Zap } from "lucide-react";

const DiagnosticSection = () => {
  const metrics = [
    {
      icon: Activity,
      title: "Уровень стресса",
      color: "text-red-500",
    },
    {
      icon: TrendingUp,
      title: "Уровень продуктивности",
      color: "text-green-500",
    },
    {
      icon: Zap,
      title: "Уровень энергичности",
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Психологическая диагностика
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          С помощью трекера психоэмоционального состояния вы мгновенно
          определите:
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 mx-auto ${metric.color}`}
              >
                <metric.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">{metric.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground">
          Во время воркшопа вы получите анализ на базе оценки параметров голоса
        </p>
      </div>
    </section>
  );
};

export default DiagnosticSection;
