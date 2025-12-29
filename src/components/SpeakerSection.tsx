import { SPEAKER_BACKGROUND_URL, SPEAKER_IMAGE_URL } from "@/lib/constants";

const SpeakerSection = () => {
  const benefits = [
    "3 күн, 2 сағат, 19:00-21:00 Zoom арқылы",
    "«Кім болуым керек?» деген бейнеден шығып, «мен кіммін?» деген шынайы күйге жақындайтын кеңістік",
    "Өзіңмен қайта танысатын тәжірибе",
  ];

  return (
    <section
      className="py-16 md:py-20 px-6 lg:px-16 bg-white text-primary"
      style={{
        backgroundImage: `url(${SPEAKER_BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/70 to-white/45" />
        <div className="relative backdrop-blur-sm bg-white/75 rounded-3xl border border-primary/10 shadow-2xl p-6 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 md:mb-12 text-center animate-fade-in tracking-wide">
            Тренинг <span className="text-primary">қалай өтеді?</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-[3/4] rounded-[32px] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/25 hover:scale-105 transition-transform duration-500 shadow-2xl border border-primary/10">
                <img
                  src={SPEAKER_IMAGE_URL}
                  alt="Құлан Мектепберген"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-primary/80 mb-2 text-sm md:text-base tracking-[0.03em] uppercase">Автор және методолог</p>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-8 drop-shadow-lg">
                Құлан Мектепберген
              </h3>
              <p className="text-primary/80 mb-2 text-sm md:text-base">@kulanman</p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}>
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-primary text-sm md:text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-primary/15 pt-6">
                <p className="text-primary/80 mb-3 text-sm md:text-base leading-relaxed">
                  Бұл тренинг - біреудің айтқанын қайталау емес. Өзіңмен қайта танысатын кеңістік.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
