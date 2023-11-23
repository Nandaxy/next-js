"use client"

// components/BackgroundTask.js
import { useEffect } from 'react';

const AddViews = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://counter.nandaxy.repl.co/add');
        const data = await response.json();

        if (data.success) {
        //   console.log('Data added successfully!');
        } else {
        //   console.error('Failed to add data:', data.message);
        }
      } catch (error) {
        // console.error('Error:', error);
      }
    };

    
    fetchData();
  }, []); 


  return null;
};

export default AddViews;
