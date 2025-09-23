import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'; // Usando os mesmos ícones do Contact
import { useInView } from 'react-intersection-observer';
import { Link as ScrollLink } from 'react-scroll';

export default function HeroBanner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-[calc(90vh-16px)] flex items-center justify-center py-24 md:py-32 transition-colors duration-700"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          {/* Coluna da Esquerda: Texto e Botões */}
          <div
            className={`flex flex-col gap-8 text-center md:text-left order-2 md:order-1 transition-all duration-700 ease-out delay-500 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl/12 tracking-tight font-extrabold text-[#2B221D] dark:text-[#F6F5EE] leading-tight">
              Olá, sou <span className="text-[#F9C015]">João Lucas</span> —
              Desenvolvedor Front-End & Profissional de TI
            </h1>

            {/* Ícones das redes sociais - iguais ao Contact */}
            <div className="flex gap-6 mt-4 justify-center md:justify-start">
              <a
                href="https://github.com/jotalucasfarias"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-[#625750] dark:text-[#C6C3B9] border border-gray-200 dark:border-white/20 rounded-full transition-all duration-300 hover:text-[#F9C015] hover:border-[#F9C015] hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jottalucasfarias/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-[#625750] dark:text-[#C6C3B9] border border-gray-200 dark:border-white/20 rounded-full transition-all duration-300 hover:text-[#F9C015] hover:border-[#F9C015] hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </div>

            {/* Botões principais */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start items-stretch">
              {/* Botão Ver projetos */}
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-80}
                duration={500}
                className="px-6 py-3 flex items-center justify-center gap-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-400/75 transition-all duration-300 text-center hover:-translate-y-1 whitespace-nowrap cursor-pointer"
              >
                Ver projetos
                <FiArrowRight />
              </ScrollLink>
              {/* Botão Entrar em contato */}
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                className="px-6 py-3 border border-[#F9C015] text-[#625750] dark:text-[#C6C3B9] font-bold rounded-lg hover:bg-[#F9C015]/10 transition-all duration-300 text-center hover:-translate-y-1 whitespace-nowrap cursor-pointer"
              >
                Entrar em contato
              </ScrollLink>
            </div>
          </div>

          {/* Coluna da Direita: Foto */}
          <div
            className={`flex justify-center items-center order-1 md:order-2 transition-all duration-700 ease-out delay-500 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 ">
              <img
                src="photo.jpeg"
                alt="Foto de João Lucas"
                className="rounded-full object-cover w-full h-full border-2 border-yellow-500 shadow-[0_0_40px_5px_rgba(234,179,8,0.4)]"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
