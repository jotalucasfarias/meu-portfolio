import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const technologies = [
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Figma', icon: <SiFigma /> },
];

const TechsBar = () => {
  return (
    <section
      id="tecnologias"
      className="container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden">
        <ul className="flex flex-nowrap justify-center items-center gap-14 animate-infinite-scroll">
          {[...technologies, ...technologies, ...technologies].map((tech) => (
            <li
              key={tech.name}
              className="flex items-center justify-center p-4 rounded-lg transition-transform transform hover:scale-110"
              title={tech.name}
            >
              <div className="text-5xl text-gray-600 hover:text-gray-800">
                {tech.icon}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechsBar;
