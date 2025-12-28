import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const program = [
    {
      icon: "🎭",
      title: "Аутентикалық болмысымызға кедергі келтіретін бағдарламалар қалай қалыптасты?",
      description: "Бағдарламаларды көргеннен кейін, сенде басқаша таңдау жасауға мүмкіндік ашылады.",
    },
    {
      icon: "❤️",
      title: "Эмоция және реакцияны бақылау, басқаруды үйрену",
      description: "Енді сезімдерің/әрекетің саған қарсы емес - сенің жағыңда болады",
    },
    {
      icon: "🌷",
      title: "Аутентикалық болмысымызға кері әсер етіп тұрған бағдарламалармен жұмыс",
      description: "Ол таңдау басқа болашаққа жетелейді. Ол болашақ сені басқа нәтижелерге апарады.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 lg:px-16 bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in">
          3 күндік тренинг{" "}
          <span className="text-primary">бағдарламасы:</span>
        </h2>
        
        <p className="text-muted-foreground mb-8 md:mb-12 text-base md:text-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Cен өміріңді сырттан емес, іштен өзгертуді бастайсың.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {program.map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Қатысамын
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
