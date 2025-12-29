import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const TariffsSection = () => {
  const tariff = {
    name: "Өзіңді тануға алғашқы қадам жаса",
    price: "5 000 ₸",
    features: [
      "P18 тестін тапсыру, расшифровкасымен бірге",
      "1 ай доступ",
      "3 күндік тренинг: 20, 21, 22 қаңтар",
    ],
  };

  return (
    <section id="tariff" className="py-16 md:py-24 px-6 lg:px-16 bg-muted">
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 md:mb-16 text-center animate-rise-bloom">
        Тренинг <span className="text-primary">бағасы</span>
      </h2>

      <div className="max-w-md mx-auto">
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-10 text-center animate-pop-glow hover:scale-[1.02] transition-transform duration-300 animate-rise-bloom" style={{ animationDelay: '0.1s' }}>
          <h3 className="font-display text-xl md:text-2xl font-bold mb-6">
            {tariff.name}
          </h3>
          <div className="text-5xl md:text-6xl font-bold mb-8">{tariff.price}</div>
          
          <ul className="space-y-4 mb-10 text-left">
            {tariff.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-base md:text-lg">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="w-full bg-background text-primary hover:bg-background/90 font-medium py-7 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
          >
            Қатысамын
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TariffsSection;
