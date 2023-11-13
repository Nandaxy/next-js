"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
    <div
      className="z-20 hidden lg:block fixed bottom-0 right-auto w-[18rem] pl-4 pr-6 pb-10 overflow-y-scroll stable-scrollbar-gutter top-[4rem]"
      id="sidebar"
    >
      <div className="p-6">
        <div className="mb-6">
          <h5 className="px-2 mb-3.5 lg:mb-2.5 font-semibold text-gray-900 dark:text-gray-200">
            Get Started
          </h5>
          <div className="flex flex-col">
            <Link
              className="mt-2 lg:mt-0 flex items-center py-2 px-4 rounded-lg focus:outline-primary dark:focus:outline-primary-light hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="/api/mulai"
            >
              <div className="flex-1 flex items-center space-x-2.5">
                <div className="text-sm">Introduction</div>
              </div>
            </Link>
            <Link
              className="mt-2 lg:mt-0 flex items-center py-2 px-4 rounded-lg focus:outline-primary dark:focus:outline-primary-light hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="/api/quickstart"
            >
              <div className="flex-1 flex items-center space-x-2.5">
                <div className="text-sm">Quickstart</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-6">
          <h5 className="px-2 mb-3.5 lg:mb-2.5 font-semibold text-gray-900 dark:text-gray-200">
            Test
          </h5>
          <div className="flex flex-col">
            <Link
              className="mt-2 lg:mt-0 flex items-center py-2 px-4 rounded-lg focus:outline-primary dark:focus:outline-primary-light hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="/api/test"
            >
              <div className="flex-1 flex items-center space-x-2.5">
                <div className="text-sm">Testing</div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <h5 className="px-2 mb-3.5 lg:mb-2.5 font-semibold text-gray-900 dark:text-gray-200">
            Image
          </h5>
          <div className="flex flex-col">
            <Link
              className="mt-2 lg:mt-0 flex items-center py-2 px-4 rounded-lg focus:outline-primary dark:focus:outline-primary-light hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="/api/anime/test"
            >
              <div className="flex-1 flex items-center space-x-2.5">
                <div className="text-sm flex flex-warp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="my-auto mr-2"
                  >
                    {" "}
                    <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                 Anime
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Sidebar;
