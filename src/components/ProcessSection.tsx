import { Button } from "@/components/ui/button";
import { Theater, Heart, Flower2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProgramItem {
  Icon: LucideIcon;
  gradient: string;
  title: string;
  description: string;
}

const ProcessSection = () => {
  const program: ProgramItem[] = [
    {
      Icon: Theater,
      gradient: "from-primary to-primary/80",
      title: "Аутентикалық болмысымызға кедергі келтіретін бағдарламалар қалай қалыптасты?",
      description: "Бағдарламаларды көргеннен кейін, сенде басқаша таңдау жасауға мүмкіндік ашылады.",
    },
    {
      Icon: Heart,
      gradient: "from-primary to-primary/80",
      title: "Эмоция және реакцияны бақылау, басқаруды үйрену",
      description: "Енді сезімдерің/әрекетің саған қарсы емес - сенің жағыңда болады",
    },
    {
      Icon: Flower2,
      gradient: "from-primary to-primary/80",
      title: "Аутентикалық болмысымызға кері әсер етіп тұрған бағдарламалармен жұмыс",
      description: "Ол таңдау басқа болашаққа жетелейді. Ол болашақ сені басқа нәтижелерге апарады.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 lg:px-16 bg-[#f6eed5] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(128,0,16,0.08),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(128,0,16,0.06),transparent_28%),radial-gradient(circle_at_70%_85%,rgba(128,0,16,0.05),transparent_26%)]" />
      <div className="max-w-6xl mx-auto relative">
        <h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4"
          data-animate-on-scroll="animate-rise-bloom"
        >
          3 күндік тренинг <span className="text-primary">бағдарламасы:</span>
        </h2>
        <p
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 md:mb-14"
          data-animate-on-scroll="animate-fade-in"
          data-animate-delay="0.08s"
        >
          Онлайн ZOOM платформасында 3 күн бойы жүреді. Сен өміріңді сырттан емес, іштен өзгертуді бастайсың.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {program.map((item, idx) => {
            const IconComponent = item.Icon;
            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-3xl bg-[#a30016] text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-[#d4bdae]"
                data-animate-on-scroll={`animate-swipe-up-strong animate-tilt-rise`}
                data-animate-delay={`${idx * 0.12 + 0.1}s`}
              >
                <div className="absolute inset-x-6 top-5 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#f6eed5] text-primary font-semibold flex items-center justify-center shadow-md">
                    {idx + 1}
                  </div>
                </div>

                <div className="p-8 pt-16 flex flex-col gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shadow-inner">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-white/90">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-animate-on-scroll="animate-pop-glow"
          data-animate-delay="0.5s"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-7 rounded-2xl hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
          >
            Қатысамын
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
