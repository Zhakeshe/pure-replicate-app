import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 px-6 lg:px-16 py-12 flex flex-col justify-center">
        {/* Event Info */}
        <div className="flex items-center gap-6 mb-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-semibold">8-10</span>
            <span className="text-foreground">август</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-foreground">МТС Live Холл</span>
            <span className="text-primary font-semibold">Москва</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 tracking-tight">
          АУТЕНТИЧНОСТЬ
        </h1>

        {/* Subtitle */}
        <p className="text-foreground text-lg mb-6 max-w-lg leading-relaxed">
          У каждого есть дело, которое делает его счастливым.{" "}
          <span className="font-semibold">Найди своё.</span> А не то, что
          «надо», «можно» или «работает у других».
        </p>

        {/* Diagnostic Badge */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Plus className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-foreground font-medium">
            психологическая диагностика
          </span>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mb-10">
          <div>
            <div className="text-primary font-display text-4xl md:text-5xl font-bold mb-1">
              3 дня
            </div>
            <p className="text-muted-foreground text-sm">
              длительность воркшопа
              <br />
              Петра Осипова
            </p>
          </div>
          <div>
            <div className="text-primary font-display text-4xl md:text-5xl font-bold mb-1">
              30+
            </div>
            <p className="text-muted-foreground text-sm">
              часов живой работы
              <br />
              над твоим делом и состоянием
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base rounded-xl"
          >
            Стать участником
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-muted font-medium px-8 py-6 text-base rounded-xl"
          >
            Узнать подробнее
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block w-1/2 relative">
        <div className="absolute inset-0 bg-primary rounded-bl-[80px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&crop=face"
            alt="Workshop speaker"
            className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
