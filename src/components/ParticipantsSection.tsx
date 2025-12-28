import { TrendingUp, Brain, Wallet, MessageCircleOff, Sparkles, Frown, Target, Coins, EyeOff, Scale, Construction, HeartCrack, ShieldAlert, Smartphone } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Participant {
  title: string;
  Icon: LucideIcon;
  gradient: string;
}

const participants: Participant[] = [
  {
    title: "табысы өспей, бір орында тұрып қалған кәсіпкерлер",
    Icon: TrendingUp,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "өте көп мазасызданатын, қорқынышпен өмір сүретіндер",
    Icon: Brain,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "тапқан ақшасы өзінен артылмайтындар, қарызбен өмір сүретіндер",
    Icon: Wallet,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "өзінің ойын еркін бөлісе алмайтындар",
    Icon: MessageCircleOff,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "өз қалауларын ұмытқандар",
    Icon: Sparkles,
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    title: "ештеңе қызық емес, өмірдің мәні қалмады деп ойлайтындар",
    Icon: Frown,
    gradient: "from-slate-500 to-gray-600",
  },
  {
    title: "өзінің аутентикалық ісін тапқысы келетіндер",
    Icon: Target,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "ақша бітіп қалады деген оймен өмір сүретіндер",
    Icon: Coins,
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    title: "ұялып, ашыла алмайтындар (әлемге, әлеуметтік желілерде)",
    Icon: EyeOff,
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    title: "өзін өзгелермен салыстырып шаршағандар",
    Icon: Scale,
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "барлығы жақсы сияқты, бірақ алға жылжуға кедергі бар деп сезінетіндер",
    Icon: Construction,
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "қарым-қатынастары түсініксіз, әрі тұрақсыз болып жүргендер",
    Icon: HeartCrack,
    gradient: "from-red-500 to-rose-600",
  },
  {
    title: "өмір қауіпті, ешкімге сенуге болмайды деп ойлайтындар",
    Icon: ShieldAlert,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "әр түрлі тәуелділіктен қиналып жүргендер",
    Icon: Smartphone,
    gradient: "from-purple-500 to-fuchsia-600",
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
          {participants.map((participant, idx) => {
            const IconComponent = participant.Icon;
            return (
              <div 
                key={idx} 
                className="min-w-[200px] md:min-w-[250px] bg-card border border-border rounded-2xl p-4 md:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${participant.gradient} flex items-center justify-center mb-3 md:mb-4 shadow-lg`}>
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <p className="text-foreground text-sm md:text-base font-medium leading-relaxed">
                  {participant.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
