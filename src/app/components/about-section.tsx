import { Users, MapPin, Briefcase } from 'lucide-react';

export function AboutSection() {
  const stats = [
    {
      icon: Users,
      number: '7+',
      label: 'лет на рынке',
      description: ' с июля 2018 года'
    },
    {
      icon: MapPin,
      number: '2',
      label: 'региона присутствия',
      description: 'Москва и Московская область'
    },
    {
      icon: Briefcase,
      number: '30+',
      label: 'объектов в управлении',
      description: 'перечень в портфеле'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            О компании
          </h2>
          <p className="text-[#282828]/80" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            «ЖКХ Технологии» — профессиональный управляющий партнёр в сфере эксплуатации объектов недвижимости.
Обеспечиваем комфорт и безопасность, прозрачную отчётность и качественный сервис — с дисциплиной процессов и технологичным подходом.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-[#282828]/10 rounded-lg p-8 hover:border-[#00D867]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#00D867]/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#00D867]" />
                </div>
                <div className="mb-2" style={{ fontSize: '3rem', fontWeight: 500, lineHeight: '1' }}>
                  {stat.number}
                </div>
                <div className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 500 }}>
                  {stat.label}
                </div>
                <div className="text-[#282828]/60" style={{ fontSize: '1rem' }}>
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

