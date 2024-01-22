import React from "react";
import {useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ReactDOM } from "react-dom/client";

import "aos/dist/aos.css";
import Aos from "aos";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/sass/style.scss";

import Rendertotop from "./components/include/Rendertotop";
import Header from "./components/include/Header";
import Footer from "./components/include/Footer";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Contactus from "./components/Contactus";

import Top from "./components/include/Top";

const App = () => {
  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  return (
    <>
      <Rendertotop>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/*<Route path="*" element={"Page no found"} />*/}
        </Routes>
        <Footer />
        <Top />
      </Rendertotop>
    </>
  );
}

export default App;