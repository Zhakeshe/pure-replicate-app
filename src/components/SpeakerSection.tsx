import zoomTraining from "@/assets/zoom-training.jpg";

const SpeakerSection = () => {
  const points = [
    "3 күн",
    "2 сағат, 19:00-21:00 Zoom арқылы",
    "Бұл тренинг – біреудің айтқанын қайталау емес. «Кім болу керек?» деген бейнеден шығып, «мен кіммін?» деген шынайы күйге жақындатып, өзіңмен қайта танысатын кеңістік",
  ];

  return (
    <section
      className="py-16 md:py-20 px-6 lg:px-16 bg-[#f6f0db]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr,1fr] gap-8 items-center">
          {/* Content */}
          <div className="bg-white rounded-[28px] shadow-xl border border-primary/10 p-7 md:p-10 animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#810013] mb-6">
              Тренинг қалай өтеді?
            </h2>

            <ul className="space-y-4 text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              {points.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-2 block h-2 w-2 rounded-full bg-[#810013] flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button
              className="px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-[#810013] text-white font-semibold text-base md:text-lg shadow-lg hover:scale-[1.02] transition-transform"
              onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
            >
              Қатысамын
            </button>
          </div>

          {/* Image */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="rounded-[28px] overflow-hidden shadow-2xl border border-primary/10 bg-white">
              <img
                src={zoomTraining}
                alt="Тренинг ZOOM форматында"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
