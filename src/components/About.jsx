import ExperienceItem from "./ExperienceItem";
import { social } from "../data/links";

const About = () => {
  const experiences = [
    {
      date: "Jan 2025 – Dec 2025",
      title: "Full‑Stack Developer — Internship",
      company: "IIT Kanpur (Prof. B.M. Shukla, HOD CSE)",
      description:
        "Built and deployed a full‑featured e‑commerce dashboard with 20+ SQL tables, integrating frontend and backend modules for seamless data flow.",
    },
    {
      date: "Dec 2024 – Mar 2025",
      title: "AI/ML Developer — Internship",
      company: "IIT Kanpur (Prof. Nawpreet Singh)",
      description:
        "Designed a scalable RAG chatbot with document upload and dynamic querying using Ollama & LangChain.",
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
              I love building practical systems: full‑stack apps, RAG agents,
              and data‑driven dashboards. I'm seeking roles where I can learn,
              contribute, and ship impactful software.
            </p>
            <a
              href={social.resume || social.linkedin || social.github || "#"}
              target={social.resume || social.linkedin || social.github ? "_blank" : undefined}
              rel={social.resume || social.linkedin || social.github ? "noopener noreferrer" : undefined}
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
