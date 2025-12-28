const participants = [
  {
    title: "табысы өспей, бір орында тұрып қалған кәсіпкерлер",
    icon: "📊",
  },
  {
    title: "өте көп мазасызданатын, қорқынышпен өмір сүретіндер",
    icon: "😰",
  },
  {
    title: "тапқан ақшасы өзінен артылмайтындар, қарызбен өмір сүретіндер",
    icon: "💸",
  },
  {
    title: "өзінің ойын еркін бөлісе алмайтындар",
    icon: "🤐",
  },
  {
    title: "өз қалауларын ұмытқандар",
    icon: "🎭",
  },
  {
    title: "ештеңе қызық емес, өмірдің мәні қалмады деп ойлайтындар",
    icon: "😔",
  },
  {
    title: "өзінің аутентикалық ісін тапқысы келетіндер",
    icon: "🎯",
  },
  {
    title: "ақша бітіп қалады деген оймен өмір сүретіндер",
    icon: "💰",
  },
  {
    title: "ұялып, ашыла алмайтындар (әлемге, әлеуметтік желілерде)",
    icon: "🙈",
  },
  {
    title: "өзін өзгелермен салыстырып шаршағандар",
    icon: "⚖️",
  },
  {
    title: "барлығы жақсы сияқты, бірақ алға жылжуға кедергі бар деп сезінетіндер",
    icon: "🚧",
  },
  {
    title: "қарым-қатынастары түсініксіз, әрі тұрақсыз болып жүргендер",
    icon: "💔",
  },
  {
    title: "өмір қауіпті, ешкімге сенуге болмайды деп ойлайтындар",
    icon: "🛡️",
  },
  {
    title: "әр түрлі тәуелділіктен қиналып жүргендер",
    icon: "📱",
  },
];

const ParticipantsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="px-6 lg:px-16 mb-8 md:mb-10">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground animate-fade-in">
          Қандай қатысушылар тренингке{" "}
          <span className="text-primary">келеді/қатысады?</span>
        </h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 md:gap-6 px-6 lg:px-16 pb-6">
          {participants.map((participant, idx) => (
            <div 
              key={idx} 
              className="min-w-[200px] md:min-w-[250px] bg-card border border-border rounded-2xl p-4 md:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{participant.icon}</div>
              <p className="text-foreground text-sm md:text-base font-medium leading-relaxed">
                {participant.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
