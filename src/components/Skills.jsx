import InfoCard from "./InfoCard";
import { Code2, Layout, Server, Database } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Code2 className="text-green-500" size={32} strokeWidth={2} />,
      title: "Competitive Programming",
      description:
        "Solved 750+ problems on LeetCode and CodeChef. Strong grasp of data structures and algorithms with a Knight rating (1960+) on LeetCode.",
    },
    {
      icon: <Layout className="text-purple-500" size={32} strokeWidth={2} />,
      title: "Frontend Development",
      description:
        "Experienced with React, HTML, CSS, Tailwind, and responsive UI design. Focused on building fast, accessible, and clean user interfaces.",
    },
    {
      icon: <Server className="text-blue-500" size={32} strokeWidth={2} />,
      title: "Backend Development",
      description:
        "Skilled in Node.js and Express.js. Built REST APIs, handled authentication, and implemented real-time features using Socket.io.",
    },
    {
      icon: <Database className="text-yellow-500" size={32} strokeWidth={2} />,
      title: "Databases",
      description:
        "Worked with MongoDB and SQL for building scalable, efficient, and secure data layers in full-stack applications.",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills that power my development.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-10">
          {skills.map((skill) => (
            <InfoCard key={skill.title} {...skill} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="#projects"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
          >
            Check Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
