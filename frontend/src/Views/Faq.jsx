import send from "../assets/send.svg";
import { useEffect, useState } from "react";

import React from "react";
import background from "../assets/BGMerah.svg";
import jellyfish from "../assets/jellyfish.svg";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Faq = ({}) => {
  const [pertanyaan, setFaq] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // useEffect(() => {
  //   if (!loading) return;

  //   setMsg("Tunggu sebentar.");

  //   fetch("link", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${getToken}`,
  //     },
  //     params: {
  //       bearer: getToken,
  //     },
  //     body: JSON.stringify({
  //       pertanyaan,
  //     }),
  //   })
  //     .then((reply) => {
  //       return reply.json();
  //     })
  //     .then((reply) => {
  //       console.log(reply);
  //       if (reply) {
  //         setMsg(
  //           "Pesan Berhasil terkirim dan akan segera di balas melalui email"
  //         );
  //         document.getElementById("faq").value = "";
  //         setLoading(false);
  //       } else {
  //         setMsg("Pesan gagal dikirim");
  //         setLoading(false);
  //       }
  //     });
  // }, [loading]);
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="bg-cust-yellow px-5 py-5">
      <section
        className="w-full h-full pt-36 md:pb-36 pb-20 rounded-lg"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-wrap mx-auto font-poppins">
          <div className="lg:w-4/12 w-9/12 mx-auto">
            <div className="pb-8">
              <img src={jellyfish} alt="star2SVG" className="w-2/12 " />
            </div>
            <div className="text-cust-yellow leading-relaxed font-poppins font-semibold lg:text-5xl text-3xl">
              Frequently
              <br />
              Asked Questions
            </div>
            <div className="text-white font-poppins font-semibold text-xl pt-4">
              Tidak menemukan jawaban?
              <br />
              Tulis pertanyaan di bawah
            </div>
            <div className="pt-6">
              <form
                className="border-2 lg:w-10/12 sm:w-3/4 w-full border-black flex justify-between rounded-full font-extralight"
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoading(true);
                }}
              >
                <input
                  type="text"
                  id="faq"
                  className="text-lg pl-4 py-1 mr-1 w-10/12 bg-transparent outline-none font-semibold"
                  placeholder="Tulis pertanyaan..."
                  onChange={(e) => setFaq(e.target.value)}
                  required
                />
                <button
                  className="px-2 hover:bg-cust-artikel duration-300 hover:border-l-2 rounded-r-full flex gap-1 justify-center items-center overflow-hidden group"
                  type="submit"
                >
                  <span className="flex items-center justify-center gap-1 group-hover:gap-0 group-hover:translate-x-0 translate-x-2/3 transition-all duration-300">
                    <img src={send} alt="star2SVG" className="w-7" />
                    <p className="font-semibold text-black/80 mt-0.5 ml-0.5">
                      Kirim
                    </p>
                  </span>
                </button>
              </form>
            </div>
            <span
              className={`${
                loading && "animate-pulse"
              } text-sm text-gray-700 font-normal`}
            >
              {msg}
            </span>
          </div>

          <div className="lg:w-1/2 w-3/4 flex flex-col gap-4 mt-12 mx-auto">
            <Accordion
              className="bg-cust-dark-green px-10 rounded-3xl "
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader
                className="text-cust-yellow font-poppins lg:text-lg text-base font-bold text-justify hover:text-cust-light-yellow"
                onClick={() => handleOpen(1)}
              >
                Siapa yang akan melayani saat konseling?
              </AccordionHeader>
              <AccordionBody className="text-white font-semibold lg:text-base text-sm font-poppins">
                Saat konseling kamu akan dilayani oleh psikolog dari fakultas
                atau teman sebaya yang sudah terverifikasi keahlianya.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="bg-cust-dark-green px-10 rounded-3xl"
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader
                className=" text-cust-yellow font-poppins lg:text-lg text-base font-bold text-justify hover:text-cust-light-yellow"
                onClick={() => handleOpen(2)}
              >
                Mengapa harus menggunakan email UB saat mendaftar ULTKSP atau
                Konseling?
              </AccordionHeader>
              <AccordionBody className="text-white font-poppins font-semibold lg:text-base text-sm ">
                Email UB bertujuan untuk memastikan bahwa kamu salah satu dari
                mahasiswa FILKOM UB serta sebagai media konfirmasi setelah kamu
                melakukan pendaftaran ULTKSP dan Konseling.
              </AccordionBody>
            </Accordion>

            <Accordion
              className="bg-cust-dark-green px-10 rounded-3xl"
              open={open === 3}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader
                className="text-cust-yellow font-poppins lg:text-lg text-base font-bold text-justify hover:text-cust-light-yellow"
                onClick={() => handleOpen(3)}
              >
                Apakah kerahasiaan data saya terjamin?
              </AccordionHeader>
              <AccordionBody className="text-white font-poppins font-semibold lg:text-base text-sm">
                Tidak perlu khawatir, privasi dan kerahasiaan Anda adalah
                prioritas kami. Segala data dan identitas hanya digunakan untuk
                kepentingan konseling.
              </AccordionBody>
            </Accordion>

            <Accordion
              className="bg-cust-dark-green px-10 rounded-3xl"
              open={open === 4}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader
                className="text-cust-yellow font-poppins lg:text-lg text-base font-bold text-justify hover:text-cust-light-yellow"
                onClick={() => handleOpen(4)}
              >
                Bagaimana menentukan jadwal konseling saya?
              </AccordionHeader>
              <AccordionBody className="text-white font-poppins font-semibold lg:text-base text-sm">
                Untuk jadwal konseling akan dijadwalkan oleh kemahasiswaan dan
                diinformasikan lebih lanjut melalui contact person yang telah
                kamu berikan pada saat pendaftaran.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
