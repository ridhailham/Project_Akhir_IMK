import React from "react";
import basket from "../assets/basket.png";
import ml from "../assets/MLBBBB.png";
import game from "../assets/game.png";
import silat from "../assets/silat.png";
import { Link } from "react-router-dom";

const Competition = () => {
  return (
    <>
      <div className="bg-blue-800 py-5 font-arges">
        <div className="mx-auto w-fit lg:text-8xl md:text-7xl text-6xl font-bold text-cust-light-yellow mb-8">
          COMPETITION
        </div>
        <div className="w-full md:flex md:flex-row">
          <div className="group hover:cursor-pointer md:w-3/12 w-9/12 px-5 py-5  bg-blue-gray-50 rounded-lg md:mx-5 mx-auto">
            <Link to="/pubg">
              <div className="overflow-hidden mb-5 relative">
                <img
                  src={game}
                  alt=""
                  className="w-full duration-500 group-hover:scale-110 "
                />
                <div className="group-hover:flex items-center justify-center hidden absolute bg-black opacity-50 top-0 w-full h-full text-white duration-300">
                  <div className="w-fit  font-bold text-5xl md:text-2xl lg:text-5xl xl:text-6xl mx-auto">
                    Click for more
                  </div>
                </div>
              </div>
              <div className="w-fit text-9xl md:text-8xl lg:text-9xl xl:text-10xl text-cust-yellow mx-auto font-bold mb-5 group-hover:text-cust-red duration-300">
                PUBG
              </div>
            </Link>
          </div>
          <div className="group hover:cursor-pointer md:w-3/12 w-9/12 px-5 py-5 bg-blue-gray-50 rounded-lg md:mr-5 mx-auto md:my-0 my-8">
            <Link to="/basket">
              <div className="overflow-hidden mb-5 relative">
                <img
                  src={basket}
                  alt=""
                  className="w-full duration-500 group-hover:scale-110 "
                />
                <div className="group-hover:flex items-center justify-center hidden absolute bg-black opacity-50 top-0 w-full h-full text-white duration-300">
                  <div className="w-fit font-bold text-5xl md:text-2xl lg:text-5xl xl:text-6xl mx-auto">
                    Click for more
                  </div>
                </div>
              </div>
              <div className="w-fit text-9xl md:text-8xl lg:text-9xl xl:text-10xl text-cust-yellow mx-auto font-bold mb-5 group-hover:text-cust-red duration-300">
                BASKET
              </div>
            </Link>
          </div>

          <div className="group hover:cursor-pointer md:w-3/12 w-9/12 px-5 py-5 bg-blue-gray-50 rounded-lg md:mx-0 mx-auto md:mb-0 mb-8">
            <Link to="/mlbb">
              <div className="overflow-hidden mb-5 relative">
                <img
                  src={ml}
                  alt=""
                  className="w-full duration-500 group-hover:scale-110 "
                />
                <div className="group-hover:flex items-center justify-center hidden absolute bg-black opacity-50 top-0 w-full h-full text-white duration-300">
                  <div className="w-fit font-bold text-5xl md:text-2xl lg:text-5xl xl:text-6xl mx-auto">
                    Click for more
                  </div>
                </div>
              </div>
              <div className="w-fit text-9xl md:text-8xl lg:text-9xl xl:text-10xl text-cust-yellow mx-auto font-bold mb-5 group-hover:text-cust-red duration-300">
                MLBB
              </div>
            </Link>
          </div>

          <div className="group hover:cursor-pointer md:w-3/12 w-9/12 px-5 py-5 bg-blue-gray-50 rounded-lg md:mx-5 mx-auto md:mb-0 mb-8">
            <Link to="/silat">
              <div className="overflow-hidden mb-5 relative">
                <img
                  src={silat}
                  alt=""
                  className="w-full duration-500 group-hover:scale-110 "
                />
                <div className="group-hover:flex items-center justify-center hidden absolute bg-black opacity-50 top-0 w-full h-full text-white duration-300">
                  <div className="w-fit font-bold text-5xl md:text-2xl lg:text-5xl xl:text-6xl mx-auto">
                    Click for more
                  </div>
                </div>
              </div>
              <div className="w-fit text-9xl md:text-8xl lg:text-9xl xl:text-10xl text-cust-yellow mx-auto font-bold mb-5 group-hover:text-cust-red duration-300">
                SILAT
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Competition;
