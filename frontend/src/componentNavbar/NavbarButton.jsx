/* eslint-disable react/prop-types */

const NavbarButton = ({ active, setActive }) => {
  return (
    <button
      className="flex button-shadow bg-cust-dark-green hover:bg-cust-green w-[50px] h-[50px] md:w-[60px] md:h-[60px] p-3 rounded-xl justify-center items-center duration-300"
      onClick={() => setActive(!active)}
      aria-label="navbar-button"
    >
      {active ? (
        <img src="./cancel.svg" alt="" />
      ) : (
        <img src="./hamburgermenu.svg" alt="" />
      )}
    </button>
  );
};

export default NavbarButton;
