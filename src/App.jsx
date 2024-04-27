import { useState, useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    return savedBookmarks
      ? JSON.parse(savedBookmarks)
      : [
          {
            title: "Vercel.com",
            link: "https://vercel.com/bvedes-projects",
          },
          {
            title: "Github",
            link: "https://github.com",
          },
          {
            title: "Tailwind",
            link: "https://tailwindcss.com/docs/scroll-margin",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleUpdate = (title, link) => {
    setBookmarks([
      ...bookmarks,
      {
        title: title,
        link: link,
      },
    ]);
  };
  const handleDelete = (deletingBookmark) => {
    const newBookmark = bookmarks.filter(
      (bookmark) => bookmark !== deletingBookmark
    );
    setBookmarks(newBookmark);
  };
  return (
    <div className="h-screen p-4 container mx-auto">
      <div className="text-slate-950 text-4xl p-2">Bookmarks App</div>
      <div className="flex m-2">
        <button
          className="dark:bg-slate-800 text-white px-4 ml-auto rounded-md text-sm"
          onClick={toggleModal}
        >
          Add
        </button>
      </div>
      <div>
        {showModal && (
          <Modal toggleModal={toggleModal} handleUpdate={handleUpdate} />
        )}
      </div>
      <div className="mt-8">
        {bookmarks.map((bookmark, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-lg px-4 py-2 ring-slate-900/5 shadow-xl ml-2 mr-2 mt-2"
          >
            <div className="flex justify-between">
              <h3 className="text-slate-900 dark:text-white mt-2 text-base font-medium tracking-tight">
                {bookmark.title}
              </h3>
              <button
                className="text-white"
                onClick={() => handleDelete(bookmark)}
              >
                x
              </button>
            </div>

            <div className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <a href={bookmark.link} target="_blank">
                Visit link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
