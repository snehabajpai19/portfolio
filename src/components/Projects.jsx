import ProjectCard from "./ProjectCard";
import { projectRepos } from "../data/links";

const Projects = () => {
  // Images stored in /public
  const imageMap = {
    "Ecommerce Management App": "/EcommerceApp.png",
    "AI Agent using Ollama-Based RAG": "/Document%20Analyzer%20Chatbot.png",
    "Banking Application using DAO (Java)": "/BankApp.png",
    "Employee Management System (Servlets)": "/Employee%20Management%20System.png",
  };

  const projects = [
    {
      title: "Ecommerce Management App",
      description:
        "Production‑style store built with Flask where admins, vendors and couriers work from separate dashboards. Orders, inventory and fulfillment are backed by a well‑designed MariaDB schema with clean APIs and a responsive UI.",
    },
    {
      title: "AI Agent using Ollama-Based RAG",
      description:
        "Document‑aware assistant that ingests PDFs/images, embeds them in ChromaDB and answers questions using a local LLaMA model via Ollama. A custom retrieval chain with prompt guards delivers concise, cited responses.",
    },
    {
      title: "Banking Application using DAO (Java)",
      description:
        "Java + JDBC project that models real banking flows: account lifecycle, deposits, withdrawals and transfers with validation and transactional safety. The DAO layer isolates Oracle queries for clean, testable business logic.",
    },
    {
      title: "Employee Management System (Servlets)",
      description:
        "Classic Java Servlets application for managing employees and departments with auth, pagination and search. Server‑rendered views talk to JDBC endpoints for reliable CRUD and clear separation between controller and data layers.",
    },
  ].map((p) => ({
    ...p,
    imageUrl:
      imageMap[p.title] ??
      "https://placehold.co/600x400/f3f0ff/111111?text=Project+Image",
    link: projectRepos[p.title] ?? "#",
  }));

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Projects I've built recently.
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
