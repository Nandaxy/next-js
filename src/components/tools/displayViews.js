"use client"

import { useState, useEffect } from 'react';

const CounterComponent = ({ dataType }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://counter.nandaxy.repl.co/data');
        const responseData = await response.json();

        if (responseData) {
          switch (dataType) {
            case 'totalRequests':
              setData(responseData.totalRequests.toLocaleString());
              break;
            case 'views':
              setData(Math.floor(responseData.views).toLocaleString());
              break;
            default:
              console.error('Invalid dataType:', dataType);
              break;
          }
        } else {
          console.error('Invalid data structure:', responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataType]);

  return (
    <div>
      {data !== null ? (
        <p>{data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CounterComponent;



