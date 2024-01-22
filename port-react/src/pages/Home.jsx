import React from "react";
import CustomScript from "./modules/CustomScript";
import Slider from "./modules/Slider";
import Welcome from "./modules/Welcome";
import About from "./modules/About";
import Reviews from "./modules/Reviews";
import Disclaimer from "./modules/Disclaimer";
import Experience from "./modules/Experience";
import Education from "./modules/Education";
import Skills from "./modules/Skills";
import Ads1 from "./modules/Ads1";
import LifeStyle from "./modules/LifeStyle";
import Work from "./modules/Work";

const Home = () => {
    return(
        <>
          <CustomScript>
            <Slider />
            <Welcome />
            <Disclaimer />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Reviews />
            <Ads1 />
            <LifeStyle />
            <Work />
          </CustomScript>
        </>
    );
}
export default Home;