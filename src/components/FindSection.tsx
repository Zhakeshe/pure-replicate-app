const FindSection = () => {
  const items = [
    {
      number: "01",
      title: "Дело",
      description: "которое делает тебя счастливым",
    },
    {
      number: "02",
      title: "Стратегию",
      description: "— без шума, без суеты, без лишнего",
    },
    {
      number: "03",
      title: "Конфигурацию",
      description: "в которой не надо тащить",
    },
    {
      number: "04",
      title: "Состояние",
      description: "где всё сходится: ты, дело и ритм",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-16 bg-background">
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16">
        За 3 дня <span className="text-primary">ты найдешь:</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {items.map((item) => (
          <div
            key={item.number}
            className="bg-primary rounded-2xl p-6 text-primary-foreground relative overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            {/* Decorative dots */}
            <div className="absolute top-4 right-4 flex gap-1">
              <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />
              <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />
              <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />
            </div>

            <div className="text-primary-foreground/40 font-display text-5xl font-bold mb-4">
              {item.number}
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindSection;
