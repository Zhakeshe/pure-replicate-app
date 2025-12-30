import { Button } from "@/components/ui/button";
import {
  SPEAKER_BACKGROUND_URL,
  SPEAKER_IMAGE_URL,
  SPEAKER_IMAGE_FALLBACK_URL,
} from "@/lib/constants";
import { smoothScrollToSection } from "@/lib/scroll";
import { useState } from "react";

const HeroSection = () => {
  const [isProgramScrolling, setIsProgramScrolling] = useState(false);

  const handleScrollTo = (id: string, withAnimation = false) => {
    smoothScrollToSection(
      id,
      withAnimation ? () => setIsProgramScrolling(true) : undefined,
      withAnimation ? () => setIsProgramScrolling(false) : undefined,
    );
  };

  return (
    <section className="relative overflow-hidden font-sans bg-white text-primary lg:pt-0 lg:pb-0">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Hero with red background and centered photo */}
        <div
          className="relative z-10 overflow-hidden pb-6 rounded-b-[42px] shadow-[0_20px_44px_rgba(128,0,0,0.3)]"
          className="relative overflow-hidden pb-3 rounded-b-[36px]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.48) 100%), url(${SPEAKER_BACKGROUND_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-black/30 to-black/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.08),transparent_38%)] animate-gradient-pan" />

          {/* Top info bar */}
          <div
            className="relative flex items-center justify-center gap-6 py-4 px-4 text-white text-[13px] tracking-wide uppercase"
            data-animate-on-scroll="animate-swipe-left-strong"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="font-semibold">20-22 қаңтар</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="font-semibold">онлайн ZOOM</span>
            </div>
          </div>

          {/* Title */}
          <div
            className="relative flex justify-center pt-1"
            data-animate-on-scroll="animate-rise-bloom"
          >
            <img
              src={AUTHENTICITY_LOGO_URL}
              alt="Аутентичность логотип"
              className="h-[82px] w-auto md:h-24 drop-shadow-[0_16px_42px_rgba(0,0,0,0.45)]"
              style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
            />
          </div>

          {/* Speaker image */}
          <div className="relative mt-2 px-5" data-animate-on-scroll="animate-swipe-right-strong">
            <div className="relative overflow-hidden rounded-[42px]">
              <img
                src={SPEAKER_IMAGE_URL}
                alt="Құлан Мектепберген"
                className="w-full h-[470px] object-cover object-center scale-[1.05] drop-shadow-[0_26px_52px_rgba(0,0,0,0.42)]"
                onError={(event) => {
                  const img = event.currentTarget;
                  if (img.dataset.fallbackApplied === "true") return;
                  img.dataset.fallbackApplied = "true";
                  img.src = SPEAKER_IMAGE_FALLBACK_URL;
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
            </div>
          </div>
        </div>

        {/* White content card */}
        <div className="relative z-0 bg-white px-6 pt-14 pb-10 rounded-t-[28px] -mt-10" data-animate-on-scroll="animate-rise-bloom" data-animate-delay="0.05s">
          <p className="text-primary text-[16px] leading-7 tracking-[0.01em] mb-5">
            Бұл өзіңді өзгерту емес, өзіңе қайта оралу.
          </p>

          <div
            className="grid grid-cols-1 gap-6 mb-7 mt-3"
            data-animate-on-scroll="animate-rise-bloom"
            data-animate-delay="0.08s"
          >
            <div className="space-y-2">
              <div className="font-display text-4xl font-bold text-primary">3 күн</div>
            </div>
          </div>

          <div
            className="flex gap-3 mt-2"
            data-animate-on-scroll="animate-rise-bloom"
            data-animate-delay="0.12s"
          >
            <Button
              size="lg"
              className="flex-1 bg-primary text-primary-foreground font-semibold py-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all"
              onClick={() => handleScrollTo("tariff")}
            >
              Қатысамын
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`flex-1 border-primary text-primary font-semibold py-6 rounded-2xl bg-transparent hover:bg-primary/10 hover:scale-[1.01] transition-all ${isProgramScrolling ? "animate-bounce" : ""}`}
              onClick={() => handleScrollTo("program", true)}
            >
              Толығырақ білу
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - 50/50 split */}
        <div className="hidden lg:grid grid-cols-2 items-stretch bg-white text-primary min-h-[900px] xl:min-h-[960px]">
          {/* Left side - Content on tinted background */}
          <div
            className="flex flex-col justify-center px-14 xl:px-24 py-16 xl:py-24 bg-white text-primary"
            data-animate-on-scroll="animate-swipe-left-strong"
          >
            <h1 className="mb-10" data-animate-on-scroll="animate-fade-in">
              <img
                src={AUTHENTICITY_LOGO_URL}
                alt="Аутентичность логотип"
                className="h-24 w-auto xl:h-28 drop-shadow-[0_10px_32px_rgba(0,0,0,0.28)]"
                style={{ filter: AUTHENTICITY_LOGO_FILTER }}
              />
            </h1>

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
          </div>

          {/* Description */}
          <p
            className="text-primary text-2xl leading-relaxed mb-10 max-w-xl"
            data-animate-on-scroll="animate-fade-in"
            data-animate-delay="0.1s"
          >
            Бұл өзіңді өзгерту емес, өзіңе қайта оралу.
          </p>

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
              className="flex gap-20 mb-12 mt-6"
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
              className="flex gap-5 mt-4"
              data-animate-on-scroll="animate-rise-bloom"
              data-animate-delay="0.4s"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-semibold px-12 py-8 text-lg rounded-2xl shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:scale-[1.02]"
                onClick={() => handleScrollTo("tariff")}
              >
                Қатысамын
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`border-primary text-primary font-semibold px-12 py-8 text-lg rounded-2xl bg-white hover:bg-primary/10 hover:scale-[1.02] transition-all duration-300 ${isProgramScrolling ? "animate-bounce" : ""}`}
                onClick={() => handleScrollTo("program", true)}
              >
                Толығырақ білу
              </Button>
            </div>
        </div>

        {/* Right side - Speaker Photo on RED background */}
        <div
          className="relative flex items-end justify-center overflow-hidden shadow-2xl min-h-[900px] xl:min-h-[960px] lg:pt-0 lg:pb-0 lg:rounded-bl-[48px] lg:rounded-br-[48px]"
          className="relative flex items-center justify-center overflow-hidden shadow-2xl min-h-[900px] xl:min-h-[960px] lg:pt-0 lg:pb-0 lg:rounded-bl-[48px] lg:rounded-br-[48px]"
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
          <div className="relative max-w-[900px] w-full h-full px-10 pt-10 pb-0 flex items-end justify-center">
            <img
              src={SPEAKER_IMAGE_URL}
              alt="Құлан Мектепберген - тренинг спикері"
              className="w-full h-full max-h-[960px] object-cover object-bottom scale-[1.08] drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            />
          <div className="relative max-w-[900px] w-full h-full px-10 py-12 flex items-center justify-center">
            <img
              src={SPEAKER_IMAGE_URL}
              alt="Құлан Мектепберген - тренинг спикері"
              className="w-full h-full max-h-[940px] object-cover object-center scale-[1.06] drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
              onError={(event) => {
                const img = event.currentTarget;
                if (img.dataset.fallbackApplied === "true") return;
                img.dataset.fallbackApplied = "true";
                img.src = SPEAKER_IMAGE_FALLBACK_URL;
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
