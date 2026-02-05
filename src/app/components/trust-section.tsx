import { Check } from 'lucide-react';

export function TrustSection() {
  const advantages = [
    'Лицензии и сертификаты соответствия государственным стандартам',
    'Опыт работы с крупными жилыми комплексами и муниципальными объектами',
    'Собственная диспетчерская служба с круглосуточным мониторингом',
    'Квалифицированные специалисты с профильным образованием',
    'Прозрачная финансовая отчётность для жителей',
    'Современная техническая база и оборудование',
    'Договоры с надёжными подрядчиками и поставщиками',
    'Участие в федеральных программах по модернизации ЖКХ'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Почему нам доверяют
          </h2>
          <p className="text-[#282828]/80" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            Мы подтверждаем свою надёжность на практике
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-white border border-[#282828]/10 rounded-lg p-6 hover:border-[#00D867]/30 transition-all duration-300"
            >
              <div className="w-6 h-6 bg-[#00D867] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-[#282828]/80 flex-1" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {advantage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

