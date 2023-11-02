import React from "react";
import { Outlet } from "react-router";
import HomeButton from "../componentNavbar/HomeButton";

const LayoutWithBack = () => {
  return (
    <>
      <HomeButton />
      <Outlet />
    </>
  );
};

export default LayoutWithBack;
