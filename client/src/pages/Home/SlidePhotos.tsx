import React from "react";
import {
  Container,
  Div,
  RightText,
  SlideContrast,
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
        <Slide slidesToScroll={2} slidesToShow={3} indicators={true}>
          <img src={Slide1} alt="foto da sala 1" />
          <img src={Slide2} alt="foto da sala 2" />
          <img src={Slide3} alt="foto do mapa" />
        </Slide>
      </SliderContainer>
    </Container>
  );
};

export default SlidePhotos;
