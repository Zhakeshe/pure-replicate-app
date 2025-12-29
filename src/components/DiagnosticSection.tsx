import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";
import p18Levels from "@/assets/p18-levels.png";

const DiagnosticSection = () => {
  const levels = [
    { title: "Стресс деңгейі", filled: 2, color: "bg-primary" },
    { title: "Өнімділік деңгейі", filled: 2, color: "bg-foreground" },
    { title: "Энергия деңгейі", filled: 3, color: "bg-primary" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 lg:px-16 bg-background">
      {/* Two column layout for test section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text content */}
          <div className="animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 italic">
              Психологиялық<br />диагностика
            </h2>

            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
              P18 психо-эмоционалдық күй трекерінің көмегімен бірден анықтайсың:
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-7 text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
            >
              Тест тапсырамын
            </Button>
          </div>

          {/* Right - Level cards */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {levels.map((level, idx) => (
              <div
                key={idx}
                className={`${idx === 0 || idx === 2 ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-foreground'} rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((bar) => (
                      <div
                        key={bar}
                        className={`w-3 h-${bar === 1 ? '4' : bar === 2 ? '6' : '8'} rounded-sm ${
                          bar <= level.filled
                            ? idx === 0 || idx === 2 ? 'bg-primary-foreground' : 'bg-foreground'
                            : idx === 0 || idx === 2 ? 'bg-primary-foreground/30' : 'bg-muted-foreground/30'
                        }`}
                        style={{ height: `${bar * 8 + 8}px` }}
                      />
                    ))}
                  </div>
                  <BarChart3 className={`w-6 h-6 ${idx === 0 || idx === 2 ? 'text-primary-foreground/50' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="font-display text-xl font-semibold mt-4">
                  {level.title}
                </h3>
              </div>
            ))}

            <p className="text-muted-foreground text-sm pt-4">
              Воркшоп кезінде дауыс параметрлерін бағалау негізінде талдау аласыз
            </p>
          </div>
        </div>

        {/* P18 Levels Image */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            18 бағдарлама <span className="text-primary">деңгейлері</span>
          </h3>
          <div className="bg-card border border-border rounded-3xl p-4 md:p-8 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={p18Levels}
              alt="P18 барлық нәтижелер деңгейлері"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
