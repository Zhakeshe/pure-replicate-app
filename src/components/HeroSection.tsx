import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import speakerPhoto from "@/assets/speaker-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background text-foreground">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="relative bg-primary pb-20 text-primary-foreground">
          <div className="flex items-center justify-center gap-5 px-6 pt-5 text-[0.78rem] font-semibold uppercase tracking-[0.22em]">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary-foreground" />
              <span>20-22</span>
              <span className="text-primary-foreground/80">қаңтар</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary-foreground" />
              <span className="text-primary-foreground/90">онлайн</span>
              <span>ZOOM</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <img
              src={speakerPhoto}
              alt="Құлан Мектепберген"
              className="h-[320px] w-auto max-w-[320px] object-contain object-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        <div className="relative -mt-14 space-y-7 rounded-t-[32px] bg-background px-6 pb-12 pt-12 shadow-[0_-12px_28px_-18px_rgba(0,0,0,0.35)]">
          <h1 className="text-center font-display text-[2.8rem] font-extrabold uppercase leading-[0.92] tracking-[0.16em] text-primary">
            АУТЕНТИЧНОСТЬ
          </h1>

          <p className="text-base leading-[1.7] text-foreground/90">
            Әр адамның бақытты ететін ісі бар. <strong>Өзіңдікін тап.</strong> «Керек», «болады» немесе «басқаларда істеп жатыр» дегенді емес.
          </p>

          <div className="flex items-center gap-3 rounded-2xl bg-secondary px-3 py-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Plus className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold text-foreground">психологиялық диагностика</span>
          </div>

          <div className="flex gap-10 pt-1">
            <div>
              <div className="font-display text-4xl font-bold text-primary">3 күн</div>
              <p className="mt-2 text-[0.86rem] leading-snug text-muted-foreground">тренинг ұзақтығы<br />Құлан Мектепберген</p>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-primary">30+</div>
              <p className="mt-2 text-[0.86rem] leading-snug text-muted-foreground">сағат тірі жұмыс<br />өз ісіңмен және күйіңмен</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              size="lg"
              className="flex-1 rounded-2xl bg-primary px-6 py-6 text-base font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-primary/90"
              onClick={() => window.open("https://l.clck.bar/813189", "_blank")}
            >
              Қатысамын
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 rounded-2xl border border-border bg-white px-6 py-6 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-muted"
            >
              Толығырақ білу
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden min-h-screen grid-cols-[1.05fr_0.95fr] lg:grid">
        <div className="flex flex-col justify-center gap-10 px-14 py-20 xl:px-24">
          <div className="flex items-center gap-8 text-[0.95rem] font-semibold uppercase tracking-[0.22em] text-primary">
            <div className="flex items-center gap-2 text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-foreground">
                <strong className="text-primary">20-22</strong> қаңтар
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-foreground">
                онлайн <strong className="text-primary">ZOOM</strong>
              </span>
            </div>
          </div>

          <div className="max-w-[560px] space-y-7">
            <h1 className="font-display text-[5.25rem] font-extrabold uppercase leading-[0.9] tracking-[0.14em] text-primary">
              АУТЕНТИЧНОСТЬ
            </h1>

            <p className="text-lg leading-[1.8] text-foreground/90">
              Әр адамның бақытты ететін ісі бар. <strong>Өзіңдікін тап.</strong> «Керек», «болады» немесе «басқаларда істеп жатыр» дегенді емес.
            </p>

            <div className="flex items-center gap-3 rounded-2xl bg-secondary px-4 py-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Plus className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-foreground">психологиялық диагностика</span>
            </div>

            <div className="flex gap-16">
              <div>
                <div className="font-display text-5xl font-bold text-primary">3 күн</div>
                <p className="mt-2 text-[0.95rem] leading-snug text-muted-foreground">тренинг ұзақтығы<br />Құлан Мектепберген</p>
              </div>
              <div>
                <div className="font-display text-5xl font-bold text-primary">30+</div>
                <p className="mt-2 text-[0.95rem] leading-snug text-muted-foreground">сағат тірі жұмыс<br />өз ісіңмен және күйіңмен</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="rounded-2xl bg-primary px-10 py-7 text-base font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-primary/90"
                onClick={() => window.open("https://l.clck.bar/813189", "_blank")}
              >
                Қатысамын
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border border-border bg-white px-10 py-7 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-muted"
              >
                Толығырақ білу
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center bg-primary">
          <img
            src={speakerPhoto}
            alt="Құлан Мектепберген - тренинг спикері"
            className="h-[90vh] w-full max-w-[860px] object-contain object-center drop-shadow-[0_36px_60px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
