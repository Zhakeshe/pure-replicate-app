import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";
import p18Levels from "@/assets/p18-levels.png";

const DiagnosticSection = () => {
  const levels = [
    { title: "Стресс деңгейі", filled: 2, color: "bg-primary text-primary-foreground" },
    { title: "Өнімділік деңгейі", filled: 2, color: "bg-card border border-border text-foreground" },
    { title: "Энергия деңгейі", filled: 3, color: "bg-foreground text-background" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 lg:px-16 bg-muted/20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_18%_20%,rgba(128,0,16,0.05),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(128,0,16,0.04),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(128,0,16,0.05),transparent_26%)] animate-parallax-soft" />
      <div className="max-w-6xl mx-auto relative">
        {/* Two column layout for test section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text content */}
          <div className="animate-fade-in space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Психологиялық<br />диагностика
            </h2>

            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed">
              P18 психо-эмоционалдық күй трекерінің көмегімен бірден анықтайсың:
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
              onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
            >
              Тест тапсырамын
            </Button>
          </div>

          {/* Right - Level cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {levels.map((level, idx) => (
              <div
                key={idx}
                className={`${level.color} rounded-2xl p-6 min-h-[170px] flex flex-col justify-between hover:scale-[1.04] transition-transform duration-500 shadow-lg animate-tilt-rise`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((bar) => (
                      <div
                        key={bar}
                        className={`w-3 rounded-sm ${
                          bar <= level.filled
                            ? idx === 0
                              ? 'bg-primary-foreground'
                              : idx === 1
                                ? 'bg-foreground'
                                : 'bg-background'
                            : idx === 0
                              ? 'bg-primary-foreground/30'
                              : idx === 1
                                ? 'bg-muted-foreground/40'
                                : 'bg-background/40'
                        }`}
                        style={{ height: `${bar * 8 + 8}px` }}
                      />
                    ))}
                  </div>
                  <BarChart3 className={`w-6 h-6 ${idx === 0 ? 'text-primary-foreground/60' : idx === 1 ? 'text-muted-foreground' : 'text-background/60'}`} />
                </div>
                <h3 className="font-display text-xl font-semibold mt-6 leading-tight">
                  {level.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* 18 бағдарлама section with P18 image */}
        <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {/* Left - P18 Levels Image */}
          <div className="bg-card border border-border rounded-3xl p-4 md:p-6 overflow-hidden hover:shadow-2xl transition-shadow duration-500 animate-tilt-rise">
            <img
              src={p18Levels}
              alt="P18 барлық нәтижелер деңгейлері"
              className="w-full h-auto rounded-2xl animate-float-pulse"
            />
          </div>

          {/* Right - Text content */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              18 бағдарлама <span className="text-primary">деңгейлері</span>
            </h3>

            <div className="space-y-4 text-foreground/80 text-base md:text-lg leading-relaxed">
              <p>
                P18 тестімен өзіңнің психо-эмоционалдық жағдайыңды бірден біле аласың:
              </p>
              <ul className="list-decimal list-inside space-y-2">
                <li>Ішкі күйіңді көрсетеді</li>
                <li>Қай жерде қиындықтар барын анықтайды</li>
                <li>Кәсіби маманмен жұмыс істеуге дайындық</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
