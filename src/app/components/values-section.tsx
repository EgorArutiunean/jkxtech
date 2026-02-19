import { Shield, Target, Users, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: 'Надёжность',
      description: 'Гарантируем стабильное и качественное обслуживание объектов'
    },
    {
      icon: Target,
      title: 'Системность',
      description: 'Комплексный подход к управлению инфраструктурой'
    },
    {
      icon: Users,
      title: 'Прозрачность',
      description: 'Открытая отчётность и чёткая коммуникация с жителями'
    },
    {
      icon: TrendingUp,
      title: 'Технологичность',
      description: 'Используем современные цифровые решения и автоматизацию'
    },
    {
      icon: CheckCircle,
      title: 'Качество',
      description: 'Соблюдение всех регламентов и стандартов отрасли'
    },
    {
      icon: Clock,
      title: 'Оперативность',
      description: 'Быстрое реагирование на обращения и аварийные ситуации'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16 mx-auto md:mx-0 text-center md:text-left">
          <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Наши ценности
          </h2>
          <p className="text-[#282828]/80 text-justify md:text-left" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            Принципы, на которых строится наша работа
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-[#282828]/10 rounded-lg p-8 hover:shadow-lg hover:border-[#00D867]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-start gap-4 mb-3 text-left">
                  <div className="w-12 h-12 bg-[#00D867]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#00D867]" />
                  </div>
                  <h3 className="m-0 leading-none" style={{ fontSize: '1.25rem' }}>
                    {value.title}
                  </h3>
                </div>
                <p className="text-[#282828]/70" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

