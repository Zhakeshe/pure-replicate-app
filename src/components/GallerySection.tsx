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
    <section className="py-16 md:py-20 px-6 lg:px-16 bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_28%,rgba(128,0,16,0.06),transparent_30%),radial-gradient(circle_at_74%_18%,rgba(128,0,16,0.05),transparent_30%),radial-gradient(circle_at_60%_82%,rgba(128,0,16,0.05),transparent_28%)] animate-parallax-soft" />
      <h2
        className="relative font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-10 md:mb-12 text-center"
        data-animate-on-scroll="animate-rise-bloom"
      >
        Тренинг <span className="text-primary">ережесі:</span>
      </h2>

      <div
        className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto"
        data-animate-on-scroll="animate-swipe-right-strong"
        data-animate-delay="0.1s"
      >
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
            data-animate-on-scroll={`animate-tilt-rise animate-pop-glow ${idx % 2 === 0 ? 'animate-swipe-left-strong' : 'animate-swipe-right-strong'}`}
            data-animate-delay={`${idx * 0.1 + 0.1}s`}
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
