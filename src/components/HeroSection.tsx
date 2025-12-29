import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import speakerPhoto from "@/assets/speaker-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-primary">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Top info bar */}
        <div className="flex items-center justify-center gap-6 py-4 px-4 text-primary-foreground/90 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
            <span><strong>20-22</strong> қаңтар</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
            <span>онлайн ZOOM</span>
          </div>
        </div>

        {/* Title over image */}
        <div className="relative">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground px-6 pt-4 tracking-tight uppercase italic">
            АУТЕНТИЧНОСТЬ
          </h1>
          
          {/* Speaker image */}
          <div className="relative mt-4">
            <img
              src={speakerPhoto}
              alt="Құлан Мектепберген"
              className="w-full h-[50vh] object-cover object-top"
            />
          </div>
        </div>

        {/* Content below image */}
        <div className="bg-background px-6 py-8 space-y-6">
          <p className="text-foreground text-base leading-relaxed">
            Әр адамның бақытты ететін ісі бар. <strong>Өзіңдікін тап.</strong> «Керек», «болады» немесе «басқаларда істеп жатыр» дегенді емес.
          </p>

          {/* Diagnostic badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Plus className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-foreground font-medium">психологиялық диагностика</span>
          </div>

          {/* Stats */}
          <div className="flex gap-12 pt-4">
            <div>
              <div className="text-primary font-display text-4xl font-bold">
                3 күн
              </div>
              <p className="text-muted-foreground text-sm mt-1">
                тренинг ұзақтығы<br />Құлан Мектепберген
              </p>
            </div>
            <div>
              <div className="text-primary font-display text-4xl font-bold">
                18+
              </div>
              <p className="text-muted-foreground text-sm mt-1">
                бағдарламаларды<br />талдаймыз
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              size="lg"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 rounded-2xl"
              onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
            >
              Қатысамын
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 border-border bg-background text-foreground hover:bg-muted font-medium py-6 rounded-2xl"
            >
              Толығырақ білу
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block min-h-screen">
        <div className="grid grid-cols-2 min-h-screen">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center px-16 py-12 bg-background">
            {/* Top info bar */}
            <div className="flex items-center gap-6 mb-8 text-foreground text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span><strong className="text-primary">20-22</strong> қаңтар</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>онлайн <strong className="text-primary">ZOOM</strong></span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-6xl xl:text-7xl font-bold text-primary tracking-tight uppercase italic mb-8 animate-fade-in">
              АУТЕНТИЧНОСТЬ
            </h1>

            {/* Description */}
            <p className="text-foreground text-lg leading-relaxed mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Әр адамның бақытты ететін ісі бар. <strong>Өзіңдікін тап.</strong> «Керек», «болады» немесе «басқаларда істеп жатыр» дегенді емес.
            </p>

            {/* Diagnostic badge */}
            <div className="flex items-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Plus className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium">психологиялық диагностика</span>
            </div>

            {/* Stats */}
            <div className="flex gap-16 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div>
                <div className="text-primary font-display text-5xl font-bold">
                  3 күн
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  тренинг ұзақтығы<br />Құлан Мектепберген
                </p>
              </div>
              <div>
                <div className="text-primary font-display text-5xl font-bold">
                  18+
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  бағдарламаларды<br />талдаймыз
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-7 text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
              >
                Қатысамын
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border bg-background text-foreground hover:bg-muted font-medium px-10 py-7 text-base rounded-2xl hover:scale-105 transition-all duration-300"
              >
                Толығырақ білу
              </Button>
            </div>
          </div>

          {/* Right side - Speaker Photo */}
          <div className="relative bg-primary">
            <img
              src={speakerPhoto}
              alt="Құлан Мектепберген - тренинг спикері"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
