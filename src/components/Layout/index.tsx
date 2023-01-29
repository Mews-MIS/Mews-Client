import React from "react";
import TopNavBar from "@components/TopNavBar";
import BottomNavbar from "@components/BottomNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopNavBar />
      {children}
      <BottomNavbar />
    </>
  );
};

export default Layout;
