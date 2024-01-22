import React from "react";
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/common/common.scss";

import Header from "./pages/modules/Header";
import Footer from "./pages/modules/Footer";
import Rendertotop from "./pages/modules/Rendertotop";
import Top from "./pages/modules/Top";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";

function App() {
  useEffect(() => {
    document.querySelectorAll("main .fw").forEach(function (e) {
      e.parentElement.classList.add("fwParent");
  });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Aboutus />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <div className="fw background"><i className="icon">&#xe039;</i></div>
      <Rendertotop />
      <Top />
    </>
  );
}

export default App;
