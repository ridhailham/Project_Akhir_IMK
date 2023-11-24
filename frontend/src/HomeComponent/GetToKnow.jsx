const GetToKnow = () => {
  return (
    <>
      <img src="/rumput1.png" alt="" className="mt-11 h-[20%] w-[100%] md:h-[40%]" />
      <div
        className="h-[80%] w-full md:h-[100%] "
        style={{
          backgroundImage: "url(./NavMenu.svg)",
          // backgroundSize: "100vh",
          backgroundColor: "#055C9D",
        }}
      >
        <br />

        <br />
        <br />
        <div className="mb-10">
          <div className="group relative mx-auto w-fit">
            <div className="absolute -ml-[14%] -mt-[2%]">
              <img
                src="./sly/SLY 2.svg"
                alt=""
                className="hidden xl:block group-hover:-translate-y-[10%] duration-500 w-7 md:w-10 xl:w-12 2xl:w-auto"
              />
              <img
                src="./sly/SLY 3.svg"
                alt=""
                className="hidden xl:block group-hover:-translate-x-[10%] duration-500 w-7 md:w-10 xl:w-12 2xl:w-auto"
              />
            </div>
            <div className="group absolute right-0 bottom-0 -mr-[14%] -mb-[6%]">
              <img
                src="./sly/SLY 5.svg"
                alt=""
                className="hidden xl:block group-hover:translate-x-[10%] duration-500 w-7 md:w-10 xl:w-12 2xl:w-auto"
              />
              <img
                src="./sly/SLY 4.svg"
                alt=""
                className="hidden xl:block group-hover:translate-y-[10%] duration-500 w-7 md:w-10 xl:w-12 2xl:w-auto"
              />
            </div>

            <div className="relative">
              <div className=" flex flex-row">

              </div>
              <h2 className="hover:mb-[3%] ml-2 text-center group font-arges text-cust-light-yellow text-[80px] md:text-[150px] 2xl:text-[100px] duration-1000">

                WONDERFUL
              </h2>
              <br />
              <br />

              <img
                src="./Group3.png"
                alt=""
                className="w-[80%] bottom-0  duration-1000"
                style={{
                  left: 0,
                  right: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "-15px",

                }}
              />
              <h2 className="hover:mb-[3%]  ml-2 text-center group font-arges text-cust-light-yellow text-[80px] md:text-[150px] 2xl:text-[100px] duration-1000">
                INDONESIA
              </h2>
              <h2 className="hover:m-[5%] text-center group font-arges text-cust-light-yellow text-[100px] md:text-[200px] 2xl:text-[140px] duration-1000">
                <style>
                  {`
                    .group:hover h2 {
                      -webkit-text-fill-color: transparent; /* Make text transparent */
                      -webkit-text-stroke: 4px #FFB003; /* Set the stroke color and width */
                    }

                    @media (max-width: 1280px) {
                      .group:hover h2 { 
                        -webkit-text-fill-color: transparent; /* Make text transparent */
                        -webkit-text-stroke: 2px #FFB003; /* Set the stroke color and width for medium screens */
                      }
                    }
                  `}
                </style>
                {/* FESTIVAL */}
              </h2>
            </div>
          </div>
          <br />
          <br />
          <br />

          {/* <p className="w-9/12 xl:w-1/2 mx-auto  text-cust-green text-center text-sm md:text-base font-lato">
            Brawijaya Tournament merupakan salah satu program kerja Kementerian
            Kebudayaan, Pemuda, dan Olahraga Eksekutif Mahasiswa Universitas
            Brawijaya 2023. Brawijaya Tournament adalah sebuah kompetisi
            olahraga yang ditujukan pada kalangan SD, SMP, SMA, hingga Perguruan
            Tinggi. Tujuan diadakannya Brawijaya Tournament adalah sebagai
            laboratorium untuk berekspresi menuangkan bakat olahraga yang
            dimiliki, meningkatkan kemampuan, sekaligus sebagai ajang kompetisi
            untuk mencetak prestasi.
          </p> */}
        </div>
      </div>

    </>
  );
};

export default GetToKnow;
