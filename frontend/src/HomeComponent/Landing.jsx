import { Parallax } from "react-scroll-parallax";

const Landing = () => {
  return (
    <>
      <div className="absolute top-0 h-fit w-full flex items-center justify-center">
        <img src="./Landing1.jpeg" alt="" className="w-full" />
      </div>

      <Parallax speed={10} className="top-10 ">
        <div className="pt-[20%] pb-[14%] md:pt-[15vw] md:pb-[1vw] h-fit xl:mb-[-10vw] xl:pt-[11vw] w-full flex items-center justify-center">
          <img src="./pdi4.png" alt="" className="px-[10vw]" />
        </div>
      </Parallax>
    </>
  );
};

export default Landing;
