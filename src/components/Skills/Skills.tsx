import { FiCode, FiDatabase, FiHardDrive, FiTool } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import TechsBar from '../TechsBar/TechsBar';

const skillsData = [
  {
    icon: <FiCode size={32} className="text-yellow-500 mb-4" />,
    title: 'Front-end',
    technologies:
      'HTML, CSS, JavaScript, TypeScript, React, Next.js, TailwindCSS',
  },
  {
    icon: <FiTool size={32} className="text-yellow-500 mb-4" />,
    title: 'Ferramentas & Design',
    technologies: 'Git/GitHub, VS Code, Figma',
  },
  {
    icon: <FiHardDrive size={32} className="text-yellow-500 mb-4" />,
    title: 'Infra & TI',
    technologies:
      'Windows, Linux, redes, hardware, Active Directory, suporte técnico (N1/N2)',
  },
  {
    icon: <FiDatabase size={32} className="text-yellow-500 mb-4" />,
    title: 'Estudos em andamento',
    technologies: 'Noções de Node.js e PostgreSQL',
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div
          className={`max-w-3xl transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B221D] dark:text-[#F6F5EE]">
            Habilidades
          </h2>
          <div className="w-16 h-1 bg-[#F9C015] mt-3 mb-8"></div>
        </div>

        {/* Grid de Habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`bg-[#FCFBF8] dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/20 rounded-lg p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_40px_5px_rgba(249,192,21,0.2)] dark:hover:border-[#F9C015]/40 ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {skill.icon}
              <h3 className="text-lg font-bold text-[#625750] dark:text-[#C6C3B9] mb-2">
                {skill.title}
              </h3>
              <p className="text-[#625750]/90 dark:text-[#C6C3B9]">
                {skill.technologies}
              </p>
            </div>
          ))}
        </div>
        <TechsBar />
      </div>
    </section>
  );
}
