import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Impede a rolagem da página quando o menu está aberto
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }
    // Cleanup function para reverter o estilo quando o componente for desmontado
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMenuOpen]);

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        className="p-3 rounded duration-300 border border-gray-500/15 hover:bg-yellow-500/25 hover:text-black dark:border-gray-500/20 transition-colors z-50"
        onClick={toggleMenu}
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

      <div
        className={`
          fixed top-20 inset-x-0 bottom-0 bg-white dark:bg-black z-40
          flex flex-col items-center justify-center
          transition-all duration-500 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav>
          <ul className="flex flex-col items-center gap-8">
            <li>
              <a
                href="#home"
                onClick={handleLinkClick}
                className="text-black dark:text-white text-2xl font-bold hover:text-yellow-500 transition-colors"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleLinkClick}
                className="text-black dark:text-white text-2xl font-bold hover:text-yellow-500 transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={handleLinkClick}
                className="text-black dark:text-white text-2xl font-bold hover:text-yellow-500 transition-colors"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="text-black dark:text-white text-2xl font-bold hover:text-yellow-500 transition-colors"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="text-black dark:text-white text-2xl font-bold hover:text-yellow-500 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
