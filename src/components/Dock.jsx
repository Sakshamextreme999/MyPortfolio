import { useState, useEffect } from 'react';

/**
 * Dock Component
 * Floating navigation dock with theme toggle
 */
const Dock = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize from localStorage or default to 'dark'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Apply theme on mount and when it changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 glass-card rounded-full backdrop-blur-2xl border border-white/20 shadow-2xl">
      {/* Home */}
      <div className="dock-item">
        <button
          onClick={() => scrollToSection('home')}
          className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-all text-primary"
        >
          <span className="material-symbols-outlined">home</span>
        </button>
        <span className="dock-tooltip">Home</span>
      </div>

      <div className="w-px h-6 bg-white/10 mx-1"></div>

      {/* Theme Toggle */}
      <div className="dock-item">
        <button
          onClick={toggleTheme}
          className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-all text-on-surface"
        >
          <span className="material-symbols-outlined">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <span className="dock-tooltip">Theme</span>
      </div>

      <div className="w-px h-6 bg-white/10 mx-1"></div>

      {/* LinkedIn */}
      <div className="dock-item">
        <a
          href="https://www.linkedin.com/in/saksham-shri-gupta-081560294"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-all text-on-surface"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
          </svg>
        </a>
        <span className="dock-tooltip">LinkedIn</span>
      </div>

      {/* GitHub */}
      <div className="dock-item">
        <a
          href="https://github.com/sakshamextreme999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-all text-on-surface"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
        </a>
        <span className="dock-tooltip">GitHub</span>
      </div>

      {/* Contact */}
      <div className="dock-item">
        <button
          onClick={() => scrollToSection('contact')}
          className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-all text-on-surface"
        >
          <span className="material-symbols-outlined">mail</span>
        </button>
        <span className="dock-tooltip">Contact</span>
      </div>
    </div>
  );
};

export default Dock;
