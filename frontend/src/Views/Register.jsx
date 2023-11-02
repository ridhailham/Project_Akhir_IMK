import background from "../assets/BGMerah.svg";
import { CheckUser } from "../api/sessionHelper";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Register = () => {
  const location = useLocation();
  const lomba = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassowrd] = useState("");
  const [tim, setTim] = useState("");
  const [wa, setWa] = useState("");
  const [form_peserta, setForm] = useState("");
  const [bukti_pembayaran, setBukti] = useState("");

  const navigation = useNavigate();

  useEffect(() => {
    if (!loading) return;

    setMsg("Tunggu sebentar.");

    fetch(
      `https://admin2.brawijayatournament.com/${
        lomba == "mlbb"
          ? "mobilelegend"
          : lomba == "basket"
          ? "basket"
          : lomba == "silat"
          ? "silat"
          : lomba == "pubg"
          ? "pubg"
          : ""
      }/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confPassword,
          tim,
          wa,
          form_peserta,
          bukti_pembayaran,
        }),
      }
    )
      .then((reply) => {
        return reply.json();
      })
      .then((reply) => {
        console.log(reply);
        if (reply.msg == "Register Berhasil") {
          setMsg("⏳  Redirecting...");
          setLoading(false);
          setTimeout(() => {
            navigation("/login");
            window.location.reload();
          }, 2000);
        } else {
          setMsg(reply.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        setMsg("Gagal Register");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);
  return (
    <>
      <CheckUser forLoggedOut red>
        <div className="w-full lg:flex p-10">
          <div
            className="lg:w-6/12 w-full flex justify-items-center justify-center rounded-xl"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="text-left mx-auto lg:text-5xl text-3xl w-9/12 text-cust-yellow font-bold h-fit my-auto lg:py-0 py-10">
              Pendaftaran Akun Kompetisi {lomba.toUpperCase()}
            </div>
          </div>
          <div className="lg:w-6/12 w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
              }}
            >
              <div className="text-4xl font-bold text-left mb-1 mx-5 lg:ml-12 mt-10">
                Registrasi Akun
              </div>
              <div className="text-cust-blue font-semibold text-md lg:text-sm text-left mb-1 mx-5 lg:ml-16 mt-5">
                Email
              </div>
              <input
                className="border-cust-dark-green rounded-xl border-2 bg-transparent px-3 py-2 w-11/12 lg:w-9/12 ml-0 sm:ml-3 lg:ml-12 mr-0 sm:mr-4 lg:mr-0 self-center sm:self-start"
                placeholder="brawuser@gmail.com"
                name="email"
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="text-cust-blue font-semibold text-md lg:text-sm text-left mb-1 mx-5 lg:ml-16 mt-5">
                Password
              </div>
              <input
                className="border-cust-dark-green rounded-xl border-2 bg-transparent px-3 py-2 w-11/12 lg:w-9/12 ml-0 sm:ml-3 lg:ml-12 mr-0 sm:mr-4 lg:mr-0 self-center sm:self-start"
                name="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-cust-blue font-semibold text-md lg:text-sm text-left mb-1 mx-5 lg:ml-16 mt-5">
                Confirm Password
              </div>
              <input
                className="border-cust-dark-green rounded-xl border-2 bg-transparent px-3 py-2 w-11/12 lg:w-9/12 ml-0 sm:ml-3 lg:ml-12 mr-0 sm:mr-4 lg:mr-0 self-center sm:self-start"
                name="confPassword"
                type="password"
                required
                onChange={(e) => setConfPassowrd(e.target.value)}
              />
              <div
                className={`${
                  lomba == "silat" ? "hidden" : ""
                } text-cust-blue font-semibold text-md lg:text-sm text-left mb-1 mx-5 lg:ml-16 mt-5`}
              >
                Nama Tim
              </div>
              <input
                className={`${
                  lomba == "silat" ? "hidden" : ""
                } border-cust-dark-green rounded-xl border-2 bg-transparent px-3 py-2 w-11/12 lg:w-9/12 ml-0 sm:ml-3 lg:ml-12 mr-0 sm:mr-4 lg:mr-0 self-center sm:self-start`}
                placeholder="Tim Juara"
                name="tim"
                type="text"
                onChange={(e) => setTim(e.target.value)}
              />
              <div className="text-cust-blue font-semibold text-md lg:text-sm text-left mb-1 mx-5 lg:ml-16 mt-5">
                {lomba == "silat" ? "Nama Lengkap" : "Nama Perwakilan Tim"}
              </div>
              <input
                className="border-cust-dark-green rounded-xl border-2 bg-transparent px-3 py-2 w-11/12 lg:w-9/12 ml-0 sm:ml-3 lg:ml-12 mr-0 sm:mr-4 lg:mr-0 self-center sm:self-start"
                placeholder="irza"
                name="name"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <div className="text-cust-blue font-semibold text-md lg:text-sm text-left mb-1 mx-5 lg:ml-16 mt-5">
                No WA
              </div>
              <input
                className="border-cust-dark-green rounded-xl border-2 bg-transparent px-3 py-2 w-11/12 lg:w-9/12 ml-0 sm:ml-3 lg:ml-12 mr-0 sm:mr-4 lg:mr-0 self-center sm:self-start"
                placeholder="0812111111"
                name="wa"
                type="text"
                required
                onChange={(e) => setWa(e.target.value)}
              />
              <div className="text-cust-blue font-semibold text-md lg:text-sm text-left mb-1 mx-5 lg:ml-16 mt-5">
                Link Formulir (Google Drive, format : Nama Ketua_Nama
                tim_Kompetisi)
              </div>
              <input
                className="border-cust-dark-green rounded-xl border-2 bg-transparent px-3 py-2 w-11/12 lg:w-9/12 ml-0 sm:ml-3 lg:ml-12 mr-0 sm:mr-4 lg:mr-0 self-center sm:self-start"
                placeholder="drive.google.com/"
                name="form_peserta"
                type="text"
                required
                onChange={(e) => setForm(e.target.value)}
              />
              <div className="text-cust-blue font-semibold text-md lg:text-sm text-left mb-1 mx-5 lg:ml-16 mt-5">
                Bukti Pembayaran (Google Drive, format : Nama Ketua_Nama
                tim_Kompetisi)
              </div>
              <input
                className="border-cust-dark-green rounded-xl border-2 bg-transparent px-3 py-2 w-11/12 lg:w-9/12 ml-0 sm:ml-3 lg:ml-12 mr-0 sm:mr-4 lg:mr-0 self-center sm:self-start"
                placeholder="drive.google.com/"
                name="bukti_pembayaran"
                type="text"
                required
                onChange={(e) => setBukti(e.target.value)}
              />
              <button
                disabled={loading}
                className="font-lato text-cust-dark-green text-2xl lg:w-9/12 w-11/12 sm:ml-3 lg:ml-12 mt-5 border-2 border-cust-dark-green rounded-lg "
              >
                <div className="mx-auto w-fit py-2">Register →</div>
              </button>
              <div className="flex flex-col space-y-4 md:space-y-0 pt-4 md:pt-2 md:flex-row items-center justify-between sm:ml-3 lg:ml-12 lg:w-9/12">
                <span
                  className={`${
                    loading && "animate-pulse"
                  } text-sm text-gray-700 font-normal`}
                >
                  {msg}
                </span>
                <div className="text-sm">
                  Sudah punya akun??{" "}
                  <button
                    onClick={() => {
                      navigation("/login");
                    }}
                    className="text-cust-dark-green"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </CheckUser>
    </>
  );
};

export default Register;
