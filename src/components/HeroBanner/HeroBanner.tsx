import { FiArrowRight } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { Link as ScrollLink } from 'react-scroll';

export default function HeroBanner() {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação acontece apenas uma vez
    threshold: 0.1, // A animação começa quando 10% do elemento está visível
  });

  return (
    <section id="home" ref={ref} className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Esquerda: Texto e Botões */}
          <div
            className={`flex flex-col gap-6 text-left order-2 md:order-1 transition-all duration-700 ease-out delay-500 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h1
              className="text-4xl md:text-5xl font-bold text-text-dark
 dark:text-white leading-tight"
            >
              Olá, sou <span className="text-yellow-400">João Lucas</span> —{' '}
              Desenvolvedor Front-end & Profissional de TI
            </h1>

            <p className="text-lg text-text-dark/80 dark:text-gray-300">
              Apaixonado por tecnologia e desenvolvimento web, crio interfaces
              modernas, acessíveis e intuitivas. Com base sólida em suporte
              técnico e infraestrutura de TI, aplico meus conhecimentos para
              entregar soluções práticas e performáticas, sempre focado em
              experiência do usuário e qualidade de código.
            </p>

            <div className="flex flex-row gap-4 mt-4 justify-start">
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-80}
                duration={500}
                className="px-6 py-3 flex items-center justify-center gap-2 bg-yellow-400 text-black  rounded-lg hover:bg-yellow-400/75 transition-all duration-300 text-center hover:-translate-y-1 flex-1 whitespace-nowrap cursor-pointer"
              >
                Ver projetos
                <FiArrowRight />
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                className="px-6 py-3 border border-yellow-500 text-text-dark dark:text-white font-bold rounded-lg hover:bg-yellow-500/10 transition-all duration-300 text-center hover:-translate-y-1 flex-1 whitespace-nowrap cursor-pointer"
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
                className="rounded-full object-cover w-full h-full border-2 border-yellow-500"
                style={{
                  boxShadow: '0 0 40px 5px rgba(234, 179, 8, 0.4)', // Sombra amarela
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
