/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import { CheckUser } from "../api/sessionHelper";
import LogoutButton from "./LogoutButton";

const NavbarMenu = ({ resetState }) => {
  return (
    <div
      className="fixed flex justify-center inset-0 w-full h-fit md:h-full min-h-[100vh] z-40 backdrop-blur-[10px]"
      style={{
        backgroundImage: "url(./NavMenu.svg)",
        backgroundSize: "100vh",
        backgroundColor: "#015557",
      }}
    >
      <Link to={"/"} onClick={resetState}>
        <img
          src="./BTLogo.svg"
          alt=""
          className="absolute w-[40px] lg:w-[70px] left-[5vw] top-[3vw] z-50"
        />
      </Link>
      <div className="container flex flex-col md:flex-row flex-grow items-center justify-center gap-6 md:gap-0 md:justify-start">
        <div className="flex justify-center flex-[.7] navmenu-text text-center md:text-start">
          <ul className="flex flex-col space-y-2  md:space-y-10 text-[60px] sm:text-[60px] md:text-[96px]">
            {navlist.map((item, index) => (
              <NavLink
                onClick={resetState}
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-stroke-inactive"
                    : "text-stroke hover:scale-105 transition-all"
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
        </div>
        

        <div className="w-full h-fit flex flex-col md:flex-1 font-bold text-[40px] justify-end md:justify-start items-center gap-4  md:gap-8">
          <span className="text-xl md:text-3xl lg:text-4xl text-white ">
            Don&apos;t Miss Out!
          </span>
          <div className="flex gap-10">
            <a
              className="w-12 md:w-[72px] hover:scale-110 transition-all"
              href="https://www.tiktok.com/@brawijayatournament"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./tiktok.svg" alt="" />
            </a>
            <a
              className="w-12 md:w-[72px] hover:scale-110 transition-all"
              href="https://www.instagram.com/brawijayatournament/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./insta.svg" alt="" />
            </a>
          </div>
        </div>
        <CheckUser forLoggedOut>
          <LoginButton variant="sm" className="" />
        </CheckUser>
        <CheckUser>
          <LogoutButton variant="sm" />
        </CheckUser>
      </div>
    </div>
  );
};

export default NavbarMenu;

const navlist = [
  // {
  //   title: "TENTANG",
  //   path: "/",
  // },
  {
    title: "BASKET",
    path: "/basket",
  },
  {
    title: "MLBB",
    path: "/mlbb",
  },
  {
    title: "PUBG",
    path: "/pubg",
  },
  {
    title: "SILAT",
    path: "/silat",
  },

];
