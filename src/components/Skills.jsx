import { useEffect, useRef } from 'react';

/**
 * Skills Component
 * Display technical skills with icons
 */
const Skills = () => {
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

  const skills = [
    {
      name: 'React.js',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkmIsMCtPJE6lDOTbC5mVke6lAiyyfIodCIstCXgcwADeZ-CsuDIvgQaiRWYGOSHAdYTkTpuo1m052J-3rsH5QfGZqn58xYZ92roeQzb2rG6M_Q8mT1U9FXI-fJ2_2E-PoQWDhOTmfs_DtqtXm1FIThSny0of7sSoFwreUbllYJnLzD7oIuGoqZPH3z9PSwtR3YtWbm0TqL0HxXwZ72HCOQOysN6O9hNHkaZkNR2BFefLtwxlZLzIymsRcUkDIneDddcAxHCyJGS0'
    },
    {
      name: 'Node.js',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmkv0UbacTDony5E1TnfAJEUd8qobHbst_ejEwxX4G7omT_xE0jCLZS55UyzUKIynlCDDPwg_ZDJUsmqm047Vf_vEToBRcylLyAJ4sA4zUXlXrlKMtPrffaIWd-1Ye7KE7pGlkiCvjc4NvQzQsFD8wmFoPRGayVNxu9tEJo1-EZd8lfWF26EaPg0k3Sgn5wRv7AK1P-RNtvexTRexAtJ2_js9d6l4TbeSQaBoRGiqu2He6Ib4PDd8mgnikVGX3Un3bjXDcPoU_Irk'
    },
    {
      name: 'Express.js',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGdLiJFuUIbPQr5voOYcEa6hRqYL4zfdcV29eFeTLKGVVT_u5BwrNBrTQTdE3gITmNbIiwu40Y69hWe5_PriytO3-7ScF_lIO2aP7UXeRh2IW00Wjb1-kdgzRlfur8fbmsZ0ecmzRjItcPsHOb4P0_uzcJWbYulp8ow8tg2z50aoUyAAp80xBJldUsO6AqZ2xBndhtKpQ4IJ9rxTYxjseixLPKGydF-gz0x9gu0wH227inmnlvMuJjrAiSFyYdP82VahguGrY6fEM'
    },
    {
      name: 'MongoDB',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1fZhMXyP7Z2X8dqH3-s_rdjIS-EIbWVbzR2_TTdEKEMxwgONmUN3VbxeFndNFTrJL_VdnIGywfNAubyfi9ViUq4JXNZ2oVg3UXNVnZeETGzSxvDQ7RuwbR1C9sEGNg2dJIEY1QSVNOUvGlhymxsJr7lXRrPTpwh-wqDzLCQCFjEKzTR6UJarLLIwlT7SGZ080j60CNwoWNu03U9qN8lDEmtjEdCiUuqoY-piKegWw8VjONwO-TGumdoSiGMb2zY-Zrn9Pl6nnlv8'
    },
    {
      name: 'Java',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLfanqFGXmNZeZLvO3Y7jLDODXODWNldB5FrAWSXBr3LGYtA0n6etMsaEnJXC8eq8xyXRHQ4purEVws8DcTq59UAJojTiqvcj6uaDbTUMxPb9A8twW8BjJ_W3CsQYNqlhSDT0rOptZMkJlsj0YMfGKxJKm_4rjydkOELuc4RjPrwAHD4q5d9Wx0jZaeky75-eYxuS9NzEbpf2TZe3z8M9wYvucYP2CejPsAzwA7Qu4orUUusatvNY_D8zxEYFGPJ70-BI1I50l5Qk'
    },
    {
      name: 'Python (Flask)',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4rJ0dqSTKI0hLLf6IDJSi1ragMaD4GRvPO33ZjojWyjPbM-Maey4uZj6ED86b_nhyOduhiFI-tIJphasd7bpnFZ6cz4Pd7A6VGqGFOgNNDeVrOxjitZwg_0s6635sJunDf4-vTVK1ItSlVEBX_okQgSH84CrKk6yFyLsg-2PFMFTJ25rsH7TZeNzoLdxPQ-MxeBHfsZHJemEO_mACbTuyz9E537VOn3dKWR_VvlL4yqpc5dTfA24ehzes8lLFblJA0Zlwd0eRR0'
    },
    {
      name: 'MySQL',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGZyP3VxzVtkrT0xzN0SlQ5G5yi6XgqM27CtFL03ihk3cZuDrJmBCbk2HmVcvtxc-dJuPY3351tJyt9zNrHcc5kTGVeFzcV2gQPbQiOMT1m4qQbPwKN-ZkUmImCAa3oBGOjWOhK7gnWM7OfDFuo9DLHicJlE8TS-Mtmro8SLZHMs9eGkvgNfrlQKPsUsXmxk0SrvI8TN-A5Qnpjq2cdqABNB0OrscJpO_Jvke9c1t8IKg51mXjK6w2HBZis6mX2_YZdBbNSGlGZag'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQcJF8XGr5OUmlsiqyR9MNcZzw3MHG0BdZCU2xi4coYwC-rpkJdFVq9DrESeM6JGLaKxb13GeG0mDlGRxYy9_Uc6XBQqy8da9mBAaQbqVGnA0bWH6mvcBFizzHX8sU2UN05HCMddeHiIM0If2KQ2kiz9v1_zMO9veCNZb82v3_Pxsp_wfwWWD3yjCcXHb2R68AoM5mLvWozPWssa71miTnNT6Q4WFsE5JDHxseD-_7413rOaIV7QeuGE6nl9CQwW8A1qf58E6Cfew'
    },
    {
      name: 'Git/GitHub',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-6zLZrf8PAgkvvZCO_u6XrFbBiiUVAaOa89GO8Vi6XnwHYiRdOQVdkgh9i9tjkM35tjECvQS6RbxPBMjOM1Cpn23_FaKA5BadaV1LXz60LEAKawYjYwRnPUDl5zPNFBJmt1Ib6CV4dvOAf8atLF3vpr8wsFt2szerukFYbXWP3VyvwbNpvhRyF-I8fhXMmrEg-uvc0TCdC_M6wki-Q0hCYmEcuzlJrG862sx9UcfUJWkeE_-kswJeunAlHkJWrIhYX36QFBLNiEA'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-24 px-6 bg-surface-container-low/20 border-y border-white/5"
    >
      <div className="max-w-container-max mx-auto text-center scroll-reveal">
        <h2 className="font-headline-xl text-headline-xl mb-6 text-primary drop-shadow-lg">
          Technical Arsenal
        </h2>
        <p className="text-on-surface mb-16 max-w-2xl mx-auto drop-shadow-sm">
          Continuously learning and mastering modern technologies to build the future of the web.
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-chip px-6 py-3 rounded-xl flex items-center gap-3 font-medium cursor-default"
            >
              <img alt={skill.name} className="w-5 h-5" src={skill.icon} />
              {skill.name}
            </div>
          ))}

          <div className="skill-chip px-6 py-3 rounded-xl flex items-center gap-3 font-medium cursor-default">
            <span className="material-symbols-outlined text-[20px] text-primary">psychology</span>
            AI Integration
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
