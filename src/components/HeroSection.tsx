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
    <section className="relative overflow-hidden font-sans bg-white text-primary lg:pt-0 lg:pb-0">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Hero with red background and centered photo */}
        <div
          className="relative overflow-hidden pb-3"
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
          <div className="relative mt-3 px-6" data-animate-on-scroll="animate-swipe-right-strong">
            <img
              src={SPEAKER_IMAGE_URL}
              alt="Құлан Мектепберген"
              className="w-full h-[320px] object-contain object-top drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
              onError={(event) => {
                const img = event.currentTarget;
                if (img.dataset.fallbackApplied === "true") return;
                img.dataset.fallbackApplied = "true";
                img.src = SPEAKER_IMAGE_FALLBACK_URL;
              }}
            />
          </div>
        </div>

        {/* White content card */}
        <div className="bg-white px-6 pt-8 pb-10 rounded-t-[28px] -mt-4 shadow-[0_-10px_30px_rgba(0,0,0,0.06)]" data-animate-on-scroll="animate-rise-bloom" data-animate-delay="0.05s">
          <p className="text-primary text-[16px] leading-7 tracking-[0.01em] mb-5">
            Бұл өзіңді өзгерту емес, өзіңе қайта оралу.
          </p>

          <div className="grid grid-cols-1 gap-6 mb-7" data-animate-on-scroll="animate-rise-bloom" data-animate-delay="0.08s">
            <div className="space-y-2">
              <div className="font-display text-4xl font-bold text-primary">3 күн</div>
            </div>
          </div>

          <div className="flex gap-3" data-animate-on-scroll="animate-rise-bloom" data-animate-delay="0.12s">
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
        <div className="hidden lg:grid grid-cols-2 items-stretch bg-white text-primary min-h-[900px] xl:min-h-[960px]">
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
          className="relative flex items-center justify-center overflow-hidden shadow-2xl min-h-[900px] xl:min-h-[960px] lg:pt-0 lg:pb-0"
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
            className="relative max-w-[820px] w-full h-full max-h-[900px] xl:max-h-[960px] object-contain object-top drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
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
