import { Button } from './ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const handleCTAClick = () => {
    document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[calc(100vh-58px)] bg-background flex items-center py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-normal italic leading-tight text-foreground m-0">
              Полная юридическая защита инновационного бизнеса
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-display font-normal italic leading-relaxed text-foreground/90 m-0 max-w-[600px]">
              Сосредоточтесь на развитии бизнеса, остальное мы возьмем на себя
            </p>
            <Button
              variant="hero"
              size="lg"
              className="self-start mt-2 md:mt-4 w-full sm:w-auto max-w-[400px]"
              onClick={handleCTAClick}
            >
              Обсудить мой кейс
            </Button>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center order-first lg:order-last">
            <div 
              className="w-full max-w-[500px] aspect-square rounded-xl relative overflow-hidden"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              <img 
                src={heroImage} 
                alt="Юридическая защита бизнеса" 
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 z-10"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(216, 168, 74, 0.2) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
