import MenuButton from './MenuButton';
import ThemeButton from './ThemeButton';

export default function Header() {

  
  return (
    // colocar filter depois do border
    <header className="w-full border-b border-gray-500/15 dark:border-gray-500/20">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Name/Logo */}
        <div className="flex items-center gap-2">
          {/* Yellow circle */}
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-xl font-extrabold text-black dark:text-white">
            João Lucas
          </span>
        </div>

        <nav>
          <ul className="hidden md:flex flex-row gap-6 text-black dark:text-white">
            <li className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
              Sobre
            </li>
            <li className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
              Habilidades
            </li>
            <li className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
              Projetos
            </li>
            <li className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
              Contato
            </li>
          </ul>
        </nav>

        {/* Botão de tema */}
        <div className="flex flex-row gap-2">
          <ThemeButton />
          <MenuButton />
        </div>
      </div>


    </header>
  );
}
