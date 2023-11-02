import { Link } from "react-router-dom";
import background from "../assets/BGMerah.svg";
import esport from "../assets/esport.png";
import Landing from "../KompetisiComponent/Landing";
import { CheckUser } from "../api/sessionHelper";

const MLBB = () => {
  return (
    <>
      <Landing name="MLBB" className="px-1 lg:px-6" />
      <div className="min-h-screen w-full flex bg-cust-dark-green">
        <div className="flex flex-col md:flex-row items-center justify-center px-8">
          <div className="md:w-2/12 w-4/12 lg:mt-0 mt-10 mr-10">
            <img src={esport} alt="" />
          </div>
          <div className="w-full md:w-6/12">
            <div className="text-cust-yellow md:text-justify text-center font-medium font-lato">
              E-Sport adalah olahraga elektronik yang memanfaatkan teknologi
              yang menggunakan game sebagai bidang kompetitif. E-Sport baru
              diresmikan menjadi cabang olahraga mulai tahun 2020. Cabang
              olahraga E-Sport meliputi dua game, yaitu Mobile Legends dan PUBG
              Mobile. Cabang lomba ini diperuntukkan kepada seluruh mahasiswa di
              Indonesia. Dengan system hybrid, dimana babak kualifikasi
              dilaksanakan secara online kemudian babak final dilaksanakan
              secara offline.
            </div>
            <div className="flex flex-col md:flex-row mt-6 font-lato">
              <CheckUser forLoggedOut>
                <div>
                  <Link to="/register/mlbb">
                    <button className="mx-auto text-cust-yellow px-12 py-4 border-cust-yellow border-2 rounded-md font-bold md:mx-2 my-2 mb-12 md:mb-2 flex justify-center hover:bg-cust-green duration-200">
                      Daftar
                    </button>
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://drive.google.com/file/d/1ohfgzXpsy8sP-AvaMpneyoIvoa87PZg_/view?usp=drivesdk"
                    target="https://drive.google.com/file/d/1ohfgzXpsy8sP-AvaMpneyoIvoa87PZg_/view?usp=drivesdk"
                  >
                    <button className="mx-auto text-cust-yellow px-12 py-4 border-cust-yellow border-2 rounded-md font-bold md:mx-2 my-2 mb-12 md:mb-2 flex justify-center hover:bg-cust-green duration-200">
                      Formulir
                    </button>
                  </Link>
                </div>
              </CheckUser>
              <div>
                <Link
                  to="https://wa.me/6287782460603"
                  target="https://wa.me/6287782460603"
                >
                  <button className="mx-auto text-cust-yellow border-cust-yellow border-2 rounded-md font-bold md:mx-2 my-2 mb-12 md:mb-2 flex justify-center hover:bg-cust-green duration-200">
                    <img src="Call.png" alt="" className="w-10/12 my-auto" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cust-yellow font-poppins px-5 py-5">
        <div
          className="h-[90vh] w-full rounded-xl"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="mx-auto flex justify-center pt-20 pb-52">
            <img src="./Timeline.svg" alt="" className="sm:w-2/12 w-4/12" />
          </div>
          <div className="flex justify-around items-center bg-cust-yellow w-full sm:h-5 h-3 font-lato">
            <div className="flex flex-col items-center hover:scale-125 duration-500">
              <div className="text-cust-yellow font-bold mb-3 sm:text-2xl text-[12px]">
                Registrasi
              </div>
              <div className="bg-cust-yellow rounded-full sm:h-12 sm:w-12 h-6 w-6"></div>
              <div className="text-white font-bold mt-3 sm:text-2xl text-[12px]">
                20 Oktober 2023
              </div>
            </div>
            <div className="flex flex-col items-center hover:scale-125 duration-500">
              <div className="text-cust-yellow font-bold mb-3 sm:text-2xl text-[12px]">
                Tecnical Meeting
              </div>
              <div className="bg-cust-yellow rounded-full sm:h-12 sm:w-12 h-6 w-6"></div>
              <div className="text-white font-bold mt-3 sm:text-2xl text-[12px]">
                01 November 2023
              </div>
            </div>
            <div className="flex flex-col items-center hover:scale-125 duration-500">
              <div className="text-cust-yellow font-bold mb-3 sm:text-2xl text-[12px]">
                Match Day
              </div>
              <div className="bg-cust-yellow rounded-full sm:h-12 sm:w-12 h-6 w-6"></div>
              <div className="text-white font-bold mt-3 sm:text-2xl text-[12px]">
                03 November 2023
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden h-full w-full bg-cust-yellow">
        <div className="pb-10">
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="group flex items-center justify-center relative">
              <div className="text-cust-blue lg:text-8xl sm:text-6xl text-6xl font-arges font-semibold py-10 text-cust-dark-green">
                BOOKLET
              </div>
            </div>
          </div>
          <div className="group flex items-center justify-center relative">
            <iframe
              className="fp-iframe mx-auto w-8/12 h-[560px] mb-10"
              src="https://heyzine.com/flip-book/3b81342258.html"
              loading="lazy"
              allowFullScreen={true}
            />
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen bg-cust-yellow">
        <div className="pt-10 flex justify-center">
          <img
            src="./PrizePool.svg"
            alt=""
            className="sm:w-fit w-2/4 text-center"
          />
        </div>
      </div> */}
    </>
  );
};

export default MLBB;
