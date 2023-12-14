"use client";

import { useEffect } from "react";

const AddData = ({ apiUrl }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
      } catch (error) {}
    };

    fetchData();
  }, [apiUrl]);

  return null;
};

export default AddData;
