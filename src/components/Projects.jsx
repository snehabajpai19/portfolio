import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "PeerLance – Campus Freelance Task App",
      description:
        "A full-stack freelancing platform where college students can post and take up campus-based tasks like printing, presentations, and notebook writing. Built with React, Node.js, Express, and MongoDB.",
      imageUrl: "/peerlance-demo.png",
      link: "https://github.com/Shivam-Gupta-Github/peerlance",
    },
    {
      title: "Inter-Code – Real-Time Code Collaboration",
      description:
        "A real-time collaborative code editor for technical interviews and mock sessions. Built with React.js, Node.js, Express, and Socket.io for live code syncing between users.",
      imageUrl: "/inter-code-demo.png",
      link: "https://github.com/Shivam-Gupta-Github/inter-code",
    },
    {
      title: "Contest Kitty – Coding Contest Discord Bot",
      description:
        "A Discord bot that fetches upcoming contests from Codeforces and LeetCode. Includes contest comparison among users and custom commands using Discord.js and REST APIs.",
      imageUrl: "/contest-kitty-demo.png",
      link: "https://github.com/Shivam-Gupta-Github/contest-kitty",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Take a look at my latest projects with creative ideas.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
