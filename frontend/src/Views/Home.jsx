import Competition from "../HomeComponent/Competition";
import GetToKnow from "../HomeComponent/GetToKnow";
import Graffiti from "../HomeComponent/Graffiti";
import Landing from "../HomeComponent/Landing";
import Mascot from "../HomeComponent/Mascot";
import News from "../HomeComponent/News";
import { Parallax } from "react-scroll-parallax";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      
      <Landing />
      <Parallax translateY={[10 , -110]} className="h-screen md:translate-y-[-16] lg:translate-y-[-100] mb-10">
        <GetToKnow />
        <Mascot />
        <Graffiti />
        {/* <TimeLine /> */}
        {/* <News /> */}
        <Competition />
        <Footer />
      </Parallax>
    </>
  );
};

export default Home;
