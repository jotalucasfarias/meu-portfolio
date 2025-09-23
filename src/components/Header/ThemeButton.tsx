import { FiMoon, FiSun } from 'react-icons/fi';
import useDarkMode from '../../hooks/useDarkMode';

export default function ThemeButton() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded transition-colors duration-300 border border-gray-300 hover:bg-yellow-500/25 hover:text-black dark:border-white/20"
    >
      {isDark ? (
        <FiSun size={20} color="#F9C015" />
      ) : (
        <FiMoon size={20} color="#F9C015" />
      )}
    </button>
  );
}
