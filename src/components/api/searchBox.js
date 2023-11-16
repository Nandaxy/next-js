import { useState, useEffect, useRef } from "react";

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleSearchClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuSearch = () => {
    setIsOpen(false);
  };


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement logic untuk melakukan pencarian
    console.log("Melakukan pencarian...");
  };

  const handleKeyDown = (e) => {
    // Membuka modal saat tombol Ctrl + K ditekan
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault(); // Mencegah perilaku bawaan browser
      e.stopPropagation(); // Menghentikan propagasi event
      setIsOpen(true);
    }

    // Menutup modal saat tombol Esc ditekan
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (e) => {
    // Menutup modal saat klik di luar modal dan text input
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target) &&
      e.target.tagName !== "INPUT"
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Menambahkan event listener pada window untuk mendengarkan event keyboard
    window.addEventListener("keydown", handleKeyDown);
    // Menambahkan event listener pada window untuk mendengarkan event klik di luar modal
    window.addEventListener("click", handleClickOutside);

    // Membersihkan event listener setelah komponen di-unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="relative inline-block">
        <div className="hidden md:block">
          <div 
            onClick={handleSearchClick}
            className="border-blue-50 dark:border-gray-900 border-2 flex justify-between w-80 p-2 rounded-md cursor-pointer"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="mr-2 fill-black/70 dark:fill-white/70"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <p className="text-black/70 dark:text-white/70 text-sm">
                Search....
              </p>
            </div>
            <div>
              <p className="text-black/70 dark:text-white/70 text-sm">Ctrl K</p>
            </div>
          </div>
        </div>
        {isOpen && (
          <div  onClick={closeMenuSearch} className="fixed inset-0 bg-gray-900 justify-center flex  backdrop-blur-md">
            <div className="z-[99999] flex mt-10 md:mt-36 px-4 py-6 items-center justify-between dark:bg-dark bg-white h-8 rounded-lg max-w-full">
              <div className="items-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="mr-2 fill-black/70 dark:fill-white/70"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
                <input
                  type="text"
                  placeholder="Find or ask anything..."
                  className="w-96 h-8 focus:outline-none text-sm mx-2 dark:bg-dark bg-white py-6"
                />
              </div>
              <div>
                <p>esc</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="md:hidden absolute right-12 top-1/3">
        <button onClick={handleSearchClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="mr-2 fill-black/70 dark:fill-white/70"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SearchBox;
