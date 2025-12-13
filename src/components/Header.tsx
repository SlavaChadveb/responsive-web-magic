import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, isMenuOpen ? 300 : 0);
    }
  };

  const navItems = [
    { href: '#products', label: 'Продукты' },
    { href: '#cases', label: 'Кейсы' },
    { href: '#about', label: 'О компании' },
    { href: '#contacts', label: 'Контакты' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 h-[58px] gradient-gold overflow-hidden transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary-foreground/60 to-transparent z-10" />
      
      {/* Texture overlay */}
      <div 
        className="absolute inset-0 z-[1] opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(255, 255, 255, 0.03) 50%, transparent 70%)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-full flex items-center justify-between gap-4 md:gap-8 relative z-[3]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-secondary-foreground font-bold text-lg">СП</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-6 lg:gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-secondary font-medium text-[0.95rem] transition-all duration-300 relative py-2 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
                  style={{ textShadow: '0 1px 1px rgba(255, 255, 255, 0.5)' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button - Desktop */}
        <Button
          variant="cta"
          className="hidden md:flex"
          onClick={() => document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Обсудить мой кейс
        </Button>

        {/* Burger Menu Button */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[1001]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-secondary" />
          ) : (
            <>
              <span className="w-[25px] h-[3px] bg-secondary rounded-sm transition-all duration-300" />
              <span className="w-[25px] h-[3px] bg-secondary rounded-sm transition-all duration-300" />
              <span className="w-[25px] h-[3px] bg-secondary rounded-sm transition-all duration-300" />
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-secondary/70 backdrop-blur-sm z-[999] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 right-0 w-4/5 max-w-[300px] h-screen gradient-gold transition-transform duration-300 pt-20 px-8 pb-8 shadow-[-2px_0_15px_rgba(90,74,42,0.25)] z-[1000] flex flex-col md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 list-none m-0 p-0 w-full">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-secondary font-medium text-lg py-3 block border-b border-secondary/20"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
