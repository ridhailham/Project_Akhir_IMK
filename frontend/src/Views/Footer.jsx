import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-cust-yellow px-3">
        <div className="p-2.5 pt-6 rounded-[20px_20px_0_0] bg-cust-dark-green mx-2 mb-0">
          <div className="flex justify-between items-center px-12 md:flex-row flex-col md:w-fit mx-auto">
            <div className="flex md:flex-col items-center md:w-1/5 w-1/2 justify-center mb-5">
              <img src="./BTLogo.svg" alt="" className="w-6/12" />
              <img src="./Budpora.svg" alt="" />
            </div>
            <div className="flex flex-col items-center md:w-[35%] w-[85%] md:mb-8">
              <img src="./FooterText.png" alt="" />
              <div className="flex my-5">
                <a
                  href="https://www.instagram.com/brawijayatournament/"
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
                  href="https://www.tiktok.com/@brawijayatournament"
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
              <p
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
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-cust-yellow mb-3 sm:text-[15px] text-[70%]">
              © 2023 <b>Brawijaya Tournament</b>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
