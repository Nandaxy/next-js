"use client"

import { useState, useEffect } from 'react';

const CounterComponent = () => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://counter.nandaxy.repl.co/data');
        const data = await response.json();

        if (data && data.views !== undefined) {
          const integerViews = parseInt(data.views, 10);
          setViews(integerViews);
        } else {
          console.error('Invalid data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {views !== null ? (
        <p>{views}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CounterComponent;

