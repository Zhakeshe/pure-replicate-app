import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import speakerPhoto from "@/assets/speaker-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-screen bg-background text-foreground">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="relative flex flex-col items-center bg-primary px-6 pb-12 pt-7 text-primary-foreground">
          <div className="flex w-full items-center justify-between text-[0.82rem] font-semibold uppercase tracking-[0.24em]">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary-foreground" />
              <span>20-22 қаңтар</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary-foreground" />
              <span>онлайн ZOOM</span>
            </div>
          </div>

          <div className="mt-6 flex w-full justify-center">
            <img
              src={speakerPhoto}
              alt="Құлан Мектепберген"
              className="h-[360px] w-auto max-w-[360px] object-contain object-center drop-shadow-[0_26px_38px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

        <div className="relative -mt-14 space-y-8 rounded-t-[32px] bg-background px-6 pb-14 pt-14 shadow-[0_-18px_30px_-18px_rgba(0,0,0,0.35)]">
          <div className="space-y-5 text-center">
            <h1 className="font-display text-[clamp(2.65rem,9vw,3.4rem)] uppercase leading-[0.88] tracking-[0.2em] text-primary">
              АУТЕНТИЧНОСТЬ
            </h1>

            <p className="text-base leading-[1.75] text-foreground/90">
              Әр адамның бақытты ететін ісі бар. <strong>Өзіңдікін тап.</strong> «Керек», «болады» немесе «басқаларда істеп жатыр» дегенді емес.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-secondary px-3 py-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Plus className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold text-foreground">психологиялық диагностика</span>
          </div>

          <div className="flex gap-10">
            <div>
              <div className="font-display text-[2.6rem] font-semibold uppercase leading-none tracking-[0.08em] text-primary">3 күн</div>
              <p className="mt-3 text-[0.9rem] leading-snug text-muted-foreground">тренинг ұзақтығы<br />Құлан Мектепберген</p>
            </div>
            <div>
              <div className="font-display text-[2.6rem] font-semibold uppercase leading-none tracking-[0.08em] text-primary">30+</div>
              <p className="mt-3 text-[0.9rem] leading-snug text-muted-foreground">сағат тірі жұмыс<br />өз ісіңмен және күйіңмен</p>
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
      <div className="hidden min-h-screen grid-cols-[1.08fr_0.92fr] lg:grid">
        <div className="flex items-center bg-background px-16 py-16 xl:px-20 xl:py-20">
          <div className="flex w-full max-w-[620px] flex-col gap-8">
            <div className="flex items-center gap-7 text-[0.95rem] font-semibold uppercase tracking-[0.26em] text-primary">
              <div className="flex items-center gap-2 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>
                  <strong className="text-primary">20-22</strong> қаңтар
                </span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>
                  онлайн <strong className="text-primary">ZOOM</strong>
                </span>
              </div>
            </div>

            <div className="space-y-7">
              <h1 className="font-display text-[clamp(5rem,8vw,6.6rem)] font-semibold uppercase leading-[0.86] tracking-[0.22em] text-primary">
                АУТЕНТИЧНОСТЬ
              </h1>

              <p className="text-lg leading-[1.75] text-foreground/90">
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
                  <div className="font-display text-[3.5rem] font-semibold uppercase leading-none tracking-[0.1em] text-primary">3 күн</div>
                  <p className="mt-3 text-[0.98rem] leading-snug text-muted-foreground">тренинг ұзақтығы<br />Құлан Мектепберген</p>
                </div>
                <div>
                  <div className="font-display text-[3.5rem] font-semibold uppercase leading-none tracking-[0.1em] text-primary">30+</div>
                  <p className="mt-3 text-[0.98rem] leading-snug text-muted-foreground">сағат тірі жұмыс<br />өз ісіңмен және күйіңмен</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="rounded-2xl bg-primary px-10 py-6 text-base font-semibold uppercase tracking-wide text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-primary/90"
                  onClick={() => window.open("https://l.clck.bar/813189", "_blank")}
                >
                  Қатысамын
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border border-border bg-white px-10 py-6 text-base font-semibold uppercase tracking-wide text-foreground transition hover:-translate-y-0.5 hover:bg-muted"
                >
                  Толығырақ білу
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden bg-primary">
          <img
            src={speakerPhoto}
            alt="Құлан Мектепберген - тренинг спикері"
            className="h-[94vh] w-full max-w-[900px] object-contain object-center drop-shadow-[0_40px_60px_rgba(0,0,0,0.38)]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
