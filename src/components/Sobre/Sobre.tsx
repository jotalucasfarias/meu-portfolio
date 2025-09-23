import { useInView } from 'react-intersection-observer';
import Experiences from '../Experiences/Experiences';

export default function Sobre() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 overflow-hidden">
      {/* A classe max-w-6xl foi removida para seguir o padrão do site */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conteúdo em duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Coluna 1: Sobre mim */}
          <div
            className={`transition-all duration-700 ease-out delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark dark:text-white">
              Sobre mim
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mt-3 mb-8"></div>
            <p className="text-base text-text-dark/90 dark:text-gray-300 text-justify">
              Sou João Lucas Farias, graduando em Sistemas de Informação
              (2021–2025) e apaixonado por desenvolvimento front-end. Adoro
              criar interfaces que sejam bonitas, fáceis de usar e que realmente
              façam sentido para quem acessa. Gosto de transformar ideias em
              soluções práticas e sempre estou aprendendo novas ferramentas e
              técnicas para deixar meus projetos melhores a cada dia.
            </p>
          </div>

          {/* Coluna 2: Experiência */}
          <div
            className={`transition-all duration-700 ease-out delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark dark:text-white">
              Experiência
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mt-3 mb-8"></div>
            <Experiences />
          </div>
        </div>
      </div>
    </section>
  );
}
