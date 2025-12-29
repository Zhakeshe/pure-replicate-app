import { Button } from "@/components/ui/button";
import p18Levels from "@/assets/p18-levels.png";

const DiagnosticSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-16 bg-muted/20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_18%_20%,rgba(128,0,16,0.05),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(128,0,16,0.04),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(128,0,16,0.05),transparent_26%)] animate-parallax-soft" />
      <div className="max-w-6xl mx-auto relative">
        {/* Two column layout for test section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <div className="space-y-6" data-animate-on-scroll="animate-swipe-left-strong">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Психологиялық<br />диагностика
            </h2>

            <div className="space-y-4 text-foreground/80 text-lg md:text-xl leading-relaxed">
              <p>P18 тестімен өзіңнің психо-эмоционалдық жағдайыңды бірден біле аласың:</p>
              <ul className="list-decimal list-inside space-y-2 text-base md:text-lg">
                <li>Ішкі күйіңді көрсетеді</li>
                <li>Қай жерде қиындықтар барын анықтайды</li>
                <li>Кәсіби маманмен жұмыс істеуге дайындық</li>
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
              onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
            >
              Тест тапсырамын
            </Button>
          </div>

          {/* Right - P18 Levels Image */}
          <div
            className="bg-card border border-border rounded-3xl p-4 md:p-6 overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            data-animate-on-scroll="animate-tilt-rise animate-swipe-right-strong"
            data-animate-delay="0.25s"
          >
            <img
              src={p18Levels}
              alt="P18 барлық нәтижелер деңгейлері"
              className="w-full h-auto rounded-2xl animate-float-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
