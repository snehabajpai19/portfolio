import { GraduationCap, School } from "lucide-react";
import InfoCard from "./InfoCard";

const Education = () => {
  const items = [
    {
      icon: <GraduationCap className="text-indigo-500" size={32} strokeWidth={2} />,
      title: "B.Tech, Computer Science (2022–2026)",
      description: "Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh • CGPA: 9.2",
    },
    {
      icon: <School className="text-pink-500" size={32} strokeWidth={2} />,
      title: "Intermediate (PCM) – 2022",
      description: "Percentage: 96.2% — Sheiling House School, Kanpur",
    },
    {
      icon: <School className="text-emerald-500" size={32} strokeWidth={2} />,
      title: "High School – 2020",
      description: "Percentage: 95.6% — Sheiling House School, Kanpur",
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-[#F3F0FF]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Education</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((it) => (
            <InfoCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

