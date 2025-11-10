import React from "react";
import type { Page } from "../App";

interface SidebarProps {
  open: boolean;
  currentPage: Page;
  onClose: () => void;
  onNavigate: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  currentPage,
  onClose,
  onNavigate,
}) => {
  const navItems: { page: Page; label: string; icon: string }[] = [
    { page: "about", label: "About", icon: "ri-user-line" },
    { page: "projects", label: "Projects", icon: "ri-folder-line" },
    { page: "photos", label: "Photos", icon: "ri-image-2-line" },
    { page: "contact", label: "Contact", icon: "ri-mail-line" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-full w-72 md:w-80 sidebar-gradient p-6 shadow-xl z-30 transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      {/* Mobile Header */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h1 className="text-xl font-pacifico text-white">WatermelonFrogy</h1>
        <button onClick={onClose} className="text-white text-2xl">
          <i className="ri-close-line"></i>
        </button>
      </div>

      {/* Profile Section */}
      <div className="text-center mb-12 hidden md:block">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
          <img
            src="https://github.com/WatermelonFrogy/watermelonfrogy.github.io/blob/main/images/watermelonfrogy_pfp.png?raw=true"
            alt="WatermelonFrogy Logo"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-pacifico text-white mb-2">
          WatermelonFrogy
        </h1>
        <p className="text-white/80 text-sm">Creative Developer & Dreamer</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-4">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={`flex items-center w-full space-x-4 p-4 rounded-xl transition-all duration-300 ${
              currentPage === item.page
                ? "bg-white/20 text-white"
                : "text-white/80 hover:bg-white/20"
            }`}
          >
            <i className={`${item.icon} text-lg`} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <div className="w-6 h-6 mx-auto items-center justify-center">
            <img
              src="https://github.com/WatermelonFrogy/watermelonfrogy.github.io/blob/main/images/frog.png?raw=true"
              alt="Fat Frog"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <p className="text-white/80 text-xs">
            Powered by Coffee, Creativity, and Autism
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
