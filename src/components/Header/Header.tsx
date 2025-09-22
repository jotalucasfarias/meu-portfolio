import { Link as ScrollLink } from 'react-scroll';
import MenuButton from './MenuButton';
import ThemeButton from './ThemeButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-white/20 bg-white/80 dark:bg-black/80 backdrop-blur-lg transition-colors duration-500">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Name/Logo */}
        <div className="flex items-center gap-2">
          {/* Yellow circle */}
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-xl font-extrabold text-text-dark dark:text-white cursor-pointer"
          >
            João Lucas
          </ScrollLink>
        </div>

        <nav>
          <ul className="hidden md:flex flex-row gap-6 text-text-dark dark:text-white">
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
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
                className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
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
                className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
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
                className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
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
