import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Musik from "./Kompetisi/Musik";
import Tari from "./Kompetisi/Tari";
import Teater from "./Kompetisi/Teater";
import WayangKulit from "./Kompetisi/wayangKulit";
import Home from "./Views/Home";
import Layout from "./Views/Layout";
import Login from "./Views/Login";
import Register from "./Views/Register";
import LayoutWithBack from "./Views/LayoutWithBack";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <ParallaxProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* {/Landing page/} */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route element={<LayoutWithBack />}>
                <Route path="/musik" element={<Musik />} />
                <Route path="/tari" element={<Tari />} />
                <Route path="/teater" element={<Teater />} />
                <Route path="/wayangkulit" element={<WayangKulit />} />
              </Route>
            </Route>
            <Route path="/register/tari" element={<Register />} />
            <Route path="/register/teater" element={<Register />} />
            <Route path="/register/wayangkulit" element={<Register />} />
            <Route path="/register/musik" element={<Register />} />
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
      </ParallaxProvider>
    </>
  );
}

export default App;
