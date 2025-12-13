import { Shield, FileText, Zap } from 'lucide-react';
import { useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`bg-card/65 border border-primary rounded-lg p-5 md:p-7 flex flex-col sm:flex-row gap-4 md:gap-5 items-start min-h-[140px] md:min-h-[160px] cursor-pointer transition-all duration-300 animate-card-in ${
        isActive ? 'border-foreground shadow-[0_0_24px_0_rgba(247,202,132,0.25)] -translate-y-1' : 'hover:border-foreground hover:shadow-[0_0_24px_0_rgba(247,202,132,0.25)] hover:-translate-y-1'
      }`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => {
        if (window.innerWidth < 768) {
          setIsActive(!isActive);
        }
      }}
    >
      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isActive ? 'bg-foreground shadow-[0_0_6px_hsl(43,60%,75%)]' : 'bg-primary'
        }`}
      >
        <div className="text-primary-foreground w-5 h-5">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div>
        <h3
          className={`text-base md:text-lg font-bold mb-2 font-display transition-colors duration-300 ${
            isActive ? 'text-foreground' : 'text-card-foreground'
          }`}
        >
          {title}
        </h3>
        <p className="text-sm md:text-base text-card-foreground/95 leading-relaxed font-sans m-0">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhyChoose = () => {
  const features = [
    {
      icon: <Shield className="w-full h-full" />,
      title: 'Защита интеллектуальной собственности',
      description: 'Оформляем права на продукты, бренды и разработки, чтобы ваши идеи были надёжно защищены.',
    },
    {
      icon: <FileText className="w-full h-full" />,
      title: 'Полное сопровождение бизнеса и сделок',
      description: 'Готовим договоры, инвестсделки, регламенты — закрываем все юридические вопросы за вас.',
    },
    {
      icon: <Zap className="w-full h-full" />,
      title: 'Прозрачность и скорость работы',
      description: 'Консультации без ограничений, документы вовремя, без бюрократии и «юридической воды».',
    },
    {
      icon: <Shield className="w-full h-full" />,
      title: 'Юридический «щит» для масштабирования',
      description: 'Помогаем избежать ошибок при привлечении инвестиций, расширении команды и выходе на новые рынки.',
    },
  ];

  return (
    <section id="products" className="bg-muted py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-center mb-1 font-display font-normal tracking-wide">
          Почему{' '}
          <span className="text-primary italic font-bold">выбирают нас</span>
        </h2>

        {/* Divider */}
        <div className="w-[90px] h-[3px] bg-primary mx-auto mt-2 mb-8 md:mb-10" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
