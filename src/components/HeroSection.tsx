import { Button } from "@/components/ui/button";
import {
  AUTHENTICITY_LOGO_FILTER,
  AUTHENTICITY_LOGO_URL,
  SPEAKER_BACKGROUND_URL,
  SPEAKER_IMAGE_URL,
  SPEAKER_IMAGE_FALLBACK_URL,
} from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden font-sans bg-white text-primary lg:py-10">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Hero with red background and photo */}
        <div className="relative bg-white">
          {/* Top info bar */}
          <div
            className="flex items-center justify-center gap-6 py-4 px-4 text-primary text-[13px] tracking-wide uppercase"
            data-animate-on-scroll="animate-swipe-left-strong"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-semibold">20-22 қаңтар</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-semibold">онлайн ZOOM</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="px-6 pt-1" data-animate-on-scroll="animate-rise-bloom">
            <img
              src={AUTHENTICITY_LOGO_URL}
              alt="Аутентичность логотип"
              className="h-14 w-auto md:h-16 drop-shadow"
              style={{ filter: AUTHENTICITY_LOGO_FILTER }}
            />
          </h1>
          
          {/* Speaker image with light background */}
          <div
            className="relative mt-2 rounded-[32px] overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `url(${SPEAKER_BACKGROUND_URL})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
            data-animate-on-scroll="animate-swipe-right-strong"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-primary/10 animate-gradient-pan" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-transparent" />
            <img
              src={SPEAKER_IMAGE_URL}
              alt="Құлан Мектепберген"
              className="relative w-full h-[55vh] object-cover object-top animate-float-soft"
              onError={(event) => {
                const img = event.currentTarget;
                if (img.dataset.fallbackApplied === "true") return;
                img.dataset.fallbackApplied = "true";
                img.src = SPEAKER_IMAGE_FALLBACK_URL;
              }}
            />
          </div>
        </div>

        {/* Content below image */}
        <div className="bg-white px-6 py-10 space-y-7 text-primary" data-animate-on-scroll="animate-rise-bloom">
          <p className="text-[15px] leading-7 tracking-[0.01em] text-primary">
            Бұл өзіңді өзгерту емес, өзіңе қайта оралу.
          </p>

          {/* Highlighted duration */}
          <div className="flex items-center gap-12 pt-4 text-primary" data-animate-on-scroll="animate-rise-bloom" data-animate-delay="0.05s">
            <div>
              <div className="font-display text-4xl font-bold text-primary">
                3 күн
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-4" data-animate-on-scroll="animate-rise-bloom" data-animate-delay="0.1s">
            <Button
              size="lg"
              className="flex-1 bg-primary text-primary-foreground font-semibold py-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all"
              onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
            >
              Қатысамын
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 border-primary text-primary font-semibold py-6 rounded-2xl bg-transparent hover:bg-primary/10 hover:scale-[1.01] transition-all"
            >
              Толығырақ білу
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - 50/50 split */}
        <div className="hidden lg:grid grid-cols-2 items-stretch bg-white text-primary">
          {/* Left side - Content on tinted background */}
          <div
            className="flex flex-col justify-center px-14 xl:px-24 py-16 xl:py-20 bg-white text-primary"
            data-animate-on-scroll="animate-swipe-left-strong"
          >
          {/* Top info bar */}
          <div
            className="flex items-center gap-7 mb-10 text-primary text-sm tracking-[0.08em] uppercase"
            data-animate-on-scroll="animate-rise-bloom"
            data-animate-delay="0.05s"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-semibold">20-22 қаңтар</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-semibold">онлайн ZOOM</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-6" data-animate-on-scroll="animate-fade-in">
            <img
              src={AUTHENTICITY_LOGO_URL}
              alt="Аутентичность логотип"
              className="h-24 w-auto xl:h-28 drop-shadow-[0_10px_32px_rgba(0,0,0,0.28)]"
              style={{ filter: AUTHENTICITY_LOGO_FILTER }}
            />
          </h1>

          {/* Description */}
          <p
            className="text-primary text-2xl leading-relaxed mb-10 max-w-xl"
            data-animate-on-scroll="animate-fade-in"
            data-animate-delay="0.1s"
          >
            Бұл өзіңді өзгерту емес, өзіңе қайта оралу.
          </p>

          {/* Highlighted duration */}
          <div
            className="flex gap-20 mb-12"
            data-animate-on-scroll="animate-rise-bloom"
            data-animate-delay="0.2s"
          >
            <div>
              <div className="font-display text-6xl font-bold text-primary">
                3 күн
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex gap-5"
            data-animate-on-scroll="animate-rise-bloom"
            data-animate-delay="0.4s"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-semibold px-12 py-8 text-lg rounded-2xl shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:scale-[1.02]"
              onClick={() => window.open('https://l.clck.bar/813189', '_blank')}
            >
              Қатысамын
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary font-semibold px-12 py-8 text-lg rounded-2xl bg-white hover:bg-primary/10 hover:scale-[1.02] transition-all duration-300"
            >
              Толығырақ білу
            </Button>
          </div>
        </div>

        {/* Right side - Speaker Photo on RED background */}
        <div
          className="relative flex items-center justify-center overflow-hidden shadow-2xl py-12"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.35) 100%), url(${SPEAKER_BACKGROUND_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          data-animate-on-scroll="animate-swipe-right-strong"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_40%)] animate-gradient-pan" />
          <img
            src={SPEAKER_IMAGE_URL}
            alt="Құлан Мектепберген - тренинг спикері"
            className="relative max-w-[820px] w-full h-[720px] max-h-[820px] object-contain object-top drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] animate-float-soft"
            onError={(event) => {
              const img = event.currentTarget;
              if (img.dataset.fallbackApplied === "true") return;
              img.dataset.fallbackApplied = "true";
              img.src = SPEAKER_IMAGE_FALLBACK_URL;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
