"use client"

import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(getCurrentTime());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Selamat pagi!';
    } else if (currentHour < 18) {
      return 'Selamat sore!';
    } else {
      return 'Selamat malam!';
    }
  };

  return (
    <div className="digital-clock">
      <p className='mt-1 text-l font-bold text-white'>{isClient ? `${time}` : 'reading...'}</p>
      <h1 className='mt-1 text-md text-white'>{isClient ? getGreeting() : 'laoding...'}</h1>
    </div>
  );
};

export default DigitalClock;
