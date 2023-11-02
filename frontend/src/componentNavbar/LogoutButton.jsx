/* eslint-disable react/prop-types */
import { invalidateSession } from "../api/sessionHelper";

const LogoutButton = ({ variant }) => {
  return (
    <button
      onClick={() => {
        invalidateSession();
        window.location.reload();
      }}
      className={` ${
        variant === "sm" ? "md:hidden" : "hidden md:block"
      } button-shadow border-[2px] md:border-[4px] border-cust-dark-green bg-white/40 backdrop-blur-[22px] hover:border-cust-yellow hover:bg-[#FFFFFF73]/40 text-cust-dark-green button-text py-1 w-full md:w-fit px-8 rounded-lg md:rounded-xl text-2xl md:text-[27px] duration-200`}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
