import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FCFBF8]/80 dark:bg-[#0a0a0a]/80 border-t border-gray-200 dark:border-white/20 transition-colors duration-500">
      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-24 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left h-16">
          <p className="text-sm text-text-dark/80 dark:text-gray-400 mb-4 sm:mb-0">
            &copy; {currentYear} João — Desenvolvedor Web
          </p>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-sm text-yellow-500 hover:underline cursor-pointer"
          >
            Voltar ao topo
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
}
