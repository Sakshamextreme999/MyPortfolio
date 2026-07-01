import { useEffect, useRef, useState } from 'react';

/**
 * Contact Component
 * Contact form and information
 */
const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    const reveals = sectionRef.current?.querySelectorAll('.scroll-reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Here you can add actual form submission logic:
    // - Send to email service (EmailJS, Formspree, etc.)
    // - Send to backend API
    // - Store in database
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 px-6 max-w-container-max mx-auto scroll-reveal"
    >
      <div className="glass-card rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
        {/* Contact Information */}
        <div className="p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <h2 className="font-headline-xl text-headline-xl mb-6 text-primary drop-shadow-lg">
              Let's connect
            </h2>
            <p className="text-body-lg text-on-surface mb-12 opacity-90 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-lg border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-outline tracking-widest mb-1">
                    Phone
                  </p>
                  <p className="font-semibold text-lg text-on-surface">+91 80050 16125</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform shadow-lg border border-secondary/20">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-outline tracking-widest mb-1">
                    Location
                  </p>
                  <p className="font-semibold text-lg text-on-surface">Lucknow, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16">
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/saksham-shri-gupta-081560294"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/10 rounded-xl hover:bg-primary/30 transition-all social-link inline-flex items-center gap-2 text-sm font-bold border border-white/10 text-on-surface"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/sakshamextreme999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/10 rounded-xl hover:bg-primary/30 transition-all social-link inline-flex items-center gap-2 text-sm font-bold border border-white/10 text-on-surface"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-12 lg:p-16 bg-white/[0.03] border-l border-white/10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-outline uppercase tracking-widest">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background/60 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface placeholder:text-on-surface-variant/40"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-outline uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background/60 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface placeholder:text-on-surface-variant/40"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-outline uppercase tracking-widest">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-background/60 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface placeholder:text-on-surface-variant/40"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-5 rounded-xl font-bold text-white uppercase tracking-[0.2em] text-sm shadow-2xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
