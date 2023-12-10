import NavbarApi from "@/components/api/NavbarApi";
import Sidebar from "@/components/api/sidebar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavbarApi />
      <Sidebar />
      <div className="w-full">
        <div className="mt-20 mx-6 md:mx-[21rem] md:mt-24 md:w-[60%] lg:w-80%">
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
