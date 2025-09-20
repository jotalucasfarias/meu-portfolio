import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  // Inicializa o tema com base no localStorage ou na preferência do sistema
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      // Usa o tema salvo pelo usuário
      setIsDark(storedTheme === 'dark');
    } else {
      // Usa o tema do sistema
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Atualiza o data-theme e salva no localStorage quando mudar
  useEffect(() => {
    if (isDark === null) return; // ainda não inicializou
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light',
    );
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Ouvindo mudanças do sistema (só se não houver escolha manual)
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return; // ignora se o usuário já escolheu

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) =>
      setIsDark(event.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return { isDark, toggleDarkMode };
}
