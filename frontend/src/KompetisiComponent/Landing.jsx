const Landing = ({ name, className }) => {
  const nama = name;
  return (
    <>
      <div className="relative top-0 h-fit w-full flex items-center justify-center overflow-hidden">
        <img src="./sunburstcabor.svg" alt="" className="w-full" />

        <div className="absolute my-auto pt-[6vh] lg:pt-[10vw] ">
          <div className="group relative mx-auto snap-center">
            <div className="absolute -ml-[18%] -mt-[6%]">
              <img
                src="./sly/SLY 2.svg"
                alt=""
                className="group-hover:-translate-y-[10%] transition-all w-5 md:w-10 xl:w-12 2xl:w-auto"
              />
              <img
                src="./sly/SLY 3.svg"
                alt=""
                className="group-hover:-translate-x-[10%] transition-all w-5 md:w-10 xl:w-12 2xl:w-auto"
              />
            </div>
            <div className="group absolute right-0 bottom-0 -mr-[18%] -mb-[6%]">
              <img
                src="./sly/SLY 5.svg"
                alt=""
                className="group-hover:translate-x-[10%] transition-all w-5 md:w-10 xl:w-12 2xl:w-auto"
              />
              <img
                src="./sly/SLY 4.svg"
                alt=""
                className="group-hover:translate-y-[10%] transition-all w-5 md:w-10 xl:w-12 2xl:w-auto"
              />
            </div>

            <h1
              className={`font-arges ${className} text-cust-yellow text-[80px] md:text-[150px] xl:text-[200px] 2xl:text-[400px] hover:scale-110 duration-300`}
            >
              {nama.toUpperCase()}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
