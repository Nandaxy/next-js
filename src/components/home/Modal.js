import React, { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-brands-svg-icons";

const Modal = ({ onClose, project }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-90">
      <div className="modal-background fixed inset-0 bg-black opacity-50 z-[-1]"></div>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="flex flex-col justify-center items-center modal-container bg-white  w-fit p-8">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <Image
          src={project.imageSrc}
          width={400}
          height={200}
          alt={project.imageAlt}
        />
        <p className="mb-4 mt-6 max-w-sm">{project.description}</p>
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <a href={project.github} className="mr-4 text-xl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={project.demoLink} className="mr-4 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </a>
          </div>

          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
