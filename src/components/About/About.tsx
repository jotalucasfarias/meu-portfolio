import { useInView } from 'react-intersection-observer';
import Experiences from '../Experiences/Experiences';

export default function Sobre() {
  // Utiliza o hook para animação ao entrar na tela
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // Fundo customizado para o About
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 overflow-hidden "
    >
      <div>
        {/* Grid de duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Coluna 1: Sobre mim */}
          <div
            className={`transition-all duration-700 ease-out delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Título com cor personalizada para cada tema */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B221D] dark:text-[#F6F5EE]">
              Quem sou eu?
            </h2>
            {/* Barra amarela personalizada */}
            <div className="w-16 h-1 bg-[#F9C015] mt-3 mb-8"></div>

            {/* Texto com cor personalizada para cada tema */}
            <p className="text-base xl:text-lg text-[#625750] dark:text-[#C6C3B9] text-justify mb-4">
              Olá, sou{' '}
              <strong>João Lucas Farias — Desenvolvedor Front-end</strong>{' '}
              apaixonado por criar interfaces modernas, acessíveis e intuitivas,
              que tornam a experiência do usuário simples e agradável.
            </p>

            <p className="text-base xl:text-lg text-[#625750] dark:text-[#C6C3B9] text-justify mb-4">
              Hoje, estou em busca da{' '}
              <strong>
                minha primeira oportunidade profissional como desenvolvedor
              </strong>
              , enquanto foco no desenvolvimento de aplicações web responsivas e
              funcionais utilizando{' '}
              <strong>React, Next.js, TypeScript e TailwindCSS</strong>. Tenho
              experiência em <strong>suporte técnico</strong>, o que me deu uma
              visão prática de como resolver problemas e transformar ideias em
              soluções úteis no dia a dia.
            </p>

            <p className="text-base xl:text-lg text-[#625750] dark:text-[#C6C3B9] text-justify mb-4">
              Além do código, gosto de explorar ferramentas de design como o{' '}
              <strong>Figma</strong> para prototipar interfaces e acompanhar
              tendências de front-end, sempre buscando unir estética,
              usabilidade e desempenho.
            </p>

            <div className="mb-4">
              <p className="text-base xl:text-lg text-[#625750] dark:text-[#C6C3B9] text-justify">
                <span className="font-semibold">
                  🚀 Principais habilidades:
                </span>{' '}
                HTML, CSS, JavaScript (ES6+), TypeScript, React, Next.js,
                TailwindCSS, Git, GitHub, Figma, VS Code, Windows e Linux
              </p>
            </div>

            <div>
              <p className="text-base xl:text-lg text-[#625750] dark:text-[#C6C3B9] text-justify">
                🌟 <span className="font-semibold">Objetivo:</span> Criar
                experiências digitais que sejam funcionais, acessíveis e que
                realmente façam diferença para os usuários, aplicando meus
                conhecimentos e contribuindo para projetos desafiadores.
              </p>
            </div>
          </div>

          {/* Coluna 2: Experiência */}
          <div
            className={`transition-all duration-700 ease-out delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Título com cor personalizada */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B221D] dark:text-[#F6F5EE]">
              Experiência
            </h2>
            {/* Barra amarela personalizada */}
            <div className="w-16 h-1 bg-[#F9C015] mt-3 mb-8"></div>
            <Experiences />
          </div>
        </div>
      </div>
    </section>
  );
}
