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
import ThreeBackground from './components/ThreeBackground';

/**
 * Main App Component
 * Portfolio website for Saksham Shri Gupta
 */
function App() {
  return (
    <div className="dark font-body-md text-body-md bg-background text-on-background selection:bg-primary/30">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Immersive 3D Background */}
      <ThreeBackground />

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

