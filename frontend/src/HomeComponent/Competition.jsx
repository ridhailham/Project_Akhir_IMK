import React from "react";
import musik from "../assets/musiktradisional1.jpg";
import tari from "../assets/taritradisional1.jpg";
import teater from "../assets/teater1.jpg";
import wayangKulit from "../assets/wayangkulit.jpg";
import { Link } from "react-router-dom";

const Competition = () => {
  return (
    <>
      <div className="bg-blue-800 py-5 font-arges">
        <div className="mx-auto w-fit lg:text-8xl md:text-7xl text-7xl font-bold text-cust-light-yellow mb-8">
          BELI TIKET PERTUNJUKKAN
        </div>
        <div className="w-full md:flex md:flex-row">
          <div className="group hover:cursor-pointer md:w-3/12 w-9/12 px-5 py-5  bg-blue-gray-50 rounded-lg md:mx-5 mx-auto">
            <Link to="/pubg">
              <div className="overflow-hidden mb-5 relative">
                <img
                  src={teater}
                  alt=""
                  className="w-full duration-500 group-hover:scale-110 rounded-lg"
                />
                <div className="group-hover:flex items-center justify-center hidden absolute bg-black opacity-50 top-0 w-full h-full text-white duration-300">
                  <div className="w-fit  font-bold text-5xl md:text-2xl lg:text-5xl xl:text-6xl mx-auto">
                    Click for more
                  </div>
                </div>
              </div>
              <div className="w-fit text-7xl md:text-8xl lg:text-8xl xl:text-10xl text-cust-yellow mx-auto font-bold mb-5 group-hover:text-cust-red duration-300">
                TEATER
              </div>
            </Link>
          </div>
          <div className="group hover:cursor-pointer md:w-3/12 w-9/12 px-5 py-5 bg-blue-gray-50 rounded-lg md:mr-5 mx-auto md:my-0 my-8">
            <Link to="/basket">
              <div className="overflow-hidden mb-5 relative">
                <img
                  src={musik}
                  alt=""
                  className="w-full duration-500 group-hover:scale-110 rounded-lg "
                />
                <div className="group-hover:flex items-center justify-center hidden absolute bg-black opacity-50 top-0 w-full h-full text-white duration-300">
                  <div className="w-fit font-bold text-5xl md:text-2xl lg:text-5xl xl:text-6xl mx-auto">
                    Click for more
                  </div>
                </div>
              </div>
              <div className="w-fit text-7xl md:text-8xl lg:text-8xl xl:text-10xl text-cust-yellow mx-auto font-bold mb-5 group-hover:text-cust-red duration-300">
                MUSIK
              </div>
            </Link>
          </div>

          <div className="group hover:cursor-pointer md:w-3/12 w-9/12 px-5 py-5 bg-blue-gray-50 rounded-lg md:mx-0 mx-auto md:mb-0 mb-8">
            <Link to="/mlbb">
              <div className="overflow-hidden mb-5 relative">
                <img
                  src={tari}
                  alt=""
                  className="w-full h-auto duration-500 group-hover:scale-110 rounded-lg"
                />
                <div className="group-hover:flex items-center justify-center hidden absolute bg-black opacity-50 top-0 w-full h-full text-white duration-300">
                  <div className="w-fit font-bold text-5xl md:text-2xl lg:text-5xl xl:text-6xl mx-auto">
                    Click for more
                  </div>
                </div>
              </div>
              <div className="w-fit text-7xl md:text-8xl lg:text-8xl xl:text-10xl text-cust-yellow mx-auto font-bold mb-5 group-hover:text-cust-red duration-300">
                TARI
              </div>
            </Link>
          </div>

          <div className="group hover:cursor-pointer md:w-3/12 w-9/12 px-5 py-5 bg-blue-gray-50 rounded-lg md:mx-5 mx-auto md:mb-0 mb-8">
            <Link to="/silat">
              <div className="overflow-hidden mb-5 relative">
                <img
                  src={wayangKulit}
                  alt=""
                  className="w-full duration-500 group-hover:scale-110 rounded-lg"
                />
                <div className="group-hover:flex items-center justify-center hidden absolute bg-black opacity-50 top-0 w-full h-full text-white duration-300">
                  <div className="w-fit font-bold text-5xl md:text-2xl lg:text-5xl xl:text-6xl mx-auto">
                    Click for more
                  </div>
                </div>
              </div>
              <div className="w-fit text-7xl text-center md:text-8xl lg:text-8xl xl:text-10xl text-cust-yellow mx-auto font-bold mb-5 group-hover:text-cust-red duration-300">
                WAYANG
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Competition;
