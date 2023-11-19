import Navbar from "@/components/home/Navbar";
import LastServerStartRecorder from "@/components/last";
import VisitCounter from "@/components/viewsCounter";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <VisitCounter/>
    </>
  );
};

export default MainLayout;
