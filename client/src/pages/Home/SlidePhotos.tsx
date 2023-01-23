import React from "react";
import {
  Container,
  Div,
  RightText,
  SlideContrast,
  SlideImage,
  SliderContainer,
  SlideText,
  SlideTextContainer,
  SlideTitle,
} from "./styles";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Slide1 from "../../assets/images/slide1.jpg";
import Slide2 from "../../assets/images/slide2.jpg";
import Slide3 from "../../assets/images/slide3.jpg";
import Slide4 from "../../assets/images/slide4.jpg";
import Slide5 from "../../assets/images/slide5.jpg";

const responsiveSettings = [
  {
    breakpoint: 920,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 20,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const SlidePhotos: React.FC = () => {
  return (
    <Container id="estrutura">
      <RightText>
        <SlideTextContainer>
          <SlideTitle>Nosso espaço</SlideTitle>
          <SlideText>
            Entre em contato e<SlideContrast> marque uma visita!</SlideContrast>
          </SlideText>
        </SlideTextContainer>
      </RightText>
      <SliderContainer>
        <Slide
          slidesToScroll={2}
          slidesToShow={3}
          indicators={true}
          responsive={responsiveSettings}
        >
          <SlideImage src={Slide1} alt="foto da sala 1" />
          <SlideImage src={Slide2} alt="foto da sala 2" />
          <SlideImage src={Slide3} alt="foto da sala 3" />
          <SlideImage src={Slide4} alt="foto da sala 4" />
          <SlideImage src={Slide5} alt="foto da sala 5" />
        </Slide>
      </SliderContainer>
    </Container>
  );
};

export default SlidePhotos;
