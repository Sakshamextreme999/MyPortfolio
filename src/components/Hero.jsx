/**
 * Hero Component
 * Main hero section with profile image and call-to-action
 */
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
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
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center max-w-4xl mx-auto"
    >
      {/* Profile Image - Above Name */}
      <div className="mb-8 stagger-in">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 p-1.5 bg-gradient-to-tr from-primary to-secondary shadow-2xl hover:scale-105 transition-transform duration-300">
          <img
            alt="Saksham Shri Gupta"
            className="w-full h-full object-cover rounded-full"
            src="/IMG_20240129_012614.jpg"
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-4 text-gradient stagger-in delay-1">
        Hi, I'm Saksham Shri Gupta
      </h1>

      {/* Subtitle */}
      <p className="font-headline-sm text-headline-sm text-on-surface mb-6 font-semibold stagger-in delay-2 drop-shadow-md">
        MERN Stack Developer & AI Enthusiast
      </p>

      {/* Description */}
      <p className="font-body-lg text-body-lg text-on-surface/90 max-w-2xl mb-10 stagger-in delay-3 drop-shadow">
        Motivated Computer Science Engineering student passionate about building scalable Full Stack Web Applications and exploring the frontiers of Artificial Intelligence.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto stagger-in delay-4">
        <button className="btn-primary px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-xl">
          <span className="material-symbols-outlined">download</span>
          Download Resume
        </button>
        <button
          onClick={scrollToProjects}
          className="px-8 py-4 rounded-xl border border-white/10 glass-card text-on-surface font-semibold hover:bg-white/10 transition-all text-center flex items-center justify-center"
        >
          View Projects
        </button>
      </div>

      {/* Social Links */}
      <div className="mt-16 flex gap-6 stagger-in delay-4">
        <a
          href="https://github.com/sakshamextreme999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary social-link hover:text-white hover:bg-primary/20 transition-all"
        >
          <span className="material-symbols-outlined">code</span>
        </a>
        <a
          href="https://www.linkedin.com/in/saksham-shri-gupta-081560294"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary social-link hover:text-white hover:bg-primary/20 transition-all"
        >
          <span className="material-symbols-outlined">work</span>
        </a>
        <a
          href="mailto:sakshamextreme999@gmail.com"
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary social-link hover:text-white hover:bg-primary/20 transition-all"
        >
          <span className="material-symbols-outlined">mail</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
