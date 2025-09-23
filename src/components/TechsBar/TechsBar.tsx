import { cn } from '@/lib/utils';
import {
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { Marquee } from '../ui/marquee';

const technologies = [
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'Figma', icon: <SiFigma /> },
];

const firstRow = technologies.slice(0, technologies.length);

const TechCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  return (
    <figure
      className={cn(
        'relative flex flex-col h-full w-48 cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-xl border p-4',
        // styles
        'bg-white dark:bg-[#0f0f0f85] border-gray-400 dark:border-white/20',
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_40px_5px_rgba(234,179,8,0.2)] dark:hover:border-yellow-500/40',
      )}
    >
      <div className="text-3xl text-text-dark dark:text-white">{icon}</div>
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium text-text-dark dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export default function TechsBar() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <div className=" pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-black transition-colors duration-500"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-black transition-colors duration-500"></div>
      </div>
    </section>
  );
}
