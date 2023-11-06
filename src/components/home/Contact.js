"use client"

import React, { useState } from 'react';
import sendTele from './sendTele';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kirim pesan ke bot Telegram
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const success = await sendTele(message);

    if (success) {
      toast.success('Pesan terkirim!');
    } else {
      toast.error('Terjadi kesalahan saat mengirim pesan.');
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div id="contact" className="mt-10 w-full h-full">
      <div className="my-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="font-bold text-3xl mb-4">Contact Me</h2>
            <p className="font-small text-md text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, maxime!
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full mb-8 px-4">
              <label htmlFor="name" className="text-base text-primary font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="w-full mb-8 px-4">
              <label htmlFor="email" className="text-base text-primary font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-2 focus:border-primary"
                onChange={handleChange}
              />
            </div>
            <div className="w-full mb-8 px-4">
              <label htmlFor="message" className="text-base text-primary font-bold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button
                type="submit"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-70 hover:shadow-sm transition:opacity duration-500"
              >
                Send
              </button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
