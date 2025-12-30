import clsx from "clsx";

const results = [
  { percent: "16%", status: "Төмен", label: "Эмоционалды аштық", color: "#2bbf63" },
  { percent: "92%", status: "Өте жоғары", label: "Тастанды", color: "#e84436" },
  { percent: "52%", status: "Жоғары", label: "Пайдалану", color: "#f5832e" },
  { percent: "56%", status: "Жоғары", label: "Қабылдамау", color: "#f59552" },
  { percent: "62%", status: "Жоғары", label: "Сыншыл", color: "#25b9a3" },
  { percent: "100%", status: "Төмен", label: "Дәрменсіздік", color: "#d94743" },
  { percent: "64%", status: "Төмен", label: "Бойламайды", color: "#f48b2f" },
  { percent: "100%", status: "Өте жоғары", label: "Басқаруға еру", color: "#e84436" },
  { percent: "64%", status: "Төмен", label: "Басқаға еру", color: "#2db6aa" },
  { percent: "80%", status: "Өте жоғары", label: "Өзін құрбан ету", color: "#d94743" },
  { percent: "100%", status: "Өте жоғары", label: "Өзін сынау", color: "#e84436" },
  { percent: "64%", status: "Төмен", label: "Басқаға ренжу", color: "#f48b2f" },
  { percent: "80%", status: "Өте жоғары", label: "Пессимизм", color: "#d94743" },
  { percent: "12%", status: "Төмен", label: "Мойындалуды іздеу", color: "#2bbf63" },
  { percent: "92%", status: "Өте жоғары", label: "Ережелер", color: "#e84436" },
  { percent: "100%", status: "Өте жоғары", label: "Өзін жою", color: "#e84436" },
  { percent: "84%", status: "Өте жоғары", label: "Дисциплина жоқтығы", color: "#f5822e" },
  { percent: "12%", status: "Төмен", label: "Кем сезіну", color: "#2bbf63" },
];

const ResultsSection = () => {
  return (
    <section className="relative bg-white py-14 md:py-20 px-6 lg:px-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_10%_20%,rgba(128,0,16,0.04),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(128,0,16,0.05),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(128,0,16,0.05),transparent_30%)]" />
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
                  "rounded-xl p-4 md:p-5 shadow-lg text-white",
                  "hover:scale-[1.03] transition-transform duration-300",
                )}
                style={{ backgroundColor: result.color }}
                data-animate-on-scroll={`animate-tilt-rise ${idx % 2 === 0 ? "animate-swipe-left-strong" : "animate-swipe-right-strong"}`}
                data-animate-delay={`${idx * 0.03 + 0.12}s`}
              >
                <div className="font-display text-3xl md:text-4xl font-black leading-none">{result.percent}</div>
                <div className="text-sm md:text-base font-semibold leading-tight opacity-90">{result.status}</div>
                <div className="text-sm md:text-base font-medium leading-tight mt-1">{result.label}</div>
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
