import axios from "axios";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      let response = await axios.get(
        "https://admin2.brawijayatournament.com/berita"
      );
      console.log(response.data);
      setNews(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const latestNews = news.slice(-3);

  return (
    <>
      <div className="bg-cust-yellow py-5 min-h-screen">
        <div className="mx-auto w-fit lg:text-8xl md:text-7xl text-6xl font-bold text-cust-dark-green mb-0 mt-5 font-arges">
          NEWS
        </div>
        <div className="justify-between lg:flex lg:flex-wrap font-semibold w-4/5 sm:w-3/5 lg:w-5/6 mx-auto">
          {latestNews.map((item, index) => (
            <div
              key={index}
              className="w-11/12 md:w-10/12  mx-auto lg:w-1/3 h-3/4 px-4 py-4"
            >
              <div className="relative flex flex-col bg-cust-dark-green shadow-md z-0 group w-full px-5 cursor-pointer mt-8 mx-auto rounded-3xl drop-shadow-xl">
                <a href={item.link}>
                  <div className="relative overflow-hidden shadow-lg hover:shadow-none w-full mx-auto mt-5 rounded-3xl flex items-center justify-center">
                    <div
                      style={{
                        width: "100%",
                        paddingBottom: "100%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={`https://admin2.brawijayatournament.com/${item.image}`}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      />
                    </div>
                  </div>
                  <div className="pt-8 mb-4 lg:group-hover:mb-8 w-fit mx-auto transition-all duration-200">
                    <div className="w-fit lg:hidden lg:group-hover:flex flex justify-center lg:mt-0 mt-3 text-cust-light-yellow text-lg">
                      {item.name}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center md:mb-0 mb-10">
          <a href="https://www.instagram.com/brawijayatournament/">
            <div>
              <button className="group relative overflow-hidden w-full px-5 py-2 flex lg:py-2 lg:px-4 font-semibold text-xl lg:text-2xl border-cust-dark-green text-cust-dark-green border-2 rounded-lg hover:bg-cust-dark-green hover:text-white transition-all duration-250">
                <p className="pr-4 pl-3 ">Lihat Berita Lainnya</p>
              </button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default News;
