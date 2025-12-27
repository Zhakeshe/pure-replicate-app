const SpeakerSection = () => {
  const achievements = [
    "Автор образовательных бестселлеров",
    "Хэдлайнер крупнейших конференций по развитию личности и бизнеса",
    "Более 600 000 человек прошли его программы за 14 лет",
    "Ведёт один из самых влиятельных блогов о развитии",
    "Апологет простой, честной и сбалансированной жизни",
  ];

  const projects = ["«Бизнес Молодость» (2010–2020)", "«Метаморфозы» (2020–2024)"];

  return (
    <section className="py-20 px-6 lg:px-16 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Пётр Осипов"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-muted-foreground mb-2">Автор и методолог воркшопа</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Пётр Осипов
            </h2>

            <ul className="space-y-4 mb-8">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-6">
              <p className="text-muted-foreground mb-3">Основатель проектов:</p>
              <ul className="space-y-2">
                {projects.map((project, idx) => (
                  <li key={idx} className="text-foreground font-medium">
                    – {project}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
