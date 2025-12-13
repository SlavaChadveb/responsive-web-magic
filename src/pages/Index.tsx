import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        
        {/* Placeholder sections for navigation */}
        <section id="cases" className="py-16 md:py-24 bg-background">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl text-center font-display font-normal tracking-wide">
              Наши <span className="text-primary italic font-bold">кейсы</span>
            </h2>
            <div className="w-[90px] h-[3px] bg-primary mx-auto mt-2 mb-8" />
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Раздел с успешными кейсами клиентов — скоро будет доступен.
            </p>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-muted">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl text-center font-display font-normal tracking-wide">
              О <span className="text-primary italic font-bold">компании</span>
            </h2>
            <div className="w-[90px] h-[3px] bg-primary mx-auto mt-2 mb-8" />
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Информация о компании «Стратегия прорыва» — скоро будет доступна.
            </p>
          </div>
        </section>

        <section id="contacts" className="py-16 md:py-24 bg-background">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl text-center font-display font-normal tracking-wide">
              <span className="text-primary italic font-bold">Контакты</span>
            </h2>
            <div className="w-[90px] h-[3px] bg-primary mx-auto mt-2 mb-8" />
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего кейса.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
