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
              Informação (2021–2025). Atuo como desenvolvedor web e profissional
              de TI com vivência em suporte técnico, manutenção de
              hardware/software e desenvolvimento front‑end com React e
              TypeScript. Tenho facilidade em aprender e me adaptar a novos
              desafios, sempre visando qualidade de código, acessibilidade e uma
              excelente experiência do usuário.
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
                Experiência recente
              </h3>
              <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
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
                  Implementação e manutenção de sistemas, montagem/instalação e
                  configuração de equipamentos, atendimento a chamados
                  (help‑desk), manutenção de hardware e software, documentação e
                  inclusão de sistemas no domínio (Active Directory).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
