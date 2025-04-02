import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />   
      <div className="py-10">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
