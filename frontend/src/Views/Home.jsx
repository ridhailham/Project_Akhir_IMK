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
      <Parallax translateY={[20, -150]} className="h-screen">
        <GetToKnow />
        <Mascot />
        <Graffiti />
        {/* <TimeLine /> */}
        <News />
        <Competition />
        <Footer />
      </Parallax>
    </>
  );
};

export default Home;
