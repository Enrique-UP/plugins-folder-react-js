import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/style.scss";


import Header from "./pages/modules/Header";
import Footer from "./pages/modules/Footer";
import Rendertotop from "./pages/modules/Rendertotop";
import Top from "./pages/modules/Top";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LazyLoadImage from "./pages/LazyLoadImage";
import ContentSectionLazyLoad from "./pages/ContentSectionLazyLoad";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/lazyload" element={<LazyLoadImage />} />
        <Route exact path="/content" element={<ContentSectionLazyLoad />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <Rendertotop />
      <Top />
    </>
  );
}

export default App;
