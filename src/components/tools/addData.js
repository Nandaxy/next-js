"use client"

// components/BackgroundTask.js
import { useEffect } from 'react';

const AddData = ({ apiUrl }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Jika perlu melakukan sesuatu dengan data, Anda dapat menambahkan logika di sini
      } catch (error) {
        // Jika perlu menangani error, Anda dapat menambahkan logika di sini
      }
    };

    fetchData();
  }, [apiUrl]);

  return null;
};

export default AddData;

