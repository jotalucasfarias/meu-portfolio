import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/20 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
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
