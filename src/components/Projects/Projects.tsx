import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
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
      className="py-16 md:py-24 bg-[#FCFBF8] dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      <div>
        {/* Cabeçalho da Seção */}
        <div
          className={`flex flex-col md:flex-row justify-between md:items-center mb-12 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B221D] dark:text-[#F6F5EE]">
              Projetos
            </h2>
            <div className="w-16 h-1 bg-[#F9C015] mt-3"></div>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="swiper-button-prev-custom p-3 rounded-full border border-gray-300 dark:border-white/20 text-[#625750] dark:text-[#C6C3B9] hover:bg-[#F9C015]/10 hover:border-[#F9C015]/50 cursor-pointer transition-colors">
              <FiArrowLeft />
            </div>
            <div className="swiper-button-next-custom p-3 rounded-full border border-gray-300 dark:border-white/20 text-[#625750] dark:text-[#C6C3B9] hover:bg-[#F9C015]/10 hover:border-[#F9C015]/50 cursor-pointer transition-colors">
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
          className="!pb-12 !px-4 !py-6"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="group bg-[#FCFBF8] dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/20 rounded-xl p-6 flex flex-col min-h-66 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_25px_5px_rgba(249,192,21,0.2)] dark:hover:border-[#F9C015]/40">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#2B221D] dark:text-[#F6F5EE]">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver o deploy de ${project.title}`}
                        className="text-sm text-[#625750] dark:text-[#C6C3B9] group-hover:text-[#F9C015] transition-colors hover:underline"
                      >
                        Ver projeto
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[#625750]/80 dark:text-[#C6C3B9] mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-transparent border border-gray-300 dark:border-white/20 text-[#625750]/80 dark:text-[#C6C3B9] text-sm rounded-full transition-colors duration-300 group-hover:border-[#F9C015]/50"
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
