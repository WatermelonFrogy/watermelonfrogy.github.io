import React, { useEffect, useState } from "react";
import tagColors from "../data/tagColors.ts";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  timeline: string;
  role: string;
  link?: string;
  source?: string;
  featured?: boolean;
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load projects.json");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load projects.");
      });
  }, []);

  if (error)
    return <p className="text-red-500 text-center">{error}</p>;

  if (!projects.length)
    return <p className="text-gray-500 text-center">Loading projects...</p>;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">My Projects</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects I've actually managed to finish!
          Each one taught me something new and pushed my skills further.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => {
          const tagElements = project.tags.map((tag) => {
            const colorClass =
              tagColors[tag] || "bg-gray-100 text-gray-800";
            return (
              <span
                key={tag}
                className={`${colorClass} px-3 py-1 rounded-full text-sm font-medium`}
              >
                {tag}
              </span>
            );
          });

          const featuresList = project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ));

          return (
            <div
              key={project.title}
              className={`${
                project.featured
                  ? "lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-watermelon-100"
                  : "bg-white rounded-2xl shadow-lg overflow-hidden border border-watermelon-100"
              }`}
            >
              <div className="relative h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-watermelon-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tagElements}
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Key Features
                    </h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {featuresList}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Timeline
                    </h4>
                    <p className="text-gray-600 text-sm">{project.timeline}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Role: {project.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="bg-watermelon-500 hover:bg-watermelon-600 text-white px-6 py-3 rounded-button font-medium transition-colors whitespace-nowrap"
                    >
                      <i className="ri-external-link-line mr-2"></i>
                      Check it out!
                    </a>
                  )}
                  {project.source ? (
                    <a
                      href={project.source}
                      target="_blank"
                      className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-button font-medium transition-colors whitespace-nowrap"
                    >
                      <i className="ri-github-line mr-2"></i>
                      Source Code
                    </a>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-300 text-gray-500 px-6 py-3 rounded-button font-medium whitespace-nowrap cursor-not-allowed"
                    >
                      <i className="ri-github-line mr-2"></i>
                      Source Code Unavailable
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Collaboration Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-watermelon-100 text-center mt-12">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-watermelon-400 to-watermelon-600 rounded-full flex items-center justify-center">
          <i className="ri-lightbulb-line text-3xl text-white"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Have an Idea?
        </h3>
        <p className="text-gray-600 mb-6">
          I love collaborating on creative projects! If you have an
          interesting idea, let's chat about it.
        </p>
        <a
          href="#contact"
          className="bg-watermelon-500 hover:bg-watermelon-600 text-white px-6 py-3 rounded-button font-medium transition-colors whitespace-nowrap"
        >
          Let's Connect
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
