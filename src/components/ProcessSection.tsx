import { Button } from "@/components/ui/button";
import { Theater, Heart, Flower2 } from "lucide-react";
import { LucideIcon } from "lucide-react";
import zoomTraining from "@/assets/zoom-training.jpg";

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
    <section className="py-16 md:py-24 px-6 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={zoomTraining}
                alt="Тренинг ZOOM форматында"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Title and description */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Тренинг қалай{" "}
              <span className="text-primary">өтеді?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
              Онлайн ZOOM платформасында 3 күн бойы жүреді. Сен өміріңді сырттан емес, іштен өзгертуді бастайсың.
            </p>

            <div className="flex items-center gap-4 text-foreground">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">3</span>
              </div>
              <div>
                <span className="font-semibold">күндік интенсив</span>
                <p className="text-muted-foreground text-sm">20, 21, 22 қаңтар • 19:00-21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Program cards */}
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center animate-fade-in">
          3 күндік тренинг <span className="text-primary">бағдарламасы:</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {program.map((item, idx) => {
            const IconComponent = item.Icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h4 className="font-display text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
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
