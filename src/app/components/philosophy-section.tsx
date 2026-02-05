export function PhilosophySection() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Философия и миссия
            </h2>
            <div className="space-y-6 text-[#282828]/80" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              <p>
                Мы создаём комфортную и безопасную среду для жизни, опираясь на принципы 
                прозрачности, дисциплины и технологичности.
              </p>
              <p>
                Наша миссия — обеспечить жителям многоквартирных домов качественное обслуживание 
                и современные стандарты управления инфраструктурой.
              </p>
              <p>
                Системный подход, внедрение цифровых технологий и высокая квалификация наших 
                специалистов позволяют нам достигать максимальной эффективности в работе.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/philosophy.jpg"
                alt="Комфортная и безопасная городская среда"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#00D867] rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


