"use client"

import { useState, useEffect } from 'react';

const CounterComponent = ({ type }) => {
  const [counterData, setCounterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/counter');
        const data = await response.json();
        setCounterData(data.counters);
      } catch (error) {
        console.error('Error fetching counter data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {counterData ? (
        <div>
          {type === 'anime' && (
            <p>Anime Counter: {counterData.randomImages.anime}</p>
          )}
          {type === 'views' && <p>{counterData.views}</p>}
          {type === 'totalRequests' && (
            <p>{counterData.totalRequests}</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CounterComponent;
