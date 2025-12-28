import { Button } from "@/components/ui/button";

const DiagnosticSection = () => {
  const features = [
    {
      number: "1",
      text: "Ішкі күйіңді көрсетеді",
    },
    {
      number: "2",
      text: "Қай жерде қиындықтар барын анықтайды",
    },
    {
      number: "3",
      text: "Кәсіби маманмен жұмыс істеуге дайындық",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in">
          P18 тестімен өзіңнің{" "}
          <span className="text-primary">психо-эмоционалдық</span> жағдайыңды бірден біле аласың
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 my-10 md:my-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto text-primary-foreground font-bold text-lg md:text-xl">
                {feature.number}
              </div>
              <p className="text-foreground font-medium text-sm md:text-base">{feature.text}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Тест тапсыру
        </Button>
      </div>
    </section>
  );
};

export default DiagnosticSection;
