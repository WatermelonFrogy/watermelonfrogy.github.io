import React, { useEffect, useState } from "react";

interface LearningItem {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  theme: "mint" | "watermelon";
  xp: number;
  maxXp: number;
  level: number;
}

const LearningSection: React.FC = () => {
  const [learning, setLearning] = useState<LearningItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("skills.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load skills.json");
        return res.json();
      })
      .then((data) => {
        if (data.learning) setLearning(data.learning);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load learning data.");
      });
  }, []);

  if (error)
    return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="space-y-6">
      {learning.map((item) => {
        const progress = ((item.xp / item.maxXp) * 100).toFixed(2);
        const barClass =
          item.theme === "mint" ? "mint-gradient" : "progress-bar";

        return (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-6 shadow-lg border border-watermelon-100"
          >
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center`}
                >
                  {item.icon.startsWith("http") ? (
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <i className={`${item.icon} text-white text-xl`} />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`text-2xl font-bold text-${item.theme}-600`}
                >
                  Level {item.level}
                </span>
                <p className="text-sm mt-1">
                  <span className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-xl whitespace-nowrap">
                    {item.xp} / {item.maxXp} XP
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`${barClass} h-3 rounded-full`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LearningSection;