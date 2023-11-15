import Landing from "../KompetisiComponent/Landing";
import background from "../assets/BGMerah.svg";
import { CheckUser } from "../api/sessionHelper";
import { Link } from "react-router-dom";
import maskotMusik from "../assets/maskotMusik.png"

const Basket = () => {
  return (
    <>
      <Landing name="Musik" />
      <div className="min-h-screen w-full flex bg-light-blue-800">
        <div className="flex flex-col md:flex-row items-center justify-center px-8">
          <div className="md:w-4/12 w-7/12">
            <img src="./MaskotBasket.svg" alt="" />
          </div>
          <div className="w-full md:w-6/12">
            <div className="text-cust-yellow md:text-justify text-center font-lato">
              <p>
                Bola basket adalah sebuah permainan bola besar yang terdiri dari
                lima anggota dalam setiap tim. Permainan ini dimainkan oleh dua
                tim yang bertanding mencetak skor dengan cara memasukkan bola
                pada ring.  Cabang olahraga kompetisi bola basket pada Brawijaya
                Tournament diperuntukkan kepada siswa SMA se-Malang dengan
                kategori tim putra. Jumlah dari tim yang bertanding adalah 12
                tim dengan sistem grup.
              </p>
            </div>
            <div className="flex flex-col md:flex-row mt-6 font-lato">
              <CheckUser forLoggedOut>
                <div>
                  <Link to="/register/basket">
                    <button className="mx-auto text-cust-yellow px-12 py-4 border-cust-yellow border-2 rounded-md font-bold md:mx-2 my-2 mb-12 md:mb-2 flex justify-center hover:bg-white duration-200">
                      BELI TIKET
                    </button>
                  </Link>
                </div>
                <div>
                  {/* <Link
                    to="https://drive.google.com/file/d/1iX8I8974NEJxiSiGYUDFEOE4xgpF9S8x/view?usp=drivesdk"
                    target="https://drive.google.com/file/d/1iX8I8974NEJxiSiGYUDFEOE4xgpF9S8x/view?usp=drivesdk"
                  >
                    <button className="mx-auto text-cust-yellow px-12 py-4 border-cust-yellow border-2 rounded-md font-bold md:mx-2 my-2 mb-12 md:mb-2 flex justify-center hover:bg-white duration-200">
                      SURAT PERSETUJUAN
                    </button>
                  </Link> */}
                </div>
              </CheckUser>
              <div>
                <Link
                  to="https://wa.me/6287782460603"
                  target="https://wa.me/6287782460603"
                >
                  <button className="mx-auto text-cust-yellow border-cust-yellow border-2 rounded-md font-bold md:mx-2 my-2 mb-12 md:mb-2 flex justify-center hover:bg-white duration-200">
                    <img src="Call.png" alt="" className="w-10/12 my-auto" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light-blue-600 font-poppins px-5 py-5">
        <div
          className="h-[90vh] w-full rounded-xl"
          style={{
            backgroundImage: "url(./NavMenu.svg)",
            backgroundSize: "100vh",
            backgroundColor: "#055C9D",
          }}
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
                20 Okt - 5 Nov 2023
              </div>
            </div>

            <div className="flex flex-col items-center hover:scale-125 duration-500">
              <div className="text-cust-yellow font-bold mb-3 sm:text-2xl text-[12px]">
                Match Day
              </div>
              <div className="bg-cust-yellow rounded-full sm:h-12 sm:w-12 h-6 w-6"></div>
              <div className="text-white font-bold mt-3 sm:text-2xl text-[12px]">
                16 - 19 Nov 2023
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden h-full w-full bg-light-blue-900">
        <div className="pb-10">
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="group flex items-center justify-center relative">
              <div className="text-cust-blue lg:text-8xl sm:text-6xl text-6xl font-arges font-semibold py-10 text-cust-yellow">
                MAGAZINE
              </div>
            </div>
          </div>
          <div className="group flex items-center justify-center relative">
            <iframe
              className="fp-iframe mx-auto w-8/12 h-[560px] mb-10"
              src="https://heyzine.com/flip-book/0f6b7c4aaa.html"
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

export default Basket;
