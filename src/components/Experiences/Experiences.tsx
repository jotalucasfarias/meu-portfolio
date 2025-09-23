import {
  FiCalendar,
  FiCheckCircle,
  FiCpu,
  FiLayers,
  FiMapPin,
  FiMonitor,
  FiShield,
  FiTool,
  FiWifi,
} from 'react-icons/fi';

export default function Experiences() {
  return (
    <div className="">
      <div className="border border-gray-200 dark:border-white/20 rounded-lg p-6 h-full transition-colors duration-700">
        <div className="flex items-start justify-between gap-4 mb-2 ">
          <div>
            <h4 className="text-lg xl:text-xl font-bold text-[#2B221D] dark:text-[#F6F5EE]">
              Tribunal de Justiça de Rondônia (TJRO)
            </h4>
            <p className="text-[#F9C015] font-semibold text-sm xl:text-base">
              Suporte Técnico
            </p>
          </div>
          <span className="flex items-center gap-2 text-sm xl:text-base text-[#625750] dark:text-[#C6C3B9] whitespace-nowrap">
            <FiCalendar aria-hidden />
            2022 a 2024
          </span>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm xl:text-base text-gray-600 dark:text-gray-400 mb-4">
          <span className="inline-flex items-center gap-1.5">
            <FiMapPin aria-hidden /> Porto Velho — RO
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FiLayers aria-hidden /> Níveis N1 e N2
          </span>
        </div>

        {/* Atribuições */}
        <ul className="space-y-2 text-sm xl:text-base text-[#625750] dark:text-[#C6C3B9] mb-5">
          <li className="flex items-start gap-2">
            <FiCheckCircle
              className="mt-0.5 text-[#F9C015] shrink-0"
              aria-hidden
            />
            <span>Implementação e manutenção de sistemas computacionais.</span>
          </li>
          <li className="flex items-start gap-2">
            <FiCheckCircle
              className="mt-0.5 text-[#F9C015] shrink-0"
              aria-hidden
            />
            <span>
              Montagem, instalação e configuração de equipamentos de
              informática.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FiCheckCircle
              className="mt-0.5 text-[#F9C015] shrink-0"
              aria-hidden
            />
            <span>
              Atendimento help desk (N1 e N2), com resolução de chamados e
              suporte a usuários.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FiCheckCircle
              className="mt-0.5 text-[#F9C015] shrink-0"
              aria-hidden
            />
            <span>
              Manutenção preventiva e corretiva de hardware e software.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FiCheckCircle
              className="mt-0.5 text-[#F9C015] shrink-0"
              aria-hidden
            />
            <span>
              Registro e documentação de procedimentos técnicos em inventário e
              relatórios.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FiCheckCircle
              className="mt-0.5 text-[#F9C015] shrink-0"
              aria-hidden
            />
            <span>
              Projeto interno: criação de uma{' '}
              <strong className="text-[#F9C015] dark:text-[#F9C015]">
                ISO offline do Windows 11
              </strong>{' '}
              com instalação automática dos programas utilizados pelo TJRO.
            </span>
          </li>
        </ul>

        {/* Tecnologias e ferramentas (badges com ícones) */}
        <div>
          <p className="text-sm xl:text-base uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
            Tecnologias e ferramentas
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-yellow-500/30 bg-yellow-500/10 px-2 py-1 text-xs xl:text-sm text-yellow-600 dark:text-yellow-400">
              <FiCpu aria-hidden /> Hardware
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-yellow-500/30 bg-yellow-500/10 px-2 py-1 text-xs xl:text-sm text-yellow-600 dark:text-yellow-400">
              <FiWifi aria-hidden /> Redes
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-yellow-500/30 bg-yellow-500/10 px-2 py-1 text-xs xl:text-sm text-yellow-600 dark:text-yellow-400">
              <FiMonitor aria-hidden /> Sistemas
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-yellow-500/30 bg-yellow-500/10 px-2 py-1 text-xs xl:text-sm text-yellow-600 dark:text-yellow-400">
              <FiShield aria-hidden /> Active Directory
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-yellow-500/30 bg-yellow-500/10 px-2 py-1 text-xs xl:text-sm text-yellow-600 dark:text-yellow-400">
              <FiTool aria-hidden /> Help‑desk
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
