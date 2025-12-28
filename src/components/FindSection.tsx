const FindSection = () => {
  const items = [
    {
      number: "01",
      title: "Өзіңді танып білесің",
      description: "ата анаңның, қоғамның салып берген жолымен емес, өз аутентикалық дара жолыңды табуға бағыт-бағдар",
    },
    {
      number: "02",
      title: "Навыктарға ие боласың",
      description: "осыған дейінгі болған оқиғада не болды?....сен оны қалай естідің?",
    },
    {
      number: "03",
      title: "Еркіндік",
      description: "өзіңнің шынайы болмысыңды ашық көрсетуді",
    },
    {
      number: "04",
      title: "Сценарийлерді көру",
      description: "өзіңмен/адамдармен қарым-қатынаста, жұмыста/кәсіпте қайталана беретін сценарийлерді таза көру",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 lg:px-16 bg-background">
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-center mb-10 md:mb-16 animate-fade-in">
        <span className="text-primary">Бұл тренинг саған</span> не бере алады?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={item.number}
            className="bg-primary rounded-2xl p-5 md:p-6 text-primary-foreground relative overflow-hidden group hover:scale-105 transition-transform duration-300 animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Decorative dots */}
            <div className="absolute top-4 right-4 flex gap-1">
              <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />
              <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />
              <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />
            </div>

            <div className="text-primary-foreground/40 font-display text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              {item.number}
            </div>
            <h3 className="font-display text-lg md:text-xl font-semibold mb-2">
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
