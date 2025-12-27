const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Воркшоп полностью изменил мое отношение к бизнесу. Теперь я понимаю, что значит быть аутентичным.",
    },
    {
      text: "За 3 дня я получил больше ясности, чем за годы работы с коучами. Рекомендую всем!",
    },
    {
      text: "Пётр умеет находить те точки, которые мы сами не видим. Это бесценно.",
    },
    {
      text: "Лучшая инвестиция в себя за последние годы. Уже вижу результаты.",
    },
    {
      text: "Атмосфера, люди, контент — всё на высшем уровне. Спасибо команде!",
    },
    {
      text: "Наконец-то я нашел свое дело. Это не просто слова — это реальный результат.",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-16 bg-background">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
        Что говорят участники воркшопа:
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl text-primary/30 mb-4">"</div>
            <p className="text-foreground leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
