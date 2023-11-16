"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeBtn from "../darkModeBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full opacity-95 z-1000">
      <nav className="bg-white dark:bg-black p-4 flex justify-between items-center border-b dark:border-gray-800">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="dark:text-white focus:outline-none md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Link href="/" className="text-xl font-bold md:block">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#da00ff] to-[#8000ff] block text-2xl">
              Nanda
            </span>
          </Link>

          <div className="hidden md:block px-4">
            <Link className="mx-2 hover:text-primary" href="/docs">
              Dokumentasi
            </Link>
            <Link className="mx-2 hover:text-primary" href="/blog">
              Artikel
            </Link>
            <Link className="mx-2 hover:text-primary" href="/api">
              Api
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {pathname === "/" && (
            <>
              <Link href="#" className="hover:text-primary font-semibold">
                Home
              </Link>
              <Link href="#about" className="hover:text-primary font-semibold">
                About
              </Link>
              <Link
                href="#contact"
                className="hover:text-primary font-semibold"
              >
                Contact
              </Link>
              <Link
                href="#project"
                className="hover:text-primary font-semibold"
              >
                Project
              </Link>
            </>
          )}
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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-20"
          onClick={closeMenu}
        ></div>
      )}
      <div
        className={`${
          isOpen ? "left-0" : "-left-full"
        } fixed top-0 h-full bg-white dark:bg-black p-4 w-64 transition-all z-30 border-r`}
      >
        <button
          onClick={toggleMenu}
          className="p-1 focus:outline-none absolute top-4 right-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center space-x-2 mb-4 border-b">
          <span className="text-xl font-bold text-purple-600">Nanda</span>
        </div>
        {pathname === "/" && (
          <>
            <Link
              href="#"
              className="block text-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-500 p-2 rounded"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block text-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-500 p-2 rounded"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-500 p-2 rounded"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </>
        )}
        <Link
          href="/docs"
          className="block text-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-500 p-2 rounded"
          onClick={closeMenu}
        >
          Dokumentasi
        </Link>
        <Link
          href="/blog"
          className="block text-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-500 p-2 rounded"
          onClick={closeMenu}
        >
          Artikel
        </Link>
        <Link
          href="/api"
          className="block text-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-500 p-2 rounded"
          onClick={closeMenu}
        >
          Api
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
