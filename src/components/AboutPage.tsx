import React from "react";
import SkillsGrid from "./SkillsGrid.tsx";
import LearningSection from "./LearningSection.tsx";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-gray-800">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full watermelon-gradient p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <img
              src="https://github.com/WatermelonFrogy/watermelonfrogy.github.io/blob/main/images/watermelonfrogy_pfp.png?raw=true"
              alt="WatermelonFrogy Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6">
          Hello, I'm WatermelonFrogy!
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Welcome to my little website! I'm a curious creator who loves building
          things, experimenting with random ideas, and turning high quality metal
          into unusable scrap! When I'm not working on a project I'll likely never
          finish, I'm usually either practicing in the forge or daydreaming about
          different kinds of coffee.
        </p>
      </div>

      {/* Fun Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-watermelon-200">
          <div className="w-16 h-16 mx-auto mb-4 watermelon-gradient rounded-full flex items-center justify-center">
            <i className="ri-cup-line text-2xl text-white"></i>
          </div>
          <h3 className="text-3xl font-bold mb-2">22,215</h3>
          <p className="text-gray-600">Cups of Coffee Consumed</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-mint-200">
          <div className="w-16 h-16 mx-auto mb-4 mint-gradient rounded-full flex items-center justify-center">
            <i className="ri-lightbulb-line text-2xl text-white"></i>
          </div>
          <h3 className="text-3xl font-bold mb-2">30+</h3>
          <p className="text-gray-600">Creative but bad ideas daily</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-watermelon-200">
          <div className="w-16 h-16 mx-auto mb-4 watermelon-gradient rounded-full flex items-center justify-center">
            <i className="ri-folder-open-line text-2xl text-white"></i>
          </div>
          <h3 className="text-3xl font-bold mb-2">100+</h3>
          <p className="text-gray-600">Projects started but never completed</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Current Skills</h2>
        <SkillsGrid />
      </div>

      {/* Learning */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Currently Learning</h2>
        <LearningSection />
      </div>
    </div>
  );
};

export default AboutPage;
