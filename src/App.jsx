import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Dock from './components/Dock';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
// import ThreeBackground from './components/ThreeBackground';
import { useEffect, useState } from 'react';

/**
 * Main App Component
 * Portfolio website for Saksham Shri Gupta
 */
function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Apply theme
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className={`${theme} font-body-md text-body-md bg-background text-on-background selection:bg-primary/30`}>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Immersive 3D Background with Cursor Interaction */}
      {/*<ThreeBackground />}

      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Floating Dock */}
      <Dock />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;


