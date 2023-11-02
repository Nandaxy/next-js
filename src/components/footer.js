"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-footer text-white px-10 md:px-20 py-6 mt-10 h-full w-full">
        <div className="flex items-top md:justify-between flex-col md:flex-row">
          <div className="">
            <h1 className="text-xl font-bold">Website 🌍</h1>
            <div className="mt-2">
              <a
                href="https://nandabuqori.xyz"
                className="text-l mt-4 font-light hover:underline"
              >
                Nandabuqori.xyz
              </a>
              <br />
              <a
                href="https://zyka.my.id"
                className="text-l mt-4 font-light hover:underline"
              >
                {" "}
                Zyka.my.id
              </a>
            </div>
          </div>

          <div className="my-2 md:my-0">
            <h1 className="text-xl font-bold">Resource</h1>
            <div className="mt-2">
              <Link
                href="/docs"
                className="text-l mt-4 font-light hover:underline"
              >
                Dokumentasi
              </Link>
              <br />
              <Link
                href="/blog"
                className="text-l mt-4 font-light hover:underline"
              >
                Artikel
              </Link>
              <br />
              <Link
                href="/api"
                className="text-l mt-4 font-light hover:underline"
              >
                Api
              </Link>
            </div>
          </div>
          <div className="my-2 md:my-0">
            <h1 className="text-xl font-bold">Link 🔗</h1>
            {pathname === "/" && (
              <>
                <div className="mt-2">
                  <Link
                    href="#"
                    className="text-l mt-4 font-light hover:underline"
                  >
                    Home
                  </Link>
                  <br />
                  <Link
                    href="#about"
                    className="text-l mt-4 font-light hover:underline"
                  >
                    About
                  </Link>
                  <br />
                  <Link
                    href="#project"
                    className="text-l mt-4 font-light hover:underline"
                  >
                    Project
                  </Link>
                  <br />
                  <Link
                    href="#contact"
                    className="text-l mt-4 font-light hover:underline"
                  >
                    Contact
                  </Link>
                  <br />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center m-4">
          <a
            href="https://instragram.com/nandaaa_79"
            className="text-xl m-1 hover:text-[#da00ff]"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://instragram.com/"
            className="text-xl m-1 hover:text-[#da00ff]"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://instragram.com/"
            className="text-xl m-1 hover:text-[#da00ff]"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://instragram.com/"
            className="text-xl m-1 hover:text-[#da00ff]"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className="bg-footer py-1">
          <p className="text-center text-gray-300 text-sm opacity-50">
            &copy; 2023 Dibuat dengan ☕ oleh{" "}
            <Link href="#" className="hover:underline">
              Nanda
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
