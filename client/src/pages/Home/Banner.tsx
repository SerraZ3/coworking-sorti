import React from "react";
import {
  BannerContainer,
  BannerLeftContent,
  BannerRedTitle,
  BannerRightContent,
  BannerTitle,
  BigCircle,
  Container,
  OrangeBigCicle,
  SmallCircle,
} from "./styles";

const Banner: React.FC = () => {
  return (
    <Container id="home">
      <BannerContainer>
        <BannerLeftContent>
          <BannerTitle>
            <BannerRedTitle>Aumente seus resultados </BannerRedTitle>
            sem se preocupar com o espaço!
          </BannerTitle>
        </BannerLeftContent>
        <BannerRightContent>
          <OrangeBigCicle />
          <BigCircle />
          <SmallCircle />
        </BannerRightContent>
      </BannerContainer>
    </Container>
  );
};

export default Banner;
