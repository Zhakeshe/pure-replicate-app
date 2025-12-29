import speakerPhoto from "@/assets/speaker-photo.jpg";
import { SPEAKER_BACKGROUND_URL } from "@/lib/constants";

const SpeakerSection = () => {
  const benefits = [
    "3 күн, 2 сағат, 19:00-21:00 Zoom арқылы",
    "«Кім болуым керек?» деген бейнеден шығып, «мен кіммін?» деген шынайы күйге жақындайтын кеңістік",
    "Өзіңмен қайта танысатын тәжірибе",
  ];

  return (
    <section
      className="py-16 md:py-20 px-6 lg:px-16 bg-muted"
      style={{ backgroundImage: `url(${SPEAKER_BACKGROUND_URL})` }}
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/60" />
        <div className="relative">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center animate-fade-in">
            Тренинг <span className="text-primary">қалай өтеді?</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 hover:scale-105 transition-transform duration-500">
                <img
                  src={speakerPhoto}
                  alt="Құлан Мектепберген"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute left-4 top-4 bg-background text-foreground px-4 py-2 rounded-full font-medium shadow-lg">
                Спикер
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-muted-foreground mb-2">Автор және методолог</p>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8">
                Құлан Мектепберген
              </h3>
              <p className="text-muted-foreground mb-2">@kulanman</p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}>
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6">
                <p className="text-muted-foreground mb-3 text-sm md:text-base">
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
