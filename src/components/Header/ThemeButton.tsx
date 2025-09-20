import { FiMoon, FiSun } from 'react-icons/fi';
import useDarkMode from '../../hooks/useDarkMode';

export default function ThemeButton() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-3 rounded transition-colors duration-300 border border-gray-500/15 hover:bg-yellow-500/25 hover:text-black dark:border-gray-500/20"
    >
      {isDark ? (
        <FiSun size={20} color="#F9C015" />
      ) : (
        <FiMoon size={20} color="#F9C015" />
      )}
    </button>
  );
}
