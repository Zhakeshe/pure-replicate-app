import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const TariffsSection = () => {
  const tariffs = [
    {
      name: "SMART",
      tariff: "Тариф: 1",
      duration: "2 дня воркшопа | ПТ, СБ",
      features: [
        'Участие в блоке «Вопрос–ответ» — задайте свой вопрос эксперту',
        "Карта аутентичности — PDF с инсайтами, вопросами и инструментами",
        "Психодиагностика — для глубокой саморефлексии",
      ],
      popular: false,
      soldOut: false,
    },
    {
      name: "PREMIUM",
      tariff: "Тариф: 2",
      duration: "3 дня воркшопа | ПТ, СБ, ВС",
      features: [
        'Участие в блоке «Вопрос–ответ» — задайте свой вопрос эксперту',
        "Карта аутентичности — PDF с инсайтами, вопросами и инструментами",
        "Видеозапись на 10 дней — пересматривайте в удобное время",
        "Закрытый чат — идеи, связи, поддержка от участников",
        "2 видео-бонуса — про аутентичность и трудоголизм",
        "Фото- и видеоотчёт — для памяти и соцсетей",
        "Доступ на 3 день воркшопа — расширенная программа",
        "Места ближе к сцене — лучшее восприятие",
        "Психодиагностика — для глубокой саморефлексии",
      ],
      popular: true,
      soldOut: false,
    },
    {
      name: "ULTRA",
      tariff: "Тариф: 3",
      duration: "3 дня воркшопа | ПТ, СБ, ВС",
      features: [
        "Приоритет в блоке «Вопрос–ответ» — задайте личный вопрос Петру",
        "Карта аутентичности — PDF с инсайтами, вопросами и инструментами",
        "Видеозапись на 30 дней — пересматривайте в любое время",
        "Закрытый чат — среда единомышленников и полезных связей",
        "2 видео-бонуса — про аутентичность и трудоголизм",
        "Фото- и видеоотчёт — для памяти и соцсетей",
        "Личный разбор от Петра на 3 день — чёткий анализ вашей ситуации",
        "VIP-регистрация и зона — комфорт с порога",
        "Лучшие места у сцены — максимум вовлечения",
        "Психодиагностика — точка осознанного старта",
        "Бесплатная парковка",
      ],
      popular: false,
      soldOut: true,
    },
  ];

  return (
    <section id="tariff" className="py-20 px-6 lg:px-16 bg-muted">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
        Тарифы
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tariffs.map((tariff, idx) => (
          <div
            key={idx}
            className={`bg-card border rounded-2xl p-6 relative ${
              tariff.popular
                ? "border-primary ring-2 ring-primary/20"
                : "border-border"
            } ${tariff.soldOut ? "opacity-70" : ""}`}
          >
            {tariff.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                Популярный
              </div>
            )}

            {tariff.soldOut && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-muted-foreground text-background text-xs font-semibold px-4 py-1 rounded-full">
                SOLD OUT
              </div>
            )}

            <div className="mb-6">
              <p className="text-muted-foreground text-sm mb-1">
                {tariff.tariff}
              </p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {tariff.name}
              </h3>
              <p className="text-muted-foreground text-sm">{tariff.duration}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {tariff.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full rounded-xl ${
                tariff.soldOut
                  ? "bg-muted-foreground cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90"
              } text-primary-foreground`}
              disabled={tariff.soldOut}
            >
              {tariff.soldOut ? "Распродано" : "Узнать актуальную цену"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TariffsSection;
