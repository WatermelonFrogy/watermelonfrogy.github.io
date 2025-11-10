import React, { useEffect, useState } from "react";

interface Photo {
  name: string;
  download_url: string;
}

const PhotosPage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<{
    url: string;
    title: string;
    desc: string;
  } | null>(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/WatermelonFrogy/watermelonfrogy.github.io/contents/images/photos"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load photos.");
        return res.json();
      })
      .then((data) => {
        const imageFiles = data.filter((f: Photo) =>
          /\.(png|jpe?g|gif|webp)$/i.test(f.name)
        );
        setPhotos(imageFiles);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load photos.");
      });
  }, []);

  const openModal = (url: string, title: string, desc: string) => {
    setSelected({ url, title, desc });
    setModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  if (error)
    return <p className="text-red-500 text-center">{error}</p>;

  if (!photos.length)
    return (
      <p className="text-gray-500 text-center">Loading photos...</p>
    );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Photo Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of screenshots, builds, and random creative moments
          captured over time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((file) => {
          const [title, descWithExt] = file.name.split("+");
          const desc = descWithExt
            ? descWithExt.replace(/\.[^/.]+$/, "")
            : "";
          const imageUrl = file.download_url;

          return (
            <div
              key={file.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-watermelon-100 group relative cursor-pointer"
              onClick={() => openModal(imageUrl, title, desc)}
            >
              <img
                src={imageUrl}
                alt={title}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-watermelon-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-white/90">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {modalOpen && selected && (
        <div
          className="fixed inset-0 bg-black/70 z-50 p-6 md:p-10 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full transform scale-100 opacity-100 transition-all duration-300 flex flex-col items-center overflow-hidden justify-center mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-watermelon-500 hover:bg-watermelon-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-20"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <div className="relative flex justify-center items-center w-full bg-gray-100">
              <img
                src={selected.url}
                alt={selected.title}
                className="max-h-[80vh] w-auto object-contain transition-transform duration-300 rounded-2xl shadow-md mx-auto"
              />
            </div>
            <div className="p-6 md:p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {selected.title}
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                {selected.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosPage;
