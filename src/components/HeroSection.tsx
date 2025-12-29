import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AUTHENTICITY_LOGO_URL,
  SPEAKER_BACKGROUND_URL,
  SPEAKER_IMAGE_URL,
} from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden font-sans text-[#f8f1f3]">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Hero with red background and photo */}
        <div className="relative bg-primary">
          {/* Top info bar */}
          <div className="flex items-center justify-center gap-6 py-4 px-4 text-primary-foreground/85 text-[13px] tracking-wide uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
              <span className="font-semibold">20-22 қаңтар</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
              <span className="font-semibold">онлайн ZOOM</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="px-6 pt-1">
            <img
              src={AUTHENTICITY_LOGO_URL}
              alt="Аутентичность логотип"
              className="h-12 w-auto md:h-14 drop-shadow"
            />
          </h1>
          
          {/* Speaker image with red background */}
          <div
            className="relative mt-2 rounded-[32px] overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `url(${SPEAKER_BACKGROUND_URL})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/25 via-transparent to-transparent" />
            <img
              src={SPEAKER_IMAGE_URL}
              alt="Құлан Мектепберген"
              className="relative w-full h-[55vh] object-cover object-top"
            />
            <div className="absolute left-4 top-4 bg-background text-foreground px-3 py-1.5 rounded-full font-medium shadow-lg">
              Спикер
            </div>
          </div>
        </div>

        {/* Content below image */}
        <div className="bg-primary px-6 py-10 space-y-7 text-primary-foreground/95">
          <p className="text-[15px] leading-7 tracking-[0.01em]">
            Әр адамның бақытты ететін ісі бар. <strong>Өзіңдікін тап.</strong> «Керек», «болады» немесе «басқаларда істеп жатыр» дегенді емес.
          </p>

          {/* Diagnostic badge */}
          <div className="flex items-center gap-3 text-[15px] font-medium">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Plus className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-primary-foreground">психологиялық диагностика</span>
          </div>

          {/* Stats */}
          <div className="flex gap-12 pt-4 text-primary-foreground">
            <div>
              <div className="font-display text-4xl font-bold italic drop-shadow-lg">
                3 күн
              </div>
              <p className="text-primary-foreground/80 text-sm mt-1 leading-snug">
                тренинг ұзақтығы<br />Құлан Мектепберген
              </p>
            </div>
            <div>
              <div className="font-display text-4xl font-bold italic drop-shadow-lg">
                30+
              </div>
              <p className="text-primary-foreground/80 text-sm mt-1 leading-snug">
                сағат тірі жұмыс<br />өз ісіңмен және күйіңмен
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              size="lg"
              className="flex-1 bg-primary-foreground text-primary font-semibold py-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all"
              onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
            >
              Қатысамын
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 border-primary-foreground/60 text-primary-foreground font-semibold py-6 rounded-2xl bg-transparent hover:bg-primary-foreground/10 hover:scale-[1.01] transition-all"
            >
              Толығырақ білу
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - 50/50 split */}
      <div className="hidden lg:grid grid-cols-2 min-h-screen bg-primary text-primary-foreground/95">
        {/* Left side - Content on tinted background */}
        <div className="flex flex-col justify-center px-12 xl:px-20 py-16 bg-gradient-to-b from-primary via-primary/95 to-primary/90">
          {/* Top info bar */}
          <div className="flex items-center gap-6 mb-8 text-primary-foreground/85 text-sm tracking-[0.08em] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
              <span className="font-semibold">20-22 қаңтар</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
              <span className="font-semibold">онлайн ZOOM</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-6 animate-fade-in">
            <img
              src={AUTHENTICITY_LOGO_URL}
              alt="Аутентичность логотип"
              className="h-14 w-auto xl:h-16 drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
            />
          </h1>

          {/* Description */}
          <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Әр адамның бақытты ететін ісі бар. <strong>Өзіңдікін тап.</strong> «Керек», «болады» немесе «басқаларда істеп жатыр» дегенді емес.
          </p>

          {/* Diagnostic badge */}
          <div className="flex items-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center shadow-lg">
              <Plus className="w-5 h-5 text-primary" />
            </div>
            <span className="text-primary-foreground font-semibold text-base tracking-[0.01em]">психологиялық диагностика</span>
          </div>

          {/* Stats */}
          <div className="flex gap-16 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div>
              <div className="font-display text-5xl font-bold italic drop-shadow-lg">
                3 күн
              </div>
              <p className="text-primary-foreground/80 text-sm mt-2 leading-snug">
                тренинг ұзақтығы<br />Құлан Мектепберген
              </p>
            </div>
            <div>
              <div className="font-display text-5xl font-bold italic drop-shadow-lg">
                30+
              </div>
              <p className="text-primary-foreground/80 text-sm mt-2 leading-snug">
                сағат тірі жұмыс<br />өз ісіңмен және күйіңмен
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary font-semibold px-10 py-7 text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
            >
              Қатысамын
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/70 text-primary-foreground font-semibold px-10 py-7 text-base rounded-2xl bg-transparent hover:bg-primary-foreground/10 hover:scale-[1.02] transition-all duration-300"
            >
              Толығырақ білу
            </Button>
          </div>
        </div>

        {/* Right side - Speaker Photo on RED background */}
        <div
          className="relative flex items-end justify-center overflow-hidden bg-primary rounded-l-[48px] shadow-2xl"
          style={{
            backgroundImage: `url(${SPEAKER_BACKGROUND_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/25 via-transparent to-transparent" />
          <img
            src={SPEAKER_IMAGE_URL}
            alt="Құлан Мектепберген - тренинг спикері"
            className="relative w-full h-full object-cover object-top"
          />
          <div className="absolute left-6 top-6 bg-background text-foreground px-4 py-2 rounded-full font-medium shadow-lg">
            Спикер
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
