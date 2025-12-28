const GallerySection = () => {
  const rules = [
    {
      title: "Уақытымен қосылу",
      description: "тренинг сағат 19:00-де басталып, 21:00-де аяқталатынын ескеру",
      icon: "⏰",
    },
    {
      title: "Қауіпсіз кеңістік",
      description: "бір-бірімізді бағаламаймыз және сынамаймыз",
      icon: "🛡️",
    },
    {
      title: "Жеке жауапкершілік",
      description: "қатысушы өз сезімдері мен реакцияларына өзі жауапты",
      icon: "🎯",
    },
    {
      title: "Белсенді қатысу",
      description: "өз ойың мен сезіміңді бөлісуден ұялма/қысылма",
      icon: "💬",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 lg:px-16 bg-background">
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-10 md:mb-12 text-center animate-fade-in">
        Тренинг <span className="text-primary">ережесі:</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in text-center"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-3xl md:text-4xl mb-3 md:mb-4">{rule.icon}</div>
            <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-2">
              {rule.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {rule.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
