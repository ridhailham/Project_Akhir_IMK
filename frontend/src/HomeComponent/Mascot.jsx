import { React, useState } from "react";
import mascot from "../../public/asian-5.png";

const Mascot = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-light-blue-600 px-5 py-5">
        <div className=" bg-light-blue-800 py-5 rounded-xl">
          <div className="mx-auto w-fit font-arges lg:text-8xl md:text-7xl text-6xl text-cust-light-yellow">
            OUR MASCOT
          </div>
          <div className="mx-auto w-fit lg:text-2xl text-xl font-poppins text-cust-yellow md:block hidden">
            Click for more!
          </div>
          <div className="w-full md:h-full mt-10 mb-14">
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="hover:cursor-pointer mx-auto md:flex w-8/12 relative"
            >
              <img
                src={mascot}
                alt=""
                className={`${
                  open
                    ? "lg:-translate-x-72 md:-translate-x-32"
                    : "md:translate-x-0"
                } md:w-3/12 w-6/12 mx-auto duration-500`}
              />
              <div
                className={`${
                  open ? "md:opacity-100 md:translate-x-4" : "md:opacity-0"
                } lg:w-7/12 md:w-8/12 md:mt-0 mt-10 mx-auto my-auto duration-200 md:absolute xl:top-10 lg:top-20 md:top-10 xl:-right-6 lg:-right-7 md:-right-12 text-white xl:text-base lg:text-sm md:text-xs text-xs text-justify font-lato`}
              >
                The Golden Cendrawasih adalah maskot Indonesia Local Culture Fest 2023. Burung
                yang melambangkan kemuliaan bumi pertiwi sekaligus simbol
                keberanian, kekuatan, dan ketegasan. Dengan hadirnya The Golden Cendrawasih harapannya
                Indonesia Local Culture Fest 2023 dapat mencetak insan yang berani dan yakin
                dengan kekuatannya untuk berkolaborasi dan meningkatkan
                rasa cinta tanah air. The Golden Cendrawasih akan menjadi maskot yang mewakili
                semangat perjuangan dan keberanian yang luar biasa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mascot;
