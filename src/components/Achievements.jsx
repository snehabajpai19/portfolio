import InfoCard from "./InfoCard";
import { Trophy, Award, Brain, BadgeCheck } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="text-yellow-500" size={32} strokeWidth={2} />,
    title: "Knight on LeetCode",
    description:
      "Achieved a LeetCode rating of 1960+ and solved 750+ problems.",
  },
  {
    icon: <Award className="text-blue-500" size={32} strokeWidth={2} />,
    title: "Global Rank 1454 - CodeVita",
    description:
      "Ranked 1454 out of 537,000+ participants in TCS CodeVita Season 12.",
  },
  {
    icon: <Brain className="text-purple-500" size={32} strokeWidth={2} />,
    title: "Machine Learning with Python",
    description:
      "Completed Coursera Specialization covering supervised and unsupervised ML using Python.",
  },
  {
    icon: <BadgeCheck className="text-green-500" size={32} strokeWidth={2} />,
    title: "Web Development Bootcamp",
    description:
      "Completed The Complete 2024 Web Development Bootcamp by Udemy, mastering HTML, CSS, JS, and Node.",
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
