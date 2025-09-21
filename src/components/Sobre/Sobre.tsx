import { useInView } from 'react-intersection-observer';

export default function Sobre() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Título */}
          <div
            className={`transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark dark:text-white">
              Sobre mim
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mt-3 mb-8"></div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-8">
            {/* Parágrafo de descrição */}
            <p
              className={`text-base text-text-dark/90 dark:text-gray-300 transition-all duration-700 ease-out delay-200 ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Sou João Lucas Farias da Silva, graduando em Sistemas de
              Informação (2021–2025). Atualmente, meu foco é desenvolvimento
              front-end, utilizando React, TypeScript e TailwindCSS para
              construir interfaces funcionais e responsivas.
            </p>

            {/* Card de Experiência */}
            <div
              className={`transition-all duration-700 ease-out delay-300 ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl font-bold text-text-dark dark:text-white mb-5">
                Experiência
              </h3>
              <div className="bg-white dark:bg-[#0f0f0f85] border border-gray-200 dark:border-white/20 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                  <h4 className="text-lg font-bold text-text-dark dark:text-white">
                    Tribunal de Justiça de Rondônia
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                    2022 – 2024
                  </span>
                </div>
                <p className="text-yellow-500 font-semibold mb-3">
                  Suporte Técnico
                </p>
                <p className="text-base text-text-dark/80 dark:text-gray-300">
                  Atuei na implementação e manutenção de sistemas e
                  infraestrutura de TI, incluindo configuração de equipamentos,
                  redes e softwares. Também realizei atendimento a usuários
                  (help-desk), manutenção de hardware/software e inclusão de
                  sistemas no domínio (Active Directory). Essa vivência me
                  proporcionou disciplina técnica, raciocínio lógico e contato
                  direto com diferentes áreas de TI — habilidades que aplico
                  hoje no desenvolvimento front-end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
