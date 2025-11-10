import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.tsx";
import MobileMenuButton from "./components/MobileMenuButton.tsx";
import AboutPage from "./components/AboutPage.tsx";
import ProjectsPage from "./components/ProjectsPage.tsx";
import PhotosPage from "./components/PhotosPage.tsx";
import ContactPage from "./components/ContactPage.tsx";

export type Page = "about" | "projects" | "photos" | "contact";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sync with URL hash
  useEffect(() => {
    const hash = window.location.hash.substring(1) as Page;
    if (["about", "projects", "photos", "contact"].includes(hash)) {
      setCurrentPage(hash);
    } else {
      setCurrentPage("about");
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1) as Page;
      if (["about", "projects", "photos", "contact"].includes(newHash)) {
        setCurrentPage(newHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-watermelon-50 to-mint-50 min-h-screen flex">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavClick}
      />

      <MobileMenuButton onClick={() => setSidebarOpen(true)} />

      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "blur-sm" : ""
        } md:ml-80`}
      >
        <div className="p-12">
          {currentPage === "about" && <AboutPage />}
          {currentPage === "projects" && <ProjectsPage />}
          {currentPage === "photos" && <PhotosPage />}
          {currentPage === "contact" && <ContactPage />}
        </div>
      </main>
    </div>
  );
};

export default App;
