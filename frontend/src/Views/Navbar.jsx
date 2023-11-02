import React from "react";
import { CheckUser } from "../api/sessionHelper";
import DesktopProfileButton from "../componentNavbar/DesktopProfileButton";
import LoginButton from "../componentNavbar/LoginButton";
import LogoutButton from "../componentNavbar/LogoutButton";
import MobileProfileButton from "../componentNavbar/MobileProfileButton";
import NavbarButton from "../componentNavbar/NavbarButton";
import NavbarMenu from "../componentNavbar/NavbarMenu";
import HomeButton from "../componentNavbar/HomeButton";

const Navbar = () => {
  const [active, setActive] = React.useState(false);

  const resetState = () => {
    setActive(false);
  };

  return (
    <>
      <div className="right-[5vw] top-[4vw] fixed flex items-center w-fit place-items-end h-fit z-50 ">
        <div className="flex w-full justify-between gap-4 ">
          <CheckUser forLoggedOut>
            <LoginButton />
          </CheckUser>
          <CheckUser>
            <LogoutButton />
            <DesktopProfileButton active={active}  />
          </CheckUser>
          <div className="relative justify-center items-center space-y-1">
            <NavbarButton active={active} setActive={setActive} />
            <CheckUser>
              <MobileProfileButton active={active} />
            </CheckUser>
          </div>
        </div>
      </div>
      {active && <NavbarMenu resetState={resetState} />}
    </>
  );
};

export default Navbar;

// eslint-disable-next-line react/prop-types
