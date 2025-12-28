import { Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import speakerPhoto from "@/assets/speaker-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Аутентичность
            </h1>

            {/* Subtitle */}
            <p className="text-foreground/90 text-lg md:text-xl max-w-xl leading-relaxed">
              Өзін анық түсінетін, өз өмірінің авторы бола отырып, жан дүниесінің 
              әуенін ести бастайтын және автоматты бағдарламалармен емес, саналы 
              таңдаудан әрекет ететін адам.
            </p>

            {/* Event Info Cards */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm border border-border/30 rounded-xl px-5 py-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <span className="text-foreground font-semibold">старт: 20.01.2026</span>
                  <span className="text-muted-foreground ml-1">(3 күн)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm border border-border/30 rounded-xl px-5 py-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-foreground">19:00 – 21:00</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm border border-border/30 rounded-xl px-5 py-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground">онлайн, ZOOM</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-primary font-display text-4xl md:text-5xl font-bold mb-1">
                  3 күн
                </div>
                <p className="text-muted-foreground text-sm">
                  тренинг ұзақтығы
                </p>
              </div>
              <div>
                <div className="text-primary font-display text-4xl md:text-5xl font-bold mb-1">
                  18+
                </div>
                <p className="text-muted-foreground text-sm">
                  бағдарламаларды талдаймыз
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Қатысамын
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 bg-background/30 backdrop-blur-sm text-foreground hover:bg-background/50 font-medium px-10 py-6 text-base rounded-xl"
              >
                Толығырақ білу
              </Button>
            </div>
          </div>

          {/* Right - Speaker Photo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl" />
              
              {/* Photo container */}
              <div className="relative w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/20">
                <img
                  src={speakerPhoto}
                  alt="Құлан Мектепберген - тренинг спикері"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Speaker name overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Құлан Мектепберген
                  </h3>
                  <p className="text-muted-foreground text-sm">@kulanman</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 top-1/4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg">
                <span className="font-semibold">5 000 ₸</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
