"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeLinks, setActiveLinks] = useState([]);

  useEffect(() => {
    const activePaths = [
      "/api/mulai",
      "/api/quickstart",
      "/api/api-reference/anime",
    ];

    const newActiveLinks = activePaths.map((path) => ({
      path,
      isActive: pathname === path,
    }));

    setActiveLinks(newActiveLinks);
  }, [pathname]);

  return (
    <div
      className="z-[5] hidden md:block fixed bottom-0 right-auto w-[18rem] pl-4 pr-6 pb-12 overflow-y-scroll stable-scrollbar-gutter top-[4.5rem]"
      id="sidebar"
    >
      <div className="p-6">
        <div className="my-4">
          <h5 className="px-2 mb-2.5 font-semibold text-gray-900 dark:text-gray-200">
            Get Started
          </h5>
          <div className="flex flex-col">
            <LinkStyles link="/api/mulai" activeLinks={activeLinks}>
              <div className="text-sm">Introduction</div>
            </LinkStyles>
            <LinkStyles link="/api/quickstart" activeLinks={activeLinks}>
              <div className="text-sm">Quickstart</div>
            </LinkStyles>
          </div>
        </div>
        <div className="my-4">
          <h5 className="px-2 mb-1.5 font-semibold text-gray-900 dark:text-gray-200">
            Test
          </h5>
          <div className="flex flex-col">
            <LinkStyles link="/api/test" activeLinks={activeLinks}>
              <div className="text-sm">Testing</div>
            </LinkStyles>
          </div>
        </div>
        <div className="my-4">
          <h5 className="px-2 mb-1.5 font-semibold text-gray-900 dark:text-gray-200">
            Random Image
          </h5>
          <div className="flex flex-col">
            <LinkStyles
              link="/api/api-reference/anime"
              activeLinks={activeLinks}
            >
              <div className="text-sm flex flex-warp">Anime</div>
            </LinkStyles>
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkStyles = ({ link, activeLinks, children }) => {
  const isActive = activeLinks.find((item) => item.path === link)?.isActive;

  return (
    <Link
      href={link}
      className={`mt-2 flex items-center py-2 px-4 rounded-lg focus:outline-primary dark:focus:outline-primary-light ${
        isActive
          ? "bg-gray-600/5 text-apiPrimary font-semibold dark:bg-gray-200/5 dark:text-apiPrimary"
          : "hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
      }`}
    >
      <div className="flex-1 flex items-center space-x-2.5">{children}</div>
    </Link>
  );
};

export default Sidebar;
