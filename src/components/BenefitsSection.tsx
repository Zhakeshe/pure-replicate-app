import { Brain, Cat, Heart, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Өз ішкі әлеміңе саяхат:",
    description:
      "ата анаңның, қоғамның салып берген жолымен емес, өз аутентикалық дара жолыңды табуға бағыт-бағдар",
    Icon: Sparkles,
  },
  {
    title: "Барлық жерде қолдана алатын навык:",
    description:
      "осыған дейінгі болған оқиғада не болды?....сен оны қалай естідің?",
    Icon: Cat,
  },
  {
    title: "Еркіндік",
    description: "өзіңнің шынайы болмысыңды ашық көрсетуді",
    Icon: Heart,
  },
  {
    title: "Қайталана беретін сценарийлерді таза көруді:",
    description:
      "өзіңмен/адамдармен қарым-қатынаста, жұмыста/кәсіпте және т.б.",
    Icon: Brain,
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-[#fff7e1] py-16 md:py-24 px-6 lg:px-16" data-animate-on-scroll="animate-swipe-up-strong">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 md:mb-14 text-center">
          Бұл тренинг саған не бере алады?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map(({ title, description, Icon }, idx) => (
            <div
              key={title}
              className="flex gap-4 md:gap-5 items-start bg-[#fff2d4] border border-[#efd8a3] rounded-2xl p-5 md:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.06)]"
              data-animate-on-scroll={idx % 2 === 0 ? "animate-swipe-right-strong" : "animate-swipe-left-strong"}
              data-animate-delay={`${idx * 0.1 + 0.1}s`}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-[#f0d9a6] flex items-center justify-center shrink-0 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
                <Icon
                  className="w-6 h-6 md:w-7 md:h-7 text-[#a90016]"
                  strokeWidth={2.3}
                  fill={Icon === Heart ? "currentColor" : "none"}
                />
              </div>
              <div>
                <div className="font-display text-lg md:text-xl font-semibold text-[#2c1612] mb-1">{title}</div>
                <p className="text-base md:text-lg text-[#362521] leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
