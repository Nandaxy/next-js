"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faDownload,
  faCamera,
  faMoon,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeLinks, setActiveLinks] = useState([]);

  useEffect(() => {
    const activePaths = [
      "/api/mulai",
      "/api/quickstart",
      "/api/api-reference/random-image",
      "/api/api-reference/ai",
      "/api/api-reference/entertainment",
      "/api/api-reference/downloader",
      "/api/api-reference/islami",
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
        <hr className="dark:opacity-30"></hr>

        <div className="mt-4">
          <div className="flex flex-col">
            <LinkStyles link="/api/api-reference/ai" activeLinks={activeLinks}>
              <div className="text-sm flex flex-warp">
                <FontAwesomeIcon icon={faRobot} className="m-auto mr-2" />
                OpenAI
              </div>
            </LinkStyles>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col">
            <LinkStyles
              link="/api/api-reference/downloader"
              activeLinks={activeLinks}
            >
              <div className="text-sm flex flex-warp">
                <FontAwesomeIcon icon={faDownload} className="m-auto mr-2" />
                Downloader
              </div>
            </LinkStyles>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col">
            <LinkStyles
              link="/api/api-reference/islami"
              activeLinks={activeLinks}
            >
              <div className="text-sm flex flex-warp">
                <FontAwesomeIcon icon={faMoon} className="m-auto mr-2" />
                Islami
              </div>
            </LinkStyles>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col">
            <LinkStyles
              link="/api/api-reference/random-image"
              activeLinks={activeLinks}
            >
              <div className="text-sm flex flex-warp">
                <FontAwesomeIcon icon={faCamera} className="m-auto mr-2" />
                Random Image
              </div>
            </LinkStyles>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col">
            <LinkStyles
              link="/api/api-reference/entertainment"
              activeLinks={activeLinks}
            >
              <div className="text-sm flex flex-warp">
                <FontAwesomeIcon icon={faFaceSmile} className="m-auto mr-2" />
                Enterteiment
              </div>
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
