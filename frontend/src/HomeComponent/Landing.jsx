import { Parallax } from "react-scroll-parallax";
import videoBg from "../assets/videoBg1.mp4"

const Landing = () => {
  return (
    <>
      <div className="absolute top-0 h-fit w-full flex items-center justify-center">
        <video src={videoBg} autoPlay loop muted></video>
      </div>

      <Parallax speed={10} className="top-10 ">
        <div className="pt-[20%] pb-[14%] md:pt-[15vw] md:pb-[1vw] h-fit xl:mb-[-10vw] xl:pt-[11vw] w-full flex items-center justify-center">
          <img src="./Group2.png" alt="" className="" />
        </div>
      </Parallax>
    </>
  );
};

export default Landing;
