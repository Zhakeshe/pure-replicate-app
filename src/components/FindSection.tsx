const FindSection = () => {
  const items = [
    {
      number: "01",
      title: "Істі",
      description: "сені бақытты ететін",
    },
    {
      number: "02",
      title: "Стратегияны",
      description: "— шусыз, асығыссыз, артықсыз",
    },
    {
      number: "03",
      title: "Конфигурацияны",
      description: "тартпайтын, сен сияқты",
    },
    {
      number: "04",
      title: "Күйді",
      description: "бәрі бір жерде: сен, іс және ырғақ",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 lg:px-16 bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_18%_25%,rgba(128,0,16,0.06),transparent_32%),radial-gradient(circle_at_78%_30%,rgba(128,0,16,0.06),transparent_30%),radial-gradient(circle_at_60%_78%,rgba(128,0,16,0.05),transparent_26%)] animate-parallax-soft" />
      <h2
        className="relative font-display text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16"
        data-animate-on-scroll="animate-rise-bloom"
      >
        3 күнде <span className="text-primary">табасың:</span>
      </h2>

      <div
        className="relative grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto"
        data-animate-on-scroll="animate-swipe-left-strong"
        data-animate-delay="0.1s"
      >
        {items.map((item, idx) => (
          <div
            key={item.number}
            className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            data-animate-on-scroll={`animate-pop-glow ${idx % 2 === 0 ? 'animate-swipe-left-strong' : 'animate-swipe-right-strong'}`}
            data-animate-delay={`${idx * 0.08 + 0.1}s`}
          >
            {/* Decorative dots */}
            <div className="absolute top-5 right-5 flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground/90" />
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary-foreground/30 font-display text-5xl md:text-6xl font-bold">
                {item.number}
              </div>
              <div className="pt-2">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 text-base md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindSection;
