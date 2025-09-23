import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
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

  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  /**
   * Lida com a submissão do formulário, enviando os dados para o EmailJS.
   * As credenciais são carregadas de variáveis de ambiente para maior segurança.
   */
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    if (!form.current) {
      setIsSubmitting(false);
      setSubmitMessage('Erro: Formulário não encontrado.');
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setSubmitMessage('Mensagem enviada com sucesso!');
          form.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitMessage('Falha ao enviar a mensagem. Tente novamente.');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <div>
          <div
            className={`text-left transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B221D] dark:text-[#F6F5EE]">
              Entre em Contato
            </h2>
            <div className="w-16 h-1 bg-[#F9C015] mt-3 mb-8"></div>
            <p className="text-lg text-[#625750]/80 dark:text-[#C6C3B9] max-w-3xl">
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se
              à vontade para me contatar através das minhas redes ou enviando
              uma mensagem pelo formulário abaixo.
            </p>
          </div>

          <div
            className={`mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 transition-all duration-700 ease-out delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <form ref={form} onSubmit={sendEmail} className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-left mb-2 text-sm font-medium text-[#625750] dark:text-[#C6C3B9]"
                  >
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full p-3 rounded-lg bg-[#FCFBF8] dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/20 text-[#625750] dark:text-[#C6C3B9] focus:outline-none focus:ring-[#F9C015] focus:border-[#F9C015]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-left mb-2 text-sm font-medium text-[#625750] dark:text-[#C6C3B9]"
                  >
                    Seu Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full p-3 rounded-lg bg-[#FCFBF8] dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/20 text-[#625750] dark:text-[#C6C3B9] focus:outline-none focus:ring-[#F9C015] focus:border-[#F9C015]"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-left mb-2 text-sm font-medium text-[#625750] dark:text-[#C6C3B9]"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full p-3 rounded-lg bg-[#FCFBF8] dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/20 text-[#625750] dark:text-[#C6C3B9] focus:outline-none focus:ring-[#F9C015] focus:border-[#F9C015]"
                ></textarea>
              </div>
              <div className="mt-8 text-left">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#F9C015] text-black font-bold rounded-lg hover:bg-[#F9C015]/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:-translate-y-0"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </button>
              </div>
              {submitMessage && (
                <p
                  className={`mt-4 text-left text-sm ${
                    submitMessage.includes('sucesso')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>

            <div className="lg:col-span-2 lg:pl-8">
              <div className="space-y-6 text-[#625750] dark:text-[#C6C3B9]">
                <div className="flex items-center gap-4">
                  <FiMail size={24} className="text-[#F9C015]" />
                  <a
                    href="mailto:jotalucasfarias@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="email"
                    className="transition-colors duration-300 hover:text-[#F9C015]"
                  >
                    jotalucasfarias@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FiPhone size={24} className="text-[#F9C015]" />
                  <a
                    href="tel:+556993133189"
                    target="_blank"
                    aria-label="phone"
                    className="transition-colors duration-300 hover:text-[#F9C015]"
                  >
                    (69) 99313-3189
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FiMapPin size={24} className="text-[#F9C015]" />
                  <span>Rondônia, Brasil</span>
                </div>
              </div>

              <div className="flex justify-start gap-4 mt-8">
                <a
                  href="https://github.com/jotalucasfarias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-[#625750] dark:text-[#C6C3B9] border border-gray-400 dark:border-white/20 rounded-full transition-all duration-300 hover:text-[#F9C015] hover:border-[#F9C015] hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jottalucasfarias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-[#625750] dark:text-[#C6C3B9] border border-gray-400 dark:border-white/20 rounded-full transition-all duration-300 hover:text-[#F9C015] hover:border-[#F9C015] hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
