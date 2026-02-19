import { Building2, Home, Factory } from 'lucide-react';

export function ObjectsSection() {
  const objectTypes = [
    {
      icon: Building2,
      title: 'Многоквартирные дома',
      count: '20+'
    },
    {
      icon: Home,
      title: 'Жилые комплексы',
      count: '7+'
    },
    {
      icon: Factory,
      title: 'Коммунальные объекты',
      count: '3+'
    }
  ];

  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="images/objects.jpg"
                alt="Жилые и коммунальные объекты под управлением"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-center lg:text-left" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Объекты управления
            </h2>
            <p className="text-[#282828]/80 mb-10 text-justify lg:text-left" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              Мы управляем разнообразными объектами жилой и коммунальной инфраструктуры, 
              обеспечивая их бесперебойное функционирование и комфорт для жителей.
            </p>

            {/* Object Types */}
            <div className="space-y-6">
              {objectTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-lg p-5 border border-[#282828]/10"
                  >
                    <div className="w-14 h-14 bg-[#00D867]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#00D867]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1" style={{ fontSize: '1.125rem' }}>
                        {type.title}
                      </div>
                    </div>
                    <div className="text-[#00D867] font-medium" style={{ fontSize: '1.5rem' }}>
                      {type.count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

