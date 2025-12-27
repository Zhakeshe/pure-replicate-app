import ParticipantCard from "./ParticipantCard";

const participants = [
  {
    name: "Людмила",
    profession: "Продюсер запусков",
    income: "Точка А. 5 000 000₽",
    request:
      "Переехала в Москву ищу новое окружение и новые возможности для бизнеса.",
  },
  {
    name: "Алексей",
    profession: "Владелец фотосалона",
    income: "Точка А. 300 000₽",
    request:
      "Хочу найти дело своей жизни, лучше понять себя настоящего и увидеть своё предназначение.",
  },
  {
    name: "Алена",
    profession: "Маркетинговое агентство",
    income: "Точка А. 400 000–1 000 000₽",
    request:
      "Хочется вырасти в доходе кратно, зафиксировать 1 млн чистой прибыли и двигаться к 2.",
  },
  {
    name: "Виктория",
    profession: "Ивент-агентство",
    income: "Точка А. 850 000₽",
    request:
      "Работаю над подлинностью своего продукта. Нишу люблю, но не хватает моего стиля.",
  },
  {
    name: "Лола",
    profession: "Ресторанный бизнес",
    income: "Точка А. 700 000₽",
    request:
      "Войти в новую сферу — с ресторанного бизнеса перейти в производственный.",
  },
  {
    name: "Дмитрий",
    profession: "Логистика, общепит, торговля",
    income: "Точка А. 500 000₽",
    request:
      "Хотел бы пообщаться с предпринимателями, найти новое окружение.",
  },
  {
    name: "Дарья",
    profession: "Воспроизводство и селекция крупного рогатого скота",
    income: "Точка А. 300 000₽",
    request:
      "Желание увеличить доход. Создать правильную стратегию для бизнеса.",
  },
  {
    name: "Карина",
    profession: "Директор по развитию",
    income: "Точка А. 200 000₽",
    request:
      "Понять свою ключевую аутентичную цель. Вдохновиться новыми идеями.",
  },
];

const ParticipantsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="px-6 lg:px-16 mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Кто уже идёт на{" "}
          <span className="text-primary">«Аутентичность»</span>
        </h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 lg:px-16 pb-6">
          {participants.map((participant, idx) => (
            <ParticipantCard key={idx} {...participant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
