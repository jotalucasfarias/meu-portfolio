import { FiArrowDown } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
interface ScrollButtonDownProps {
  nextSection: string;
}

export default function ScrollButtonDown({
  nextSection,
}: ScrollButtonDownProps) {
  return (
    <ScrollLink
      to={nextSection}
      smooth={true}
      offset={-80}
      duration={500}
      className="flex justify-center items-center item mt-10 animate-bounce text-yellow-400 border-1
      border-gray-400
      dark:border-yellow-400 rounded-full w-10 h-10 mx-auto hover:bg-yellow-400/20 transition-all duration-300 cursor-pointer"
    >
      <FiArrowDown size={24} />
    </ScrollLink>
  );
}
