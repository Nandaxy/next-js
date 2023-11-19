"use client";

import React, { useState, useEffect } from "react";

const ApiTestComponent = ({ apiUrl }) => {
  const [apiStatus, setApiStatus] = useState("loading");

  useEffect(() => {
    const cachedStatus = localStorage.getItem(apiUrl);
    const cachedTimestamp = localStorage.getItem(`${apiUrl}_timestamp`);

    const isCacheValid =
      cachedStatus &&
      cachedTimestamp &&
      Date.now() - parseInt(cachedTimestamp, 10) < 21600000; // 6 jam dalam milidetik

    if (isCacheValid) {
      setApiStatus(cachedStatus);
    } else {
      fetch(apiUrl)
        .then((response) => {
          if (response.ok) {
            setApiStatus("active");
            localStorage.setItem(apiUrl, "active");
            localStorage.setItem(`${apiUrl}_timestamp`, Date.now().toString());
          } else {
            setApiStatus("inactive");
            localStorage.setItem(apiUrl, "inactive");
            localStorage.setItem(`${apiUrl}_timestamp`, Date.now().toString());
          }
        })
        .catch((error) => {
          console.error("Error fetching API:", error);
          setApiStatus("inactive");
        });
    }
  }, [apiUrl]);

  return (
    <div>
      {apiStatus === "loading" && (
        <span className="text-gray-600">Loading...</span>
      )}
      {apiStatus !== "loading" && (
        <h2
          className={`text-l ${
            apiStatus === "active" ? "text-green-600 hover:text-green-700" : "text-red-600 hover:text-red-700"
          }`}
        >
          {apiStatus === "active" ? "Active" : "Inactive"}
        </h2>
      )}
    </div>
  );
};

export default ApiTestComponent;