import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="images/hero.jpg"
          alt="Современная городская среда и жилой комплекс"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#282828]/90 via-[#282828]/70 to-[#282828]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className="text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            ЖКХ Технологии управляющая компания
          </h1>
          <p className="text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}>
            Ваш управляющий партнёр по эксплуатации объектов недвижимости: прозрачные процессы, быстрый отклик и стабильное качество сервиса для жителей и собственников.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-3 bg-[#00D867] hover:bg-[#00c45d] text-white px-10 py-5 rounded-lg transition-colors duration-300"
            >
              <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>Консультация</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}



