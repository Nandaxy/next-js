import React, { useState, useEffect, useRef } from "react";
import { searchPages } from "./searchService";
import Link from "next/link";

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(null); // Track the selected result
  const inputRef = useRef(null);
  const firstResultRef = useRef(null);
  const handleSearchClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    setSelectedResultIndex(null); // Reset selected result when input changes
  };


  const handleSearch = () => {
    const results = searchPages(searchText);
    setSearchResults(results);
    setSelectedResultIndex(0); // Set the first result as selected
  };


  const handleOutsideClick = (event) => {
    if (
      isOpen &&
      !event.target.closest(".modal-container") &&
      !event.target.closest('input[type="text"]')
    ) {
      handleCloseModal();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (selectedResultIndex !== null && searchResults[selectedResultIndex]) {
        window.location.href = searchResults[selectedResultIndex].link;
      }
    }
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      handleSearchClick();
    } else if (event.key === "Escape") {
      event.preventDefault();
      handleCloseModal();
    }
  };

  useEffect(() => {
    // Set focus on the input when the modal is opened
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    // Set focus on the first result when results are available
    if (searchResults.length > 0 && firstResultRef.current) {
      firstResultRef.current.focus();
    }
  }, [isOpen, searchResults]);

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (searchText.trim() !== "") {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchText]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    handleSearch();
  }, [searchText]);

  
  return (
    <>
      <div className="relative inline-block">
        <div className="hidden md:block">
          <div
            onClick={handleSearchClick}
            className="border-blue-50 dark:border-gray-900 border-2 flex justify-between w-96 p-2 rounded-md cursor-pointer"
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
              <p className="text-black/70 dark:text-white/70 text-sm cursor-pointer">
                Ctrl K
              </p>
            </div>
          </div>
        </div>
         {isOpen && (
        <div className="fixed inset-0 bg-black/95 justify-center flex">
          <div className="flex flex-col">
              <div
                className={`z-[99999] flex mt-10 md:mt-36 px-4 py-6 items-center ${
                  isOpen ? "dark:bg-dark bg-white" : ""
                } h-8 ${
                  searchText.trim() !== "" ? "rounded-t-lg" : "rounded-lg"
                } max-w-full modal-container`}
              >
                <div className="items-center flex">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Find or ask anything..."
                    className="w-80 md:w-96 h-8 focus:outline-none text-sm mx-2 dark:bg-dark bg-white py-6"
                    value={searchText}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <button
                    onClick={handleCloseModal}
                    className="cursor-pointer text-red-600"
                  >
                    esc
                  </button>
                </div>
              </div>
              {searchText.trim() !== "" && (
                <div className="bg-white dark:bg-dark max-h-full p-4 rounded-b-lg">
                  {searchResults.map((page, index) => (
                    <div key={index}>
                      <Link
                        className="bg-gray-100 dark:bg-[#000000]/70 p-2 rounded-lg flex items-center my-3 hover:bg-cyan-400"
                        href={page.link}
                        onClick={handleCloseModal}
                      >
                        <span className="mr-2 border-2 border-gray-200 dark:border-[#000000]/70 p-2 rounded-lg text-black/80 dark:text-white/60">
                          #
                        </span>
                        <div className="flex flex-col">
                          <span className="font-medium pb-1">{page.title}</span>
                          <span className="text-xs text-gray-500">{page.description}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                  {searchResults.length === 0 && <p>No results found.</p>}
                </div>
              )}
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

export default SearchBox