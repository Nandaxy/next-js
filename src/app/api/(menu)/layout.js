import NavbarApi from "@/components/api/NavbarApi";
import Sidebar from "@/components/api/sidebar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavbarApi />
      <Sidebar />
      <div className="mt-20 mx-6 md:mx-[21rem] md:mt-24">{children}</div>
    </>
  );
};

export default MainLayout;
