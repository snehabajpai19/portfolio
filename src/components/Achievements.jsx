import InfoCard from "./InfoCard";
import { Trophy, Award, Brain, BadgeCheck } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="text-yellow-500" size={32} strokeWidth={2} />,
    title: "LeetCode Top 20% (1600+)",
    description:
      "Solved 200+ problems; consistent problem‑solving and DSA practice.",
  },
  {
    icon: <Award className="text-blue-500" size={32} strokeWidth={2} />,
    title: "AWS Cloud – Hands‑on",
    description:
      "Built with AWS services (deployment, storage, database) in projects.",
  },
  {
    icon: <Brain className="text-purple-500" size={32} strokeWidth={2} />,
    title: "Machine Learning with Python – freeCodeCamp",
    description:
      "Covered supervised/unsupervised learning and practical Python stacks.",
  },
  {
    icon: <BadgeCheck className="text-green-500" size={32} strokeWidth={2} />,
    title: "Certifications",
    description:
      "AWS Cloud Practitioner Essentials, Git & GitHub (Le Wagon), AI Agents (HuggingFace).",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-[#F3F0FF]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Achievements & Certifications
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-10">
          {achievements.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
