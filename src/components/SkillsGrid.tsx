import React, { useEffect, useState } from "react";

interface Skill {
  name: string;
  icon: string;
  gradient: string;
  border: string;
}

const SkillsGrid: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load skills.json");
        return res.json();
      })
      .then((data) => {
        if (data.skills) setSkills(data.skills);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load skills.");
      });
  }, []);

  if (error)
    return (
      <p className="text-red-500 text-center col-span-full">{error}</p>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`bg-white rounded-xl p-4 shadow-md border border-${skill.border} text-center`}
        >
          <div
            className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${skill.gradient} rounded-lg flex items-center justify-center`}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-sm font-medium text-gray-700">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
