import { Cat, Heart, MapPinHouse, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Өз ішкі әлеміңе сапар",
    description:
      "оны ашуға, әлеммен сапалы байланыс жасауға жол іздеуге, өз аутентикалық, дара жолыңды табуға бағыт алады.",
    Icon: Sparkles,
  },
  {
    title: "Барлық жерде қолайлы атмосфера",
    description: "жақындармен, командада және әлеуметтік ортада жылылықты сақтап, сенімді байланыс орнатуға мүмкіндік береді.",
    Icon: Cat,
  },
  {
    title: "Еркіндік",
    description: "өзіңіздің болашағыңызды ашық қарауға, өзіңіз қалаған бағытта шешім қабылдауға қолдау көрсетеді.",
    Icon: Heart,
  },
  {
    title: "Қайталанатын беретін сценарийлерді таза көру",
    description: "тамырдағы шектеуші сенімдерді байқап, оларды өзгертуге және жаңа таңдауларға жол ашуға көмектеседі.",
    Icon: MapPinHouse,
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
          {benefits.map(({ title, description, Icon }, idx) => (
            <div
              key={title}
              className="flex gap-4 md:gap-5 items-start bg-[#fbf8ef] border border-[#e6d9aa] rounded-2xl p-5 md:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.06)]"
              data-animate-on-scroll={idx % 2 === 0 ? "animate-swipe-right-strong" : "animate-swipe-left-strong"}
              data-animate-delay={`${idx * 0.1 + 0.1}s`}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <div>
                <div className="font-display text-lg md:text-xl font-semibold text-foreground mb-1">{title}</div>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
