import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const TariffsSection = () => {
  const [showReceiptCta, setShowReceiptCta] = useState(false);

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
    <section id="tariff" className="py-16 md:py-24 px-6 lg:px-16 bg-muted relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_12%_24%,rgba(128,0,16,0.05),transparent_32%),radial-gradient(circle_at_78%_20%,rgba(128,0,16,0.06),transparent_32%),radial-gradient(circle_at_55%_84%,rgba(128,0,16,0.05),transparent_28%)] animate-parallax-soft" />
      <h2
        className="relative font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 md:mb-16 text-center"
        data-animate-on-scroll="animate-rise-bloom"
      >
        Тренинг <span className="text-primary">бағасы</span>
      </h2>

      <div className="max-w-md mx-auto">
        <div
          className="relative bg-primary text-primary-foreground rounded-3xl p-8 md:p-10 text-center hover:scale-[1.02] transition-transform duration-300"
          data-animate-on-scroll="animate-pop-glow animate-swipe-right-strong"
          data-animate-delay="0.1s"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 animate-gradient-pan rounded-3xl" />
          <h3 className="font-display text-xl md:text-2xl font-bold mb-6">
            {tariff.name}
          </h3>
          <div className="text-5xl md:text-6xl font-bold mb-8">{tariff.price}</div>

          <ul
            className="space-y-4 mb-10 text-left"
            data-animate-on-scroll="animate-swipe-left-strong"
            data-animate-delay="0.2s"
          >
            {tariff.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3"
                data-animate-on-scroll="animate-rise-bloom"
                data-animate-delay={`${idx * 0.08 + 0.25}s`}
              >
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
            onClick={() => {
              setShowReceiptCta(true);
              window.open("https://pay.kaspi.kz/pay/xfcntdmf", "_blank");
            }}
          >
            Төлем жасау
          </Button>

          {showReceiptCta && (
            <Button
              size="lg"
              className="mt-4 w-full bg-green-500 text-white hover:bg-green-600 font-medium py-7 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://l.clck.bar/813189", "_blank")}
            >
              Чек жіберу
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TariffsSection;
