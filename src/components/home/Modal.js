import React, { useEffect } from 'react';
import Image from "next/image"; // Import Image dari Next.js

const Modal = ({ onClose, project }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-90">
      <div className="modal-background fixed inset-0 bg-black opacity-50 z-[-1]"></div>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container bg-white w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <Image src={project.imageSrc} width={400} height={200} alt={project.imageAlt} />
        <p className="mb-4">{project.description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

