import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Пн-Пт: 9:00 — 18:00'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@gkh-tech.ru',
      description: 'Ответим в течение 24 часов'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'Москва, ул. Примерная, 123',
      description: 'Офис: 9:00 — 18:00'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Контакты
          </h2>
          <p className="text-[#282828]/80" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            Свяжитесь с нами для обсуждения сотрудничества
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-[#282828]/10 rounded-lg p-6 hover:border-[#00D867]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00D867]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#00D867]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[#282828]/60 mb-1" style={{ fontSize: '0.875rem' }}>
                        {method.title}
                      </div>
                      <div className="font-medium mb-1" style={{ fontSize: '1.125rem' }}>
                        {method.value}
                      </div>
                      <div className="text-[#282828]/60" style={{ fontSize: '0.875rem' }}>
                        {method.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-[#282828]/10 rounded-lg p-8">
            <h3 className="mb-6" style={{ fontSize: '1.5rem' }}>
              Отправить заявку
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[#282828] mb-2" style={{ fontSize: '0.875rem' }}>
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#282828]/10 rounded-lg focus:outline-none focus:border-[#00D867] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-[#282828] mb-2" style={{ fontSize: '0.875rem' }}>
                  Организация
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#282828]/10 rounded-lg focus:outline-none focus:border-[#00D867] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#282828] mb-2" style={{ fontSize: '0.875rem' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#282828]/10 rounded-lg focus:outline-none focus:border-[#00D867] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#282828] mb-2" style={{ fontSize: '0.875rem' }}>
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#282828]/10 rounded-lg focus:outline-none focus:border-[#00D867] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#282828] mb-2" style={{ fontSize: '0.875rem' }}>
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#282828]/10 rounded-lg focus:outline-none focus:border-[#00D867] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00D867] hover:bg-[#00c45d] text-white px-8 py-4 rounded-lg transition-colors duration-300"
                style={{ fontSize: '1rem', fontWeight: 500 }}
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

