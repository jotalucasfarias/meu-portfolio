import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Impede a rolagem da página quando o menu está aberto
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMenuOpen]);

  // Descobre a altura real do Header
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Botão do menu */}
      <button
        onClick={toggleMenu}
        aria-label="Abrir menu"
        className="p-2 rounded duration-300 border border-gray-200 hover:bg-yellow-500/25 hover:text-black dark:border-white/20 transition-colors z-[60]"
      >
        <div className="relative h-5 w-5">
          <FiMenu
            size={20}
            className={`absolute transition-all duration-300 ${
              isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
            } text-black dark:text-white`}
          />
          <FiX
            size={20}
            className={`absolute transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
            } text-black dark:text-white`}
          />
        </div>
      </button>

      {/* Overlay do menu */}
      <div
        style={{
          top: `${headerHeight}px`, // começa logo abaixo do Header
          height: `calc(100vh - ${headerHeight}px)`, // ocupa o resto da tela
        }}
        className={`
          fixed inset-x-0 bottom-0
          bg-white dark:bg-black z-[55]
          flex flex-col items-center justify-center
          transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <nav>
          <ul className="flex flex-col items-center gap-8">
            {[
              { to: 'home', label: 'Início' },
              { to: 'about', label: 'Sobre' },
              { to: 'skills', label: 'Habilidades' },
              { to: 'projects', label: 'Projetos' },
              { to: 'contact', label: 'Contato' },
            ].map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={handleLinkClick}
                  className="text-black dark:text-white text-2xl font-bold hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
