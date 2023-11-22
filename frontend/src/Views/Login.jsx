import background from "../assets/BGMerah.svg";
import { CheckUser, setUserData } from "../api/sessionHelper";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    if (!loading) return;

    setMsg("Tunggu sebentar.");

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((reply) => {
        return reply.json();
      })
      .then((reply) => {
        console.log(reply);
        if (reply.message == "login berhasil") {
          setUserData(reply.token);
          if (setUserData) {
            setMsg("Redirecting...");
            setLoading(false);

            setTimeout(() => {
              if (reply.lomba == "mobile legend") {
                navigation("/tari");
              } else if (reply.lomba == "basket") {
                navigation("/musik");
              } else if (reply.lomba == "silat") {
                navigation("/wayangkulit");
              } else if (reply.lomba == "pubg") {
                navigation("/teater");
              }
              window.location.reload();
            }, 2000);
          }
        } else {
          setMsg(reply.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setMsg("Gagal Login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);
  return (
    <>
      <CheckUser forLoggedOut red>
        <div className="w-full h-screen lg:flex p-10 bg-gray-300">
          <div
            className="lg:w-6/12 w-full flex justify-items-center justify-center rounded-xl"
            style={{
              backgroundImage: "url(./NavMenu.svg)",
              backgroundSize: "100vh",
              backgroundColor: "#055C9D",
            }}
          >


            <div className="text-left lg:text-[100px] text-5xl w-9/12 text-cust-yellow font-bold h-fit my-auto py-20">
              <div className="mx-auto w-fit font-arges">Login Akun</div>
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
                Login Akun
              </div>
              <div className="text-cust-blue font-semibold text-md lg:text-sm text-left mb-1 mx-5 lg:ml-16 mt-5">
                Email
              </div>
              <input
                className="border-black rounded-xl border-2 bg-transparent px-3 py-2 w-11/12 lg:w-9/12 ml-0 sm:ml-3 lg:ml-12 mr-0 sm:mr-4 lg:mr-0 self-center sm:self-start"
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
                className="border-black rounded-xl border-2 bg-transparent px-3 py-2 w-11/12 lg:w-9/12 ml-0 sm:ml-3 lg:ml-12 mr-0 sm:mr-4 lg:mr-0 self-center sm:self-start"
                name="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                disabled={loading}
                className="font-lato text-black text-2xl lg:w-9/12 w-11/12 sm:ml-3 lg:ml-12 mt-5 border-2 border-black rounded-lg "
              >
                <div className="mx-auto w-fit py-2">Login →</div>
              </button>
              <div className="flex flex-col space-y-4 md:space-y-0 pt-4 md:pt-2 md:flex-row items-center justify-between sm:ml-3 lg:ml-12 lg:w-9/12 ">
                <span
                  className={`${loading && "animate-pulse"
                    } text-sm text-black font-normal`}
                >
                  {msg}
                </span>
              </div>
            </form>
          </div>
        </div>
      </CheckUser>
    </>
  );
};

export default Login;
