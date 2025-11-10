import React from "react";

interface MobileMenuButtonProps {
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-4 left-4 bg-watermelon-500 text-white p-3 rounded-full shadow-lg z-20 md:hidden transition-opacity"
      aria-label="Open sidebar"
    >
      <i className="ri-menu-line text-2xl"></i>
    </button>
  );
};

export default MobileMenuButton;
