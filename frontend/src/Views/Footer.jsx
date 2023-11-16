import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" px-3">
        <br />
        <div className="p-2.5 pt-6 rounded-[20px_20px_0_0] bg-blue-800 mx-2 mb-0">
          <div className="flex justify-between items-center px-12 md:flex-row flex-col md:w-fit mx-auto">
            <div className="flex md:flex-col items-center md:w-1/5 w-1/2 justify-center mb-5">
              <img src="./asian-5.png" alt="" className="w-6/12 pt-2" />
            </div>
            <div className="flex flex-col items-center md:w-[35%] w-[85%] md:mb-8">
              <img src="./FooterText.png" alt="" />
              <div className="flex my-5">
                <a
                  href="https://www.instagram.com/tedxuniversitasbrawijaya/"
                  target="_blank"
                  className="mx-4 hover:scale-110 duration-300"
                >
                  <img
                    src="./InstagramLogo.svg"
                    alt="Instagram Logo"
                    className="md:w-12 w-8"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@tedxuniversitasbrawijaya"
                  target="_blank"
                  className="mx-4 hover:scale-110 duration-300"
                >
                  <img
                    src="./TiktokLogo.svg"
                    alt="Tiktok Logo"
                    className="md:w-12 w-8"
                  />
                </a>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:w-1/5 justify-center">
            <img src="./Group3.png" alt="" />
            
              {/* <p
                onClick={() => navigate("/")}
                className="text-cust-yellow m-2 hover:text-white sm:text-[15px] text-[70%] font-bold cursor-pointer"
              >
                BASKET
              </p>
              <p
                onClick={() => navigate("/")}
                className="text-cust-yellow m-2 hover:text-white sm:text-[15px] text-[70%] font-bold cursor-pointer"
              >
                MLBB
              </p>
              <p
                onClick={() => navigate("/")}
                className="text-cust-yellow m-2 hover:text-white sm:text-[15px] text-[70%] font-bold cursor-pointer"
              >
                PUBG
              </p>
              <p
                onClick={() => navigate("/")}
                className="text-cust-yellow m-2 hover:text-white sm:text-[15px] text-[70%] font-bold cursor-pointer"
              >
                SILAT
              </p> */}
            </div>
          </div>
          <div className="text-center">
            <p className="text-cust-yellow mb-3 sm:text-[15px] text-[70%]">
              © 2023 <b>Indonesia Culture Exhibition 2023</b>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
