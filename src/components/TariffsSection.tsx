import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const TariffsSection = () => {
  const tariff = {
    name: "Өзіңді тануға алғашқы қадам жаса",
    price: "5 000 ₸",
    features: [
      "p18 тестін тапсыру, расшифровкасымен бірге",
      "доступ 1 ай",
      "3 күндік тренинг: 20, 21, 22 қаңтар",
    ],
  };

  const scientists = [
    {
      name: "Джеффри ЯНГ",
    },
    {
      name: "Джанет КЛОСКО",
    },
    {
      name: "Марджори ВАЙСХААР",
    },
  ];

  return (
    <section id="tariff" className="py-16 md:py-20 px-6 lg:px-16 bg-background">
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-10 md:mb-12 text-center animate-fade-in">
        Қатысу <span className="text-primary">шарттары</span>
      </h2>

      <div className="max-w-md mx-auto mb-12 md:mb-16">
        <div className="bg-primary text-primary-foreground rounded-3xl p-6 md:p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
          <h3 className="font-display text-xl md:text-2xl font-bold mb-4">
            {tariff.name}
          </h3>
          <div className="text-4xl md:text-5xl font-bold mb-6">{tariff.price}</div>
          
          <ul className="space-y-3 mb-8 text-left">
            {tariff.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="w-full bg-background text-primary hover:bg-background/90 font-medium py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Қатысамын
          </Button>
        </div>
      </div>

      {/* Scientists reference */}
      <div className="max-w-3xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <p className="text-muted-foreground mb-6 text-sm md:text-base">
          Бағдарлама ғылыми теориялар мен идеяларға негізделген (2003 ж)
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {scientists.map((scientist, idx) => (
            <div 
              key={idx} 
              className="bg-muted px-4 md:px-6 py-2 md:py-3 rounded-xl animate-fade-in"
              style={{ animationDelay: `${idx * 0.1 + 0.4}s` }}
            >
              <span className="font-medium text-foreground text-sm md:text-base">{scientist.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TariffsSection;
