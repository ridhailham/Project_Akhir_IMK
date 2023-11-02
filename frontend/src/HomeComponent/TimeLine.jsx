import React from "react";
import background from "../assets/BGMerah.svg";

const TimeLine = () => {
  return (
    <>
      <div className="bg-cust-yellow font-poppins px-5 py-5">
        <div
          className="h-[95vh] w-full rounded-xl"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="mx-auto w-fit lg:text-5xl md:text-4xl text-3xl font-bold text-cust-yellow pt-20 pb-64">
            TIMELINE
          </div>
          <div className="bg-cust-yellow w-full h-5 relative">
            <div className="flex justify-between absolute lg:-top-14 md:-top-12 xl:right-28 lg:right-20 md:right-10 w-10/12">
              <div className="w-2/12 hover:scale-125 duration-500">
                <div className="mx-auto w-fit lg:text-lg md:text-base text-cust-yellow font-bold mb-3">
                  Pre-Event
                </div>
                <div className="bg-cust-yellow rounded-full h-12 w-12 mx-auto"></div>
                <div className="mx-auto w-fit mt-3 lg:text-lg md:text-base text-cust-black font-bold">
                  9 Oktober 2023
                </div>
              </div>
              <div className="w-2/12 hover:scale-125 duration-500">
                <div className="mx-auto w-fit lg:text-lg md:text-base text-cust-yellow font-bold mb-3">
                  Opening
                </div>
                <div className="bg-cust-yellow rounded-full h-12 w-12 mx-auto"></div>
                <div className="mx-auto w-fit mt-3 lg:text-lg md:text-base text-cust-black font-bold">
                  9 Oktober 2023
                </div>
              </div>
              <div className="w-2/12 hover:scale-125 duration-500">
                <div className="mx-auto w-fit lg:text-lg md:text-base text-cust-yellow font-bold mb-3">
                  Main Event
                </div>
                <div className="bg-cust-yellow rounded-full h-12 w-12 mx-auto"></div>
                <div className="mx-auto w-fit mt-3 lg:text-lg md:text-base text-cust-black font-bold">
                  9 Oktober 2023
                </div>
              </div>
              <div className="w-2/12 hover:scale-125 duration-500">
                <div className="mx-auto w-fit lg:text-lg md:text-base text-cust-yellow font-bold mb-3">
                  Closing
                </div>
                <div className="bg-cust-yellow rounded-full h-12 w-12 mx-auto"></div>
                <div className="mx-auto w-fit mt-3 lg:text-lg md:text-base text-cust-black font-bold">
                  9 Oktober 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
