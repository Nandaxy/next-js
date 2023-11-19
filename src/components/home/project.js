"use client"

import Image from "next/image";
import { useState } from 'react';
import Modal from "./Modal";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  }

  const closeModal = () => {
    setSelectedProject(null);
  }

  const projects = [
    { 
      id: 1,
      title: 'Login Page',
      description: 'sebauah web static Login page,yang dibuat pada saat gabut',
      imageSrc: '/Tab Baru - Google Chrome 05_11_2023 17.18.52.png',
      imageAlt: 'Project 1',
      github: 'https://github.com/Nandaxy/Web-Project',
      demoLink: 'https://login-sigin.nanda79.repl.co/login.html'
    },
    { 
      id: 2,
      title: 'Project 2',
      description: 'Project 2 Description',
      imageSrc: '/malas.png',
      imageAlt: 'Project 2',
      github: 'https://github.com',
      demoLink: 'https://youtube.com'
    },
  ];

  return (
    <div id="project" className="h-full w-full bg-gray-100 dark:bg-dark dark:md:bg-black flex justify-center items-center pb-20">
      <div className="mt-40 text-center bg-white dark:bg-dark px-6 pt-6 pb-14 rounded-xl shadow-xl">
        <h1 className="font-bold text-3xl mb-4">Project</h1>
        <p className="mb-10">Beberapa project yang sudah pernah saya buat</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-100 dark:bg-[#1a1a1a] p-4 shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform" onClick={() => openModal(project)}>
              <Image src={project.imageSrc} width={400} height={200} alt={project.imageAlt} />
              <p className="text-lg mt-4">{project.title}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default Project;
