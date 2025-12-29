import { TrendingUp, Brain, Wallet, MessageCircleOff, Sparkles, Frown, Target, Coins, EyeOff, Scale, Construction, HeartCrack, ShieldAlert, Smartphone, Check } from "lucide-react";
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
    title: "тапқан ақшасы өзінен артылмайтындар",
    Icon: Wallet,
  },
  {
    title: "өзінің ойын еркін бөлісе алмайтындар",
    Icon: MessageCircleOff,
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
    title: "өзінің аутентикалық ісін тапқысы келетіндер",
    Icon: Target,
  },
  {
    title: "ақша бітіп қалады деген оймен өмір сүретіндер",
    Icon: Coins,
  },
];

const ParticipantsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="px-6 lg:px-16 mb-10 md:mb-12">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center animate-fade-in">
          Кімдерге <span className="text-primary">арналған?</span>
        </h2>
      </div>

      {/* Table format grid */}
      <div className="px-6 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {participants.map((participant, idx) => {
            const IconComponent = participant.Icon;
            return (
              <div 
                key={idx} 
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${idx * 0.05}s` }}
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
