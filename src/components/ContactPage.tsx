import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-gray-800">
      {/* Intro */}
      <div className="text-center mb-16">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full watermelon-gradient p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <img
              src="https://github.com/WatermelonFrogy/watermelonfrogy.github.io/blob/main/images/watermelonfrogy_pfp.png?raw=true"
              alt="Contact"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6">Let's Connect!</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I'm always excited to meet new people and discuss creative projects.
          Whether you have a question, a collaboration idea, or just want to say hi,
          I'd love to hear from you!
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-watermelon-100">
          <div className="w-16 h-16 mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full flex items-center justify-center">
            <i className="ri-discord-line text-2xl text-white"></i>
          </div>
          <h3 className="text-xl font-semibold mb-3">Discord</h3>
          <p className="text-gray-600 mb-4">
            Perfect for quick questions and casual conversations
          </p>
          <a
            href="https://discord.com/users/watermelonfroggy"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            @watermelonfroggy
          </a>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-mint-100">
          <div className="w-16 h-16 mb-6 bg-gradient-to-r from-red-400 to-pink-600 rounded-full flex items-center justify-center">
            <i className="ri-mail-line text-2xl text-white"></i>
          </div>
          <h3 className="text-xl font-semibold mb-3">Email</h3>
          <p className="text-gray-600 mb-4">
            Best for formal project proposals and detailed discussions
          </p>
          <a
            href="mailto:watermelonfrogy@gmail.com"
            className="text-red-600 hover:text-red-700 font-medium"
          >
            watermelonfrogy@gmail.com
          </a>
        </div>
      </div>

      {/* Online Presence */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Find Me Online</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "GitHub",
              href: "https://github.com/watermelonfrogy",
              icon: "ri-github-fill",
              color: "bg-gray-800 hover:bg-gray-700",
            },
            {
              name: "Bluesky",
              href: "https://bsky.app/profile/bluesky.watermelonfrogy.win",
              icon: "ri-bluesky-line",
              color: "bg-blue-500 hover:bg-blue-600",
            },
            {
              name: "YouTube - Main",
              href: "https://www.youtube.com/@watermelonfrogy",
              icon: "ri-youtube-line",
              color: "bg-red-500 hover:bg-red-600",
            },
            {
              name: "YouTube - Forge",
              href: "https://www.youtube.com/@learningthehardway-forge",
              icon: "ri-youtube-line",
              color: "bg-red-500 hover:bg-red-600",
            },
            {
              name: "Twitch",
              href: "https://www.twitch.tv/watermelonfrogy",
              icon: "ri-twitch-line",
              color: "bg-purple-700 hover:bg-purple-800",
            },
          ].map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center group"
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 ${platform.color} rounded-lg flex items-center justify-center transition-colors`}
              >
                <i className={`${platform.icon} text-white text-xl`}></i>
              </div>
              <span className="text-sm font-medium text-gray-700">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Tips */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-watermelon-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
              <i className="ri-chat-3-line text-white text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Quick Questions</h3>
            <p className="text-gray-600 text-sm">
              Discord is perfect for quick chats and immediate responses
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-red-400 to-pink-600 rounded-full flex items-center justify-center">
              <i className="ri-briefcase-line text-white text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Project Proposals</h3>
            <p className="text-gray-600 text-sm">
              Email works best for detailed discussions and formal inquiries
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-green-400 to-teal-600 rounded-full flex items-center justify-center">
              <i className="ri-information-line text-white text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Include Details</h3>
            <p className="text-gray-600 text-sm">
              Please include details, timeline, and budget in your message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
