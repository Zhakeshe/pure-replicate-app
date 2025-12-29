const Footer = () => {
  const scientists = [
    { name: "Джеффри Янг" },
    { name: "Джанет Клоско" },
    { name: "Марджори Вайсхаар" },
  ];

  return (
    <footer className="py-16 md:py-24 px-6 lg:px-16 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        {/* Scientific basis section */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            <span className="bg-primary/80 px-4 py-1">БАҒДАРЛАМА НЕГІЗДЕЛГЕН</span>
          </h2>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="bg-primary/80 px-4 py-1">ҒЫЛЫМИ ТЕОРИЯЛАР МЕН ИДЕЯЛАРҒА</span>
          </h2>

          {/* Scientists */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4">
              {scientists.map((scientist, idx) => (
                <span key={idx} className="text-background/80 text-lg md:text-xl">
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
          <div className="font-display text-2xl font-bold text-primary mb-4 italic">
            Аутентичность
          </div>
          <p className="text-sm text-background/60 mb-2">
            © 2025 Құлан Мектепберген
          </p>
          <p className="text-sm text-background/60">
            @kulanman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
