import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../../data/projectsData';

// Import do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-24 bg-white dark:bg-black transition-colors duration-500"
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
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="swiper-button-prev-custom p-3 rounded-full border border-gray-300 dark:border-white/20 text-text-dark dark:text-white hover:bg-yellow-500/10 hover:border-yellow-500/50 cursor-pointer transition-colors">
              <FiArrowLeft />
            </div>
            <div className="swiper-button-next-custom p-3 rounded-full border border-gray-300 dark:border-white/20 text-text-dark dark:text-white hover:bg-yellow-500/10 hover:border-yellow-500/50 cursor-pointer transition-colors">
              <FiArrowRight />
            </div>
          </div>
        </div>

        {/* Carrossel de Projetos */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-12 !px-4 !py-4" // Adiciona padding para o hover e paginação
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="group bg-white dark:bg-[#0f0f0f85] border border-gray-200 dark:border-white/20 rounded-xl p-6 flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_40px_5px_rgba(234,179,8,0.2)] dark:hover:border-yellow-500/40">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-text-dark dark:text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${project.title} no GitHub`}
                  >
                    <FiExternalLink className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  </a>
                </div>
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
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-custom text-center mt-4"></div>
      </div>
    </section>
  );
}
