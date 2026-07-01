import { useEffect, useRef } from 'react';

/**
 * About Component
 * Education, work experience, activities and certifications
 */
const About = () => {
  const sectionRef = useRef(null);

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

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* About Me Section */}
        <div className="scroll-reveal">
          <h2 className="font-headline-xl text-headline-xl mb-12 text-primary drop-shadow-lg">
            About Me
          </h2>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 glass-card rounded-2xl">
              <span className="material-symbols-outlined text-2xl text-primary">school</span>
              <div>
                <h4 className="font-bold text-on-surface">SRMCEM, Lucknow</h4>
                <p className="text-sm text-on-surface">B.Tech in Computer Science Engineering</p>
                <p className="text-xs text-outline mt-1 font-medium">2023 - 2027</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 glass-card rounded-2xl">
              <span className="material-symbols-outlined text-2xl text-secondary">school</span>
              <div>
                <h4 className="font-bold text-on-surface">Anand Bhawan Inter College</h4>
                <p className="text-sm text-on-surface">Intermediate (81.75%)</p>
                <p className="text-xs text-outline mt-1 font-medium">2022 - 2023</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 glass-card rounded-2xl">
              <span className="material-symbols-outlined text-2xl text-tertiary">school</span>
              <div>
                <h4 className="font-bold text-on-surface">Anand Bhawan Inter College</h4>
                <p className="text-sm text-on-surface">Class X (84.4%)</p>
                <p className="text-xs text-outline mt-1 font-medium">2020 - 2021</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mt-16" id="experience">
            <h3 className="font-headline-sm text-headline-sm mb-8 text-secondary">
              Work Experience
            </h3>

            <div className="p-8 glass-card rounded-2xl border-l-4 border-l-secondary">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-6">
                <div>
                  <h4 className="font-bold text-lg text-on-surface">
                    Shri Ramswaroop Digital Technologies Pvt. Ltd.
                  </h4>
                  <p className="text-secondary text-sm font-medium">
                    Summer Intern – Full Stack Development
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-bold">
                  Lucknow
                </span>
              </div>

              <ul className="space-y-4 text-on-surface text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-secondary mt-1 shrink-0">•</span>
                  <span>Built responsive frontend interfaces using HTML, CSS, and JavaScript.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1 shrink-0">•</span>
                  <span>Worked with Flask and MySQL for backend integration.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1 shrink-0">•</span>
                  <span>Collaborated on real-world application development and debugging.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Activities & Honors Section */}
        <div className="scroll-reveal">
          <h2 className="font-headline-xl text-headline-xl mb-12 text-tertiary drop-shadow-lg">
            Activities & Honors
          </h2>

          <div className="space-y-8">
            {/* Extracurricular Activities */}
            <div className="p-8 glass-card rounded-2xl">
              <h4 className="font-bold mb-6 flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-tertiary">groups</span>
                Extracurricular Activities
              </h4>
              <ul className="space-y-4 text-sm text-on-surface leading-relaxed">
                <li className="flex gap-4">
                  <span className="w-2 h-2 rounded-full bg-tertiary mt-1.5 shrink-0"></span>
                  <span>Core Member, Technical Club (GeeksforGeeks Chapter), SRMCEM.</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-2 h-2 rounded-full bg-tertiary mt-1.5 shrink-0"></span>
                  <span>Managed social media and coordinated multiple college-level technical events.</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-2 h-2 rounded-full bg-tertiary mt-1.5 shrink-0"></span>
                  <span>Completed Google Cloud Study Jams 2025.</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-2 h-2 rounded-full bg-tertiary mt-1.5 shrink-0"></span>
                  <span>Solved coding problems on LeetCode and other platforms.</span>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="p-8 glass-card rounded-2xl">
              <h4 className="font-bold mb-6 flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">verified</span>
                Certifications
              </h4>

              <div className="grid grid-cols-1 gap-5">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">phone_iphone</span>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Mobile Application Developer</p>
                    <p className="text-xs text-outline font-medium">L&T EduTech</p>
                  </div>
                </div>

                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">cloud</span>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Google Cloud Study Jams 2025</p>
                    <p className="text-xs text-outline font-medium">Google Cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
