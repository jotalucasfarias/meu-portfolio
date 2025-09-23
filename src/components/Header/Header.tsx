import { Link as ScrollLink } from 'react-scroll';
import MenuButton from './MenuButton';
import ThemeButton from './ThemeButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-white/20 bg-[#FCFBF8]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 flex items-center justify-between h-16">
        {/* Name/Logo */}
        <div className="flex items-center gap-2">
          {/* Yellow circle */}
          <div className="w-3 h-3 bg-[#F9C015] rounded-full animate-pulse"></div>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-xl font-extrabold text-[#2B221D] dark:text-[#F6F5EE] cursor-pointer"
          >
            João Lucas
          </ScrollLink>
        </div>

        <nav>
          <ul className="hidden md:flex flex-row gap-6 text-[#625750] dark:text-[#C6C3B9]">
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="hover:text-[#F9C015] transition-colors duration-300 cursor-pointer"
              >
                Sobre
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="hover:text-[#F9C015] transition-colors duration-300 cursor-pointer"
              >
                Habilidades
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="hover:text-[#F9C015] transition-colors duration-300 cursor-pointer"
              >
                Projetos
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="hover:text-[#F9C015] transition-colors duration-300 cursor-pointer"
              >
                Contato
              </ScrollLink>
            </li>
          </ul>
        </nav>

        {/* Botões de Ação */}
        <div className="flex items-center gap-2">
          <ThemeButton />
          <div className="md:hidden">
            <MenuButton />
          </div>
        </div>
      </div>
    </header>
  );
}
