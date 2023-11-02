const GetToKnow = () => {
  return (
    <>
      <img src="/Gedung.png" alt="" className=" w-full" />
      <div className="py-16 md:py-28 bg-cust-dark-green">
        <div className="">
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
              <h2 className=" group font-arges text-cust-yellow text-[100px] md:text-[200px] 2xl:text-[300px] duration-500">
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
                GET TO KNOW
              </h2>

              <img
                src="./BrawijayaTournamentTxt.png"
                alt=""
                className="group-hover:mb-[4%] w-[90%] absolute bottom-0 mb-[5%] duration-500"
                style={{
                  left: 0,
                  right: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
          </div>

          <p className="w-9/12 xl:w-1/2 mx-auto text-cust-yellow text-center text-sm md:text-base font-lato">
            Brawijaya Tournament merupakan salah satu program kerja Kementerian
            Kebudayaan, Pemuda, dan Olahraga Eksekutif Mahasiswa Universitas
            Brawijaya 2023. Brawijaya Tournament adalah sebuah kompetisi
            olahraga yang ditujukan pada kalangan SD, SMP, SMA, hingga Perguruan
            Tinggi. Tujuan diadakannya Brawijaya Tournament adalah sebagai
            laboratorium untuk berekspresi menuangkan bakat olahraga yang
            dimiliki, meningkatkan kemampuan, sekaligus sebagai ajang kompetisi
            untuk mencetak prestasi.
          </p>
        </div>
      </div>
    </>
  );
};

export default GetToKnow;
