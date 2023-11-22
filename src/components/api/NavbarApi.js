"use client";

import React, { useState } from "react";
import Link from "next/link";
import DarkModeBtn from "../darkModeBtn";
import SearchBox from "./searchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faHouse,
  faCaretDown,
  faCamera,
  faDice,
} from "@fortawesome/free-solid-svg-icons";


const NavbarApi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

    // State to track the dropdown status
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown
    const getdrop = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
  return (
    <>
      <div className="fixed top-0 left-0 w-full opacity-90 z-10">
        <nav className="bg-white dark:bg-black p-4 flex justify-between items-center border-b dark:border-gray-800">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="dark:text-white focus:outline-none md:hidden mr-2 px-1"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl m-auto" />
            </button>
            <Link href="/api" className="text-xl font-bold md:block">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#da00ff] to-[#8000ff] block text-2xl">
                Nanda
              </span>
            </Link>
          </div>
          <div>
            <SearchBox />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://github.com/Nandaxy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-primary font-semibold"
            >
              GitHub
              <svg
                width="13.5"
                height="13.5"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="my-auto mx-1"
              >
                <path
                  fill="currentColor"
                  d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                ></path>
              </svg>
            </Link>
            <div>
              <DarkModeBtn />
            </div>
          </div>
          <div className="block md:hidden">
            <DarkModeBtn />
          </div>
        </nav>
      </div>
      {/* navbar mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-20"
          onClick={closeMenu}
        ></div>
      )}
      <div
        className={`${
          isOpen ? "left-0" : "-left-full"
        } fixed top-0 h-full bg-white o dark:bg-dark p-6 w-80 transition-all z-[9999] border-r`}
      >
        <button
          onClick={toggleMenu}
          className="p-1 focus:outline-none absolute top-4 right-4"
        >
          <FontAwesomeIcon
            icon={faX}
            style={{ color: "#ff000d" }}
            className="text-2xl"
          />
        </button>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-purple-600">Nanda</span>
        </div>
        <hr></hr>
        <div className="pt-4">
          <p className={`font-bold hover:bg-gray-200 rounded-md p-2 cursor-pointer ${
              isDropdownOpen ? "bg-gray-50" : ""
            }`} onClick={getdrop}>
            <FontAwesomeIcon icon={faHouse} className="mr-2" />
            Get Started <FontAwesomeIcon
            icon={faCaretDown}
            className={`ml-2 transition-transform ${
              isDropdownOpen ? "transform rotate-180" : ""
            }`}
          />
          </p>
          {isDropdownOpen && (
          <div className="pl-6 ">
            <div className="bg-gray-50 p-2 rounded-b-lg">
              {/* Dropdown items */}
              <Link href="/api/mulai" onClick={closeMenu}>
                <div className="mb-2 pl-2 py-2 hover:bg-gray-200">
                  <span>Get Started</span>
                </div>
              </Link>
              <Link href="/api/quickstart" onClick={closeMenu}>
                <div className="mb-2 pl-2 py-2 hover:bg-gray-200">
                  <span>Quickstart</span>
                </div>
              </Link>
            </div>
          </div>
        )}
        </div>
        <div className="pt-4">
          <p className="font-bold hover:bg-gray-200 rounded-md p-2">
            <FontAwesomeIcon icon={faCamera} className="mr-2" />
            Random Image <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
          </p>
          {isDropdownOpen && (
          <div className="pl-6 ">
            <div className="bg-gray-50 p-2 rounded-md">
              {/* Dropdown items */}
              <Link href="/api/mulai" onClick={closeMenu}>
                <div className="mb-2 pl-2 py-2 hover:bg-gray-200">
                  <span>Get Started</span>
                </div>
              </Link>
              <Link href="/api/quickstart" onClick={closeMenu}>
                <div className="mb-2 pl-2 py-2 hover:bg-gray-200">
                  <span>Quickstart</span>
                </div>
              </Link>
            </div>
          </div>
        )}
        </div>
        {/* fun menu */}
        <div className="pt-4">
          <p className={`font-bold hover:bg-gray-200 rounded-md p-2 cursor-pointer ${
              isDropdownOpen ? "bg-gray-50" : ""
            }`} onClick={getdrop}>
            <FontAwesomeIcon icon={faDice} className="mr-2" />
            Fun <FontAwesomeIcon
            icon={faCaretDown}
            className={`ml-2 transition-transform ${
              isDropdownOpen ? "transform rotate-180" : ""
            }`}
          />
          </p>
          {isDropdownOpen && (
          <div className="pl-6 ">
            <div className="bg-gray-50 p-2 rounded-b-lg">
              {/* Dropdown items */}
              <Link href="/api/mulai" onClick={closeMenu}>
                <div className="mb-2 pl-2 py-2 hover:bg-gray-200">
                  <span>Get Started</span>
                </div>
              </Link>
              <Link href="/api/quickstart" onClick={closeMenu}>
                <div className="mb-2 pl-2 py-2 hover:bg-gray-200">
                  <span>Quickstart</span>
                </div>
              </Link>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default NavbarApi;
