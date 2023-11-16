import React from "react";
import { BiSolidChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link
      to="/"
      className="fixed z-20 left-[5vw] top-[3vw] flex items-center font-arges text-5xl text-black"
    >
      <img src="./asian-5.png" alt="" className="lg:w-2/12 w-2/12" />
    </Link>
  );
};

export default HomeButton;
