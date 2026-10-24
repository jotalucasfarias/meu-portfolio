import {
  FiActivity,
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiCpu,
  FiHardDrive,
  FiLayers,
  FiMapPin,
  FiMonitor,
  FiServer,
  FiShield,
  FiTool,
  FiWifi,
} from 'react-icons/fi';

// Import do Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const experiencesData = [
  {
    company: 'Guaporé Indústria e Comércio de Vidros Ltda.',
    role: 'Técnico de Suporte de TI',
    period: 'Outubro/2025 – Atual',
    location: 'Porto Velho — RO',
    details: 'Suporte Técnico e Infraestrutura',
    responsibilities: [
      'Suporte técnico a usuários, diagnóstico e resolução de problemas de hardware, software, sistemas operacionais e redes.',
      'Administração de Active Directory e GPOs, com gerenciamento de usuários, computadores e políticas de segurança.',
      'Implantação e configuração de monitoramento de estações Windows utilizando Zabbix.',
      'Suporte à infraestrutura de servidores, virtualização, compartilhamentos de rede e armazenamento.',
      'Desenvolvimento de soluções internas para gerenciamento de ativos de TI e controle de chamados de suporte.',
    ],
    technologies: [
      { name: 'Hardware & Redes', icon: <FiWifi aria-hidden /> },
      { name: 'Active Directory & GPOs', icon: <FiShield aria-hidden /> },
      { name: 'Zabbix', icon: <FiActivity aria-hidden /> },
      { name: 'Servidores & Virtualização', icon: <FiServer aria-hidden /> },
      { name: 'Armazenamento', icon: <FiHardDrive aria-hidden /> },
    ],
  },
  {
    company: 'Tribunal de Justiça de Rondônia (TJRO)',
    role: 'Suporte Técnico',
    period: '2022 a 2024',
    location: 'Porto Velho — RO',
    details: 'Níveis N1 e N2',
    responsibilities: [
      'Implementação e manutenção de sistemas computacionais.',
      'Montagem, instalação e configuração de equipamentos de informática.',
      'Atendimento help desk (N1 e N2), com resolução de chamados e suporte a usuários.',
      'Manutenção preventiva e corretiva de hardware e software.',
      'Registro e documentação de procedimentos técnicos em inventário e relatórios.',
      'Projeto interno: criação de uma ISO offline do Windows 11 com instalação automática dos programas utilizados pelo TJRO.',
    ],
    technologies: [
      { name: 'Hardware', icon: <FiCpu aria-hidden /> },
      { name: 'Redes', icon: <FiWifi aria-hidden /> },
      { name: 'Sistemas', icon: <FiMonitor aria-hidden /> },
      { name: 'Active Directory', icon: <FiShield aria-hidden /> },
      { name: 'Help‑desk', icon: <FiTool aria-hidden /> },
    ],
  },
];

export default function Experiences() {
  return (
    <div className="relative">
      {/* Controles de Navegação Customizados */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#625750]/70 dark:text-[#C6C3B9]/70">
          Navegue pelas experiências
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Experiência anterior"
            className="swiper-exp-prev p-2 rounded-full border border-gray-300 dark:border-white/20 text-[#625750] dark:text-[#C6C3B9] hover:bg-[#F9C015]/15 hover:border-[#F9C015] hover:text-[#F9C015] transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FiArrowLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Próxima experiência"
            className="swiper-exp-next p-2 rounded-full border border-gray-300 dark:border-white/20 text-[#625750] dark:text-[#C6C3B9] hover:bg-[#F9C015]/15 hover:border-[#F9C015] hover:text-[#F9C015] transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Carrossel com animação fluida de Fade */}
      <Swiper
        modules={[Navigation, Pagination, EffectFade, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoHeight={true}
        speed={450}
        navigation={{
          nextEl: '.swiper-exp-next',
          prevEl: '.swiper-exp-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-exp',
        }}
        className="w-full"
      >
        {experiencesData.map((exp, index) => (
          <SwiperSlide key={index}>
            <div className="border border-gray-200 dark:border-white/20 rounded-xl p-6 bg-[#FCFBF8] dark:bg-[#0a0a0a] transition-all duration-500 shadow-sm hover:shadow-[0_0_20px_5px_rgba(249,192,21,0.15)] dark:hover:border-[#F9C015]/40">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-2">
                <div>
                  <h4 className="text-lg xl:text-xl font-bold text-[#2B221D] dark:text-[#F6F5EE]">
                    {exp.company}
                  </h4>
                  <p className="text-[#F9C015] font-semibold text-sm xl:text-base">
                    {exp.role}
                  </p>
                </div>
                <span className="flex items-center gap-2 text-sm xl:text-base text-[#625750] dark:text-[#C6C3B9] whitespace-nowrap">
                  <FiCalendar aria-hidden />
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm xl:text-base text-gray-600 dark:text-gray-400 mb-4">
                <span className="inline-flex items-center gap-1.5">
                  <FiMapPin aria-hidden /> {exp.location}
                </span>
                {exp.details && (
                  <span className="inline-flex items-center gap-1.5">
                    <FiLayers aria-hidden /> {exp.details}
                  </span>
                )}
              </div>

              {/* Atribuições */}
              <ul className="space-y-2.5 text-sm xl:text-base text-[#625750] dark:text-[#C6C3B9] mb-5">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheckCircle
                      className="mt-0.5 text-[#F9C015] shrink-0"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tecnologias e ferramentas (badges com ícones) */}
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2 font-medium">
                  Tecnologias e ferramentas
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-md border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-1 text-xs xl:text-sm text-yellow-600 dark:text-yellow-400 transition-colors"
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Paginação em bullets logo abaixo do carrossel */}
      <div className="swiper-pagination-custom swiper-pagination-exp text-center mt-4"></div>
    </div>
  );
}
