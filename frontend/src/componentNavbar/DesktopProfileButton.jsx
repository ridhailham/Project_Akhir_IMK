import React from "react";
import { BsCheck, BsPersonCircle, BsX } from "react-icons/bs";
import { LuDumbbell } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { getToken } from "../api/sessionHelper";

const DesktopProfileButton = () => {
  const [isShown, setIsShown] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    const token = getToken;
    const getUser = async () => {
      const res = await fetch("http://localhost:4000/me", {
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

  return (
    <button
      onClick={() => setIsShown(!isShown)}
      aria-label="navbar-button"
      className={`hidden md:flex top-[10%] w-[50px] h-[50px] md:w-[60px] md:h-[60px] p-3  button-shadow bg-cust-dark-green hover:bg-cust-green rounded-full justify-center items-center duration-300 flex-shrink-0 transition-all`}
    >
      <BsPersonCircle className="text-3xl text-cust-yellow" />
      {isShown && userData && (
        <ul className=" transition-all w-max button-shadow absolute top-[8vh] font-lato bg-cust-dark-green hover:bg-cust-green p-2 px-4 space-y-2 text-cust-yellow rounded-xl">
          <li className="flex items-center gap-1 font-black text-xl underline underline-offset-2">
            Hello,{" "}
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

export default DesktopProfileButton;
