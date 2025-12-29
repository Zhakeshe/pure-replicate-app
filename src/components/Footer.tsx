import { useState, useEffect } from "react";

const Footer = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { title: "Эмоционалды аштық", color: "bg-amber-500" },
    { title: "Тастандылық", color: "bg-emerald-500" },
    { title: "Болжам", color: "bg-orange-500" },
    { title: "Перфекционизм", color: "bg-red-500" },
    { title: "Бағыну", color: "bg-emerald-600" },
  ];

  const scientists = [
    {
      name: "Джеффри Янг",
    },
    {
      name: "Джанет Клоско",
    },
    {
      name: "Марджори Вайсхаар",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsBookOpen(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("book-animation");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isBookOpen) {
      const interval = setInterval(() => {
        setCurrentPage((prev) => {
          if (prev < pages.length - 1) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 400);

      return () => clearInterval(interval);
    }
  }, [isBookOpen, pages.length]);

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
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
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

        {/* Book animation */}
        <div id="book-animation" className="flex justify-center mb-16">
          <div className="perspective-1000 relative">
            {/* Book cover */}
            <div 
              className={`relative w-64 h-80 md:w-80 md:h-96 bg-primary rounded-r-lg shadow-2xl transition-transform duration-1000 preserve-3d ${
                isBookOpen ? 'rotate-y-[-20deg]' : ''
              }`}
              style={{ transformOrigin: 'left center' }}
            >
              {/* Book spine */}
              <div className="absolute left-0 top-0 w-4 h-full bg-primary/80 rounded-l-lg" />
              
              {/* Cover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground text-center uppercase italic">
                  АУТЕНТИЧНОСТЬ
                </h3>
                <p className="text-primary-foreground/70 mt-4 text-sm">18 бағдарлама</p>
              </div>
            </div>

            {/* Pages */}
            {pages.map((page, idx) => (
              <div
                key={idx}
                className={`absolute top-2 left-4 w-60 h-76 md:w-76 md:h-92 bg-background rounded-r-lg shadow-lg transition-all duration-500 preserve-3d ${
                  idx <= currentPage && isBookOpen ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: idx <= currentPage && isBookOpen 
                    ? `rotateY(${-15 - idx * 5}deg) translateX(${idx * 4}px)` 
                    : 'rotateY(0deg)',
                  transformOrigin: 'left center',
                  zIndex: pages.length - idx,
                  width: 'calc(100% - 20px)',
                  height: 'calc(100% - 16px)',
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className={`w-16 h-16 ${page.color} rounded-xl mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{idx + 1}</span>
                  </div>
                  <p className="text-foreground font-medium text-center text-sm md:text-base">
                    {page.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-background/20">
          <div className="font-display text-2xl font-bold text-primary mb-4">
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
