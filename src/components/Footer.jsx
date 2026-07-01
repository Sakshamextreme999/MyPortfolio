/**
 * Footer Component
 * Site footer with branding and links
 */
const Footer = () => {
  return (
    <footer className="w-full py-16 bg-background border-t border-white/5">
      <div className="flex flex-col items-center justify-center gap-8 px-4 max-w-container-max mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <span className="text-primary font-bold text-2xl tracking-tighter">Saksham.dev</span>
        </div>

        {/* Copyright */}
        <p className="font-label-md text-label-md text-on-surface/60 max-w-md leading-loose">
          © 2026 Saksham Shri Gupta. Built with MERN Stack & Premium Glassmorphism.
        </p>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-10">
          <a
            href="https://www.linkedin.com/in/saksham-shri-gupta-081560294"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest text-on-surface hover:text-secondary transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sakshamextreme999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest text-on-surface hover:text-secondary transition-all"
          >
            GitHub
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-xs font-bold uppercase tracking-widest text-on-surface hover:text-secondary transition-all"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
