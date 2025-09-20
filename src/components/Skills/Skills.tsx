import { FiCode, FiDatabase, FiHardDrive, FiTool } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  {
    icon: <FiCode size={32} className="text-yellow-500 mb-4" />,
    title: 'Front-end',
    technologies: 'HTML, CSS, JS, TypeScript, React, Next.js, TailwindCSS',
  },
  {
    icon: <FiDatabase size={32} className="text-yellow-500 mb-4" />,
    title: 'Back-end & DB',
    technologies: 'Noções de Node.js + Express e PostgreSQL',
  },
  {
    icon: <FiTool size={32} className="text-yellow-500 mb-4" />,
    title: 'Ferramentas',
    technologies: 'Git/GitHub, VS Code, Figma, Office 2016',
  },
  {
    icon: <FiHardDrive size={32} className="text-yellow-500 mb-4" />,
    title: 'Infra & Suporte',
    technologies:
      'Windows e Linux, redes, hardware, Active Directory, Suporte N1/N2',
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
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark dark:text-white">
            Habilidades
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mt-3 mb-8"></div>
        </div>

        {/* Grid de Habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`border border-gray-400 dark:border-gray-700 rounded-lg p-6 transition-all duration-300 ease-out hover:border-yellow-500 hover:shadow-[0_0_40px_5px_rgba(234,179,8,0.4)] ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {skill.icon}
              <h3 className="text-lg font-bold text-text-dark dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-text-dark/90 dark:text-gray-400">
                {skill.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
