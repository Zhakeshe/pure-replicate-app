const benefits = [
  {
    title: "Өз ішкі әлеміңе саяхат:",
    description:
      "ата анаңның, қоғамның салып берген жолымен емес, өз аутентикалық дара жолыңды табуға бағыт-бағдар",
    iconPath: "/airballoon_aerostat.svg",
  },
  {
    title: "Барлық жерде қолдана алатын навык:",
    description:
      "осыған дейінгі болған оқиғада не болды?....сен оны қалай естідің?",
    iconPath: "/glasses_stars_party.svg",
  },
  {
    title: "Еркіндік",
    description: "өзіңнің шынайы болмысыңды ашық көрсетуді",
    iconPath: "/heart_love.svg",
  },
  {
    title: "Қайталана беретін сценарийлерді таза көруді:",
    description:
      "өзіңмен/адамдармен қарым-қатынаста, жұмыста/кәсіпте және т.б.",
    iconPath: "/head_planning_process.svg",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 lg:px-16" data-animate-on-scroll="animate-swipe-up-strong">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 md:mb-14 text-center">
          Бұл тренинг саған не бере алады?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map(({ title, description, iconPath }, idx) => (
            <div
              key={title}
              className="flex gap-4 md:gap-5 items-start bg-[#7b0f23] border border-[#9b2c41] rounded-2xl p-5 md:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
              data-animate-on-scroll={idx % 2 === 0 ? "animate-swipe-right-strong" : "animate-swipe-left-strong"}
              data-animate-delay={`${idx * 0.1 + 0.1}s`}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-[#e8d7dc] flex items-center justify-center shrink-0 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
                <img src={iconPath} alt="benefit icon" className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <div>
                <div className="font-display text-lg md:text-xl font-semibold text-white mb-1">{title}</div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
