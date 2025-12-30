import { AUTHENTICITY_LOGO_FILTER, AUTHENTICITY_LOGO_URL } from "@/lib/constants";

const Footer = () => {
  const scientists = [
    { name: "Джеффри Янг" },
    { name: "Джанет Клоско" },
    { name: "Марджори Вайсхаар" },
  ];

  return (
    <footer className="py-16 md:py-24 px-6 lg:px-16 bg-foreground text-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_30%)] animate-parallax-soft" />
      <div className="max-w-6xl mx-auto relative">
        {/* Scientific basis section */}
        <div className="text-center mb-16">
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-animate-on-scroll="animate-swipe-left-strong"
          >
            <span className="bg-primary/80 px-4 py-1">БАҒДАРЛАМА ҒЫЛЫМИ</span>
          </h2>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
            data-animate-on-scroll="animate-swipe-right-strong"
            data-animate-delay="0.1s"
          >
            <span className="bg-primary/80 px-4 py-1">ТЕОРИЯЛАР МЕН ИДЕЯЛАРҒА НЕГІЗДЕЛГЕН</span>
          </h2>

          {/* Scientists */}
          <div
            className="mb-8"
            data-animate-on-scroll="animate-rise-bloom"
            data-animate-delay="0.2s"
          >
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4">
              {scientists.map((scientist, idx) => (
                <span
                  key={idx}
                  className="text-background/80 text-lg md:text-xl"
                  data-animate-on-scroll="animate-swipe-left-strong"
                  data-animate-delay={`${idx * 0.06 + 0.25}s`}
                >
                  {scientist.name}{idx < scientists.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
            <p className="text-background/60 text-base md:text-lg">
              Схемотерапия Schema Therapy 2003
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-background/20">
          <div className="font-display text-2xl font-bold text-primary mb-4 italic flex justify-center">
            <img
              src={AUTHENTICITY_LOGO_URL}
              alt="Аутентичность логотип"
              className="h-10 w-auto drop-shadow"
              style={{ filter: AUTHENTICITY_LOGO_FILTER }}
            />
          </div>
          <p className="text-sm text-background mb-2">
            © 2026 Құлан Мектепберген
          </p>
          <p className="text-sm text-background">
            @kulanman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
