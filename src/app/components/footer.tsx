export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#282828] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="mb-4" style={{ fontSize: '1.25rem' }}>
              ЖКХ Технологии
            </h3>
            <p className="text-white/70 mb-4" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
              Профессиональное управление жилищно-коммунальной инфраструктурой
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white/90" style={{ fontSize: '1rem' }}>
              Контакты
            </h4>
            <div className="space-y-2 text-white/70" style={{ fontSize: '0.875rem' }}>
              <p>+7 (495) 123-45-67</p>
              <p>info@gkh-tech.ru</p>
              <p>Москва, ул. Примерная, 123</p>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="mb-4 text-white/90" style={{ fontSize: '1rem' }}>
              Режим работы
            </h4>
            <div className="space-y-2 text-white/70" style={{ fontSize: '0.875rem' }}>
              <p>Пн-Пт: 9:00 — 18:00</p>
              <p>Сб-Вс: выходной</p>
              <p className="mt-3 text-[#00D867]">Аварийная служба: 24/7</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-white/90" style={{ fontSize: '1rem' }}>
              Реквизиты
            </h4>
            <div className="space-y-2 text-white/70" style={{ fontSize: '0.875rem' }}>
              <p>ООО «ЖКХ Технологии»</p>
              <p>ИНН: 7700123456</p>
              <p>ОГРН: 1234567890123</p>
              <p>КПП: 770001001</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60" style={{ fontSize: '0.875rem' }}>
            <p>© {currentYear} ЖКХ Технологии. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#00D867] transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-[#00D867] transition-colors">
                Правовая информация
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

