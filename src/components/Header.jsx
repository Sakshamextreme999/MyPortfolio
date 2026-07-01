import { useState, useEffect } from 'react';

/**
 * Header Component
 * Fixed navigation header with smooth scroll links
 */
const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <nav className="flex justify-between items-center h-16 px-6 lg:px-12 max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight">
            Saksham.dev
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`${
                activeSection === section
                  ? 'text-primary font-medium border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              } transition-all hover:-translate-y-0.5 capitalize`}
            >
              {section}
            </button>
          ))}
        </div>

        <button className="btn-primary px-6 py-2 rounded-lg text-white font-medium text-label-md">
          Resume
        </button>
      </nav>
    </header>
  );
};

export default Header;
