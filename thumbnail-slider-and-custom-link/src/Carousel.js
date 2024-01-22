import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "./logo.png";

export default () => (
  <Carousel autoPlay infiniteLoop interval="5000" transitionTime="1000" showArrows={true}>
    <div>
      <img alt="" src={Image} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
    <img alt="" src={Image} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
    <img alt="" src={Image} />
      <p className="legend">Legend 3</p>
    </div>
    <div>
    <img alt="" src={Image} />
      <p className="legend">Legend 4</p>
    </div>
    <div>
    <img alt="" src={Image} />
      <p className="legend">Legend 5</p>
    </div>
  </Carousel>
);
