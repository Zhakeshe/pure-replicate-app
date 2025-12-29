import clsx from "clsx";

const results = [
  { percent: "32%", label: "Эмоциональная гибкость" },
  { percent: "52%", label: "Осознанность тела" },
  { percent: "76%", label: "Пайда" },
  { percent: "82%", label: "Қабылдану" },
  { percent: "41%", label: "Реакция неопределенности" },
  { percent: "44%", label: "Уверенность в себе" },
  { percent: "88%", label: "Самоконтроль" },
  { percent: "48%", label: "Энергия" },
  { percent: "47%", label: "Истощение" },
  { percent: "76%", label: "Реакция усталости" },
  { percent: "44%", label: "Личная дистанция" },
  { percent: "88%", label: "Өзіндік құн" },
  { percent: "36%", label: "Күрес" },
  { percent: "40%", label: "Страх оценки" },
  { percent: "86%", label: "Таңдау және әрекет" },
  { percent: "46%", label: "Тәуелділік" },
  { percent: "84%", label: "Вербализация" },
  { percent: "84%", label: "Драматизация" },
  { percent: "88%", label: "Иррациональность" },
  { percent: "88%", label: "Сомнения" },
];

const colorBands = [
  "from-amber-200 to-orange-200",
  "from-amber-300 to-orange-300",
  "from-orange-300 to-orange-400",
  "from-orange-400 to-orange-500",
  "from-orange-500 to-primary/90",
];

const ResultsSection = () => {
  return (
    <section className="relative bg-muted py-14 md:py-20 px-6 lg:px-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_10%_20%,rgba(128,0,16,0.05),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(128,0,16,0.05),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(128,0,16,0.05),transparent_30%)]" />
      <div className="relative grid lg:grid-cols-[1fr,360px] gap-8 max-w-6xl mx-auto items-center">
        <div>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-8"
            data-animate-on-scroll="animate-rise-bloom"
          >
            Барлық <span className="text-primary">нәтижелер</span>
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
            data-animate-on-scroll="animate-swipe-left-strong"
            data-animate-delay="0.1s"
          >
            {results.map((result, idx) => (
              <div
                key={`${result.label}-${idx}`}
                className={clsx(
                  "rounded-2xl p-4 md:p-5 shadow-lg border border-white/40 backdrop-blur-sm text-foreground",
                  "bg-gradient-to-br",
                  colorBands[idx % colorBands.length],
                  "hover:scale-[1.03] transition-transform duration-300",
                )}
                data-animate-on-scroll={`animate-tilt-rise ${idx % 2 === 0 ? "animate-swipe-left-strong" : "animate-swipe-right-strong"}`}
                data-animate-delay={`${idx * 0.03 + 0.12}s`}
              >
                <div className="font-display text-3xl md:text-4xl font-bold mb-1">{result.percent}</div>
                <div className="text-sm md:text-base font-medium leading-tight">{result.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-white border border-border shadow-2xl rounded-3xl p-6 md:p-8 space-y-4 relative overflow-hidden"
          data-animate-on-scroll="animate-swipe-right-strong"
          data-animate-delay="0.2s"
        >
          <div className="absolute -left-10 -top-10 w-28 h-28 rounded-full bg-primary/10" />
          <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-primary/10" />
          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wide">
              3 күндік тренингте
            </div>
            <p className="text-xl md:text-2xl font-display font-bold text-foreground leading-snug">
              18 базалық көрсеткіш арқылы ең негізгі себептер анықталады
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              P18 диагностикасының нәтижелері сенің күйің мен сенімдеріңді терең ашып, нақты қай жерден бастау керек екенін көрсетеді.
            </p>
            <button className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200">
              Қатысамын
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
