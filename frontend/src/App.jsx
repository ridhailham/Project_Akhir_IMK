import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Basket from "./Kompetisi/Basket";
import MLBB from "./Kompetisi/MLBB";
import Pubg from "./Kompetisi/Pubg";
import Silat from "./Kompetisi/Silat";
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
                <Route path="/basket" element={<Basket />} />
                <Route path="/mlbb" element={<MLBB />} />
                <Route path="/pubg" element={<Pubg />} />
                <Route path="/silat" element={<Silat />} />
              </Route>
            </Route>
            <Route path="/register/mlbb" element={<Register />} />
            <Route path="/register/pubg" element={<Register />} />
            <Route path="/register/silat" element={<Register />} />
            <Route path="/register/basket" element={<Register />} />
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
      </ParallaxProvider>
    </>
  );
}

export default App;
