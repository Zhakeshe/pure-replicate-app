import { TrendingUp, Brain, Sparkles, Frown, Coins, EyeOff, Scale, Construction, HeartCrack, ShieldAlert, Smartphone, Check } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Participant {
  title: string;
  Icon: LucideIcon;
}

const participants: Participant[] = [
  {
    title: "табысы өспей, бір орында тұрып қалған кәсіпкерлер",
    Icon: TrendingUp,
  },
  {
    title: "өте көп мазасызданатын, қорқынышпен өмір сүретіндер",
    Icon: Brain,
  },
  {
    title: "ақша бітіп қалады деген оймен өмір сүретіндер",
    Icon: Coins,
  },
  {
    title: "өз қалауларын ұмытқандар",
    Icon: Sparkles,
  },
  {
    title: "ештеңе қызық емес деп ойлайтындар",
    Icon: Frown,
  },
  {
    title: "ұялып, ашыла алмайтындар (әлемге, әлеуметтік желілерде)",
    Icon: EyeOff,
  },
  {
    title: "өзін өзгелермен салыстырып шаршағандар",
    Icon: Scale,
  },
  {
    title: "барлығы жақсы сияқты, бірақ алға жылжуға кедергі бар деп сезінетіндер",
    Icon: Construction,
  },
  {
    title: "қарым-қатынастары түсініксіз, әрі тұрақсыз болып жүргендер",
    Icon: HeartCrack,
  },
  {
    title: "өмір қауіпті, ешкімге сенуге болмайды деп ойлайтындар",
    Icon: ShieldAlert,
  },
  {
    title: "әр түрлі тәуелділіктен қиналып жүргендер (әлеуметтік желі, сериал, ойындар, алкоголь және т.б.)",
    Icon: Smartphone,
  },
];

const ParticipantsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_25%_30%,rgba(128,0,16,0.06),transparent_32%),radial-gradient(circle_at_70%_10%,rgba(128,0,16,0.05),transparent_28%),radial-gradient(circle_at_60%_80%,rgba(128,0,16,0.05),transparent_32%)] animate-parallax-soft" />
      <div className="px-6 lg:px-16 mb-10 md:mb-12 relative">
        <h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center"
          data-animate-on-scroll="animate-rise-bloom"
        >
          Кімдерге <span className="text-primary">арналған?</span>
        </h2>
      </div>

      {/* Table format grid */}
      <div className="px-6 lg:px-16 max-w-6xl mx-auto relative">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          data-animate-on-scroll="animate-swipe-left-strong"
          data-animate-delay="0.1s"
        >
          {participants.map((participant, idx) => {
            const IconComponent = participant.Icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group"
                data-animate-on-scroll={`animate-tilt-rise ${idx % 2 === 0 ? 'animate-swipe-left-strong' : 'animate-swipe-right-strong'}`}
                data-animate-delay={`${idx * 0.05 + 0.15}s`}
              >
                {/* Image placeholder with icon */}
                <div className="h-32 md:h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                  <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-primary/40 group-hover:text-primary/60 transition-colors duration-300" />
                  {/* Check badge */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Text */}
                <div className="p-4 md:p-5">
                  <p className="text-foreground text-sm md:text-base font-medium leading-relaxed text-center">
                    {participant.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
