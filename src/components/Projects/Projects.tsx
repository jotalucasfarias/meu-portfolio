import { useInView } from 'react-intersection-observer';
import { projectsData } from '../../data/projectsData';

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#000000] transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div
          className={`flex flex-col md:flex-row justify-between md:items-center mb-12 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark dark:text-white">
              Projetos
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mt-3"></div>
          </div>
          <a
            href="#contact"
            className="mt-6 md:mt-0 px-5 py-2 border border-yellow-500 text-text-dark dark:text-white rounded-lg hover:bg-yellow-500/10 transition-all duration-300 text-center whitespace-nowrap"
          >
            Disponível para novos projetos
          </a>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-[#0f0f0f85] border border-gray-200 dark:border-white/20 rounded-xl p-6 flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_40px_5px_rgba(234,179,8,0.2)] dark:hover:border-yellow-500/40`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-text-dark dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-text-dark/80 dark:text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-transparent border border-gray-300 dark:border-white/20 text-text-dark/80 dark:text-gray-300 text-sm rounded-full transition-colors duration-300 group-hover:border-yellow-500/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
