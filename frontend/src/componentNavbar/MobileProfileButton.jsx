/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { BsCheck, BsPersonCircle, BsX } from "react-icons/bs";
import { LuDumbbell } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { getToken } from "../api/sessionHelper";

const MobileProfileButton = ({ active }) => {
  const [isShown, setIsShown] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    const token = getToken;
    const getUser = async () => {
      const res = await fetch("https://admin2.brawijayatournament.com/me", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      const resData = await res.json();
      console.log(resData);
      setUserData(resData);
    };

    getUser();
  }, []);

  useEffect(() => {
    !active && setIsShown(false);
  }, [active]);

  return (
    <button
      onClick={() => {
        setIsShown(!isShown);
      }}
      aria-label="navbar-button"
      className={`md:hidden absolute top-[10%] right-0 ${
        active
          ? `translate-y-[100%] ${
              isShown ? " w-fit h-fit top-[40%]" : "h-full w-full"
            } `
          : "w-[0px] h-[0px] md:w-[0px] md:h-[0px]"
      } flex button-shadow bg-cust-dark-green hover:bg-cust-green rounded-full justify-center items-center duration-300 -z-10 flex-shrink-0 transition-all`}
    >
      {active && !isShown && (
        <BsPersonCircle className="text-2xl text-cust-yellow" />
      )}
      {isShown && userData && (
        <ul className=" transition-all w-max button-shadow absolute right-0 top-[8vw] font-lato bg-cust-dark-green hover:bg-cust-green p-2 px-4 space-y-2 text-cust-yellow rounded-xl">
          <li className="flex items-center gap-1 font-black text-xl underline underline-offset-2">
            Hello,
            {userData.name.length > 20
              ? userData.name.slice(0, 20) + "..."
              : userData.name}
          </li>
          <li className="flex items-center gap-1 font-bold ">
            {userData.lomba} <LuDumbbell className="text-lg" />
          </li>
          <li className="flex items-center gap-1 font-bold ">
            Tim {userData.tim} <RiTeamFill className="text-lg" />
          </li>
          {userData.status === "belum tervalidasi" ? (
            <li className="flex items-center gap-1 font-bold ">
              Belum diverifikasi <BsX className="text-2xl" />
            </li>
          ) : (
            <li className="flex items-center gap-1 font-bold">
              Telah diverifikasi <BsCheck className="text-xl" />
            </li>
          )}
        </ul>
      )}
    </button>
  );
};

export default MobileProfileButton;
