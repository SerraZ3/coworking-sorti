import React from "react";
import { SliderContainer } from "./styles";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Slide1 from "../../assets/images/slide1.jpg";
import Slide2 from "../../assets/images/slide2.jpg";
import Slide3 from "../../assets/images/slide3.jpg";

const SlidePhotos: React.FC = () => {
  return (
    <SliderContainer>
      <Slide slidesToScroll={2} slidesToShow={2} indicators={true}>
        <img src={Slide1} alt="" />
        <img src={Slide2} alt="" />
        <img src={Slide3} alt="" />
      </Slide>
    </SliderContainer>
  );
};

export default SlidePhotos;
