import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Ты разбираешь свои потребности",
      description:
        "Ты начинаешь видеть, где ты врёшь себе. Где ты тащишь. Где повторяешь чужое. Без теорий — просто по фактам твоей жизни и бизнеса.",
    },
    {
      number: "02",
      title: "Ты собираешь",
      description:
        "Свою стратегию. Свою нишу. Свои действия. Под свой ритм, свою природу, своё тело.",
    },
    {
      number: "03",
      title: "Ты смотришь с другого ракурса на себя и свою жизнь",
      description:
        'Не из «как заработать больше», а из «что работает у тебя — и почему ты этого не делаешь».',
    },
    {
      number: "04",
      title: "И ты выходишь с ясностью",
      description: "Что делать. Что не делать. С кем идти. Зачем.",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-16 bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          Что с тобой начинает происходить
          <br />
          <span className="text-primary">внутри этих 3-х дней:</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-primary/30 font-display text-4xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 rounded-xl"
          >
            Стать участником
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-muted font-medium px-8 py-6 rounded-xl"
          >
            Кто уже с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
