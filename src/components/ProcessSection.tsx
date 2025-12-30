import { Button } from "@/components/ui/button";

interface ProgramItem {
  title: string;
  description: string;
}

const ProcessSection = () => {
  const program: ProgramItem[] = [
    {
      title: "Аутентикалық болмысымызға кедергі келтіретін бағдарламалар қалай қалыптасты?",
      description: "",
    },
    {
      title: "Эмоция және реакцияны бақылау, басқаруды үйрену",
      description: "Енді сезімдерің/әрекетің саған қарсы емес - сенің жағыңда болады",
    },
    {
      title: "Аутентикалық болмысымызға кері әсер етіп тұрған бағдарламалармен ары қарай қалай жұмыс жасаймыз?",
      description: "",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 lg:px-16 bg-white relative overflow-hidden">
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
            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-3xl bg-[#a30016] text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-[#d4bdae]"
                data-animate-on-scroll={`animate-swipe-up-strong animate-tilt-rise`}
                data-animate-delay={`${idx * 0.12 + 0.1}s`}
              >
                <div className="p-8 flex flex-col gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shadow-inner font-display text-2xl md:text-3xl font-semibold text-white">
                    {idx + 1}
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm md:text-base leading-relaxed text-white/90">{item.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

    
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
