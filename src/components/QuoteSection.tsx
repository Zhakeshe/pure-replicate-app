import { Instagram } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="py-14 md:py-20 px-6 lg:px-16 bg-muted/30 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_14%_24%,rgba(128,0,16,0.06),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(128,0,16,0.05),transparent_32%),radial-gradient(circle_at_60%_82%,rgba(128,0,16,0.05),transparent_28%)] animate-parallax-soft" />

      <div className="max-w-5xl mx-auto relative">
        <div
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]"
          data-animate-on-scroll="animate-swipe-right-strong animate-pop-glow"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed mb-6">
            «Бағдарламаларды көргеннен кейін, сенде басқаша таңдау жасауға мүмкіндік ашылады.»
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-lg text-muted-foreground">— Қ. Мектепберген</div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Instagram className="w-5 h-5" />
              Instagram-да көру
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
