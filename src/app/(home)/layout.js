import Navbar from "@/components/home/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
