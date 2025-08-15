import ExperienceItem from "./ExperienceItem";

const About = () => {
  const experiences = [
    {
      date: "2025-Present",
      title: "Full-Stack Developer",
      company: "PeerLance (Campus Freelance App)",
      description:
        "Created a MERN stack web app where students can post and complete campus-based freelance tasks. Integrated features like task creation, assignment flow, and user authentication.",
    },
    {
      date: "2024",
      title: "React Developer",
      company: "Inter-Code (Real-Time Code Editor)",
      description:
        "Developed a real-time collaborative code editor using React, Node.js, Express, and Socket.io. Designed for mock interviews and team coding sessions.",
    },
    {
      date: "2023",
      title: "Open Source Developer",
      company: "Contest Kitty (Discord Bot)",
      description:
        "Built a feature-rich Discord bot using Python and Discord.js to track competitive programming contests and user performance on platforms like LeetCode and Codeforces.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F3F0FF]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My experiences
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I've built real-time apps, bots, and full-stack platforms during
              my learning journey. I'm actively looking for a full-time role in
              a product-based company where I can grow and contribute.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              More About Me
            </a>
          </div>
          <div>
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={exp.title}
                {...exp}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
