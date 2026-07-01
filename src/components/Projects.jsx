import { useEffect, useRef } from 'react';

/**
 * Projects Component
 * Featured projects showcase
 */
const Projects = () => {
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

  const projects = [
    {
      title: 'AI Resume Analyzer',
      description: 'An ATS Optimizer built with React, Node, and Groq AI. Features advanced PDF parsing to calculate ATS scores and provide tailored resume improvement suggestions.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1L5nU8Yu-ZqJm4hCYQttjO1tbYiruEoCBf2HYVBEjY04p4WrxRKe-XjxcUwObBgYsJ6lxJS7wFcjiEBaBM2MVnCyKizrZ1IU32gZL9GTK-39dgbfKZz9kMExmQXqiTui6fJek32mAxG0ICyl5ToRF3uflHAlQxe8RZe6ax1T8Qj2FtnF80MzXE2Tf9-daNqvzvfIbXIH4LXqU8KpV7llsAif5p0chRAJqhbKtEHWWD32Toxn-X1tyGvsPkWSYP6X2pWaRivsRp94',
      tags: ['AI Tools', 'MERN'],
      tagColors: ['bg-primary/30 border-primary/50', 'bg-secondary/30 border-secondary/50'],
      tech: 'Groq AI Integration',
      bgColor: 'bg-primary/5'
    },
    {
      title: 'CNC EdTech Training website',
      description: 'A highly responsive cybersecurity training platform developed using React and Tailwind CSS. Optimized for seamless learning experiences across all device sizes.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrbz7Bi82b1kPJI2TEmB7A-CgjjOo-cd_dLwJlDtPdjLIlUMeJ2XEMB4Ka4AmJarilyFmlNtc4YD5LmAun3XPdHonk0Z5aSgcfZ58q9wCMd5iS7v4k8RXl2xuUf-pVWtsf9F8HonnLbjO94zfE24Cyl45D8NZwqp_Y93AMe9LRE_c6R9Aw5V9Oqw4iuQ_eyBIp7fsBWRYWINnE2dxiFlbBDYjXsSr2yTE9-MNJNy4U-mxwwgidnH0izstSmXXSWsHyxxbL4qdoVfE',
      tags: ['Education', 'Frontend'],
      tagColors: ['bg-primary/30 border-primary/50', 'bg-secondary/30 border-secondary/50'],
      tech: 'Tailwind Responsive',
      bgColor: 'bg-secondary/5'
    },
    {
      title: 'Ice Cream Parlour App',
      description: 'A responsive full-stack application for online ordering. Features an interactive frontend with a secure backend integration for menu management and orders.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj0acGKvFbunVfIbL2D3JKkEuKECLFFUtBt7uW-XhO6sjp_fKhIistCodwAeOzerRIF-wMniwmMxmJuEB4U60KfMvbB6gBE3dlFSH2ihteYqbwqOn9EUj_FUPkj1a8F0lKOLXmQM3psUQVrXV1_PLaqoDSMtkvUfF2_TM3UwA9jwglGTp75kLDXtDJwhRj4b1wtHHxdl0MNvA8eubgwxqy2eoG1pxiDa_otoHt8jtx7Jk1EKRKVcWtvQ-FwO0eKGJu0cpUbS-B1Z8',
      tags: ['Full Stack', 'Python Flask'],
      tagColors: ['bg-tertiary/30 border-tertiary/50', 'bg-primary/30 border-primary/50'],
      tech: 'Flask + MySQL',
      bgColor: 'bg-tertiary/5'
    },
    {
      title: 'Personal Portfolio',
      description: 'A professional site designed to showcase my projects and technical skills. Built with clean, semantic code and modern UI/UX principles.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8gAZNbxbDKCreSPo82ztB0kCWg-9ovMProUA3Q1HLr9dOBIyL4WiV_hcmdOqgx32mdxXZtlCcrvh3IAQGMyrajnxddZV7KFKZe1aC9osSL2prlAaOmBMhyS5elfNH1vqs-8nm3fiGZIR5euL4sj2lE4K4BLLo6Vy4FyzpZkS9t055vXWo8tBKE-AZGBt8pPd4BxIJnjqv2NrNSFO-8n3SROoFvK7KlTmsH5KU4veUaEqWjjjbJdIMK24ZXqgAQeHxUeXMV1TmcqU',
      tags: ['Portfolio', 'JS'],
      tagColors: ['bg-white/20 border-white/30', 'bg-secondary/30 border-secondary/50'],
      tech: 'HTML/CSS/JS',
      bgColor: 'bg-white/5'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 max-w-container-max mx-auto">
      <h2 className="font-headline-xl text-headline-xl mb-16 text-center text-primary scroll-reveal drop-shadow-lg">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card rounded-3xl overflow-hidden flex flex-col scroll-reveal"
          >
            {/* Project Image */}
            <div className={`h-64 relative group overflow-hidden ${project.bgColor}`}>
              <img
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex items-end p-8">
                <div className="flex gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`${project.tagColors[tagIndex]} text-white text-[10px] uppercase font-bold px-4 py-1.5 rounded-full border backdrop-blur-md`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <h3 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
                {project.title}
              </h3>
              <p className="text-on-surface mb-8 opacity-90 flex-1 leading-relaxed">
                {project.description}
              </p>

              {/* Project Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex gap-5">
                  <span className="material-symbols-outlined text-on-surface hover:text-primary cursor-pointer transition-colors text-2xl">
                    code
                  </span>
                  <span className="material-symbols-outlined text-on-surface hover:text-secondary cursor-pointer transition-colors text-2xl">
                    launch
                  </span>
                </div>
                <span className="text-[10px] text-outline font-bold tracking-widest uppercase opacity-80">
                  {project.tech}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
