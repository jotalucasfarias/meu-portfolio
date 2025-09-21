import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div
          className={`text-left transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark dark:text-white">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mt-3 mb-8"></div>
          <p className="text-lg text-text-dark/80 dark:text-gray-300 max-w-3xl">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à
            vontade para me contatar através das minhas redes ou enviando uma
            mensagem pelo formulário abaixo.
          </p>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 transition-all duration-700 ease-out delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Coluna do Formulário */}
          <form className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-left mb-2 text-sm font-medium text-text-dark dark:text-gray-300"
                >
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-[#0f0f0f85] border border-gray-200 dark:border-white/20 text-text-dark dark:text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-left mb-2 text-sm font-medium text-text-dark dark:text-gray-300"
                >
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-[#0f0f0f85] border border-gray-200 dark:border-white/20 text-text-dark dark:text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-left mb-2 text-sm font-medium text-text-dark dark:text-gray-300"
              >
                Sua Mensagem
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-[#0f0f0f85] border border-gray-200 dark:border-white/20 text-text-dark dark:text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
            </div>
            <div className="mt-8 text-left">
              <button
                type="submit"
                className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-400/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                Enviar mensagem
              </button>
            </div>
          </form>

          {/* Coluna de Informações e Redes Sociais */}
          <div className="lg:col-span-2 lg:pl-8">
            <div className="space-y-6 text-text-dark dark:text-gray-300">
              <div className="flex items-center gap-4">
                <FiMail size={24} className="text-yellow-500" />
                <span>jotalucasfarias@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone size={24} className="text-yellow-500" />
                <span>(69) 9313-3189</span>
              </div>
              <div className="flex items-center gap-4">
                <FiMapPin size={24} className="text-yellow-500" />
                <span>Rondônia, Brasil</span>
              </div>
            </div>

            {/* Ícones Sociais */}
            <div className="flex justify-start gap-4 mt-8">
              <a
                href="https://github.com/jotalucasfarias"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-text-dark dark:text-white border border-gray-200 dark:border-white/20 rounded-full transition-all duration-300 hover:text-yellow-500 hover:border-yellow-500 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jottalucasfarias/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-text-dark dark:text-white border border-gray-200 dark:border-white/20 rounded-full transition-all duration-300 hover:text-yellow-500 hover:border-yellow-500 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
